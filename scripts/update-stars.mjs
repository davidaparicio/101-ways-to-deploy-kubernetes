#!/usr/bin/env node
/**
 * Refreshes the "stars" field of every solution in data/solutions.yaml that
 * already has one and points to a GitHub repository.
 *
 * Only the "stars:" lines are rewritten, the rest of the file is left untouched
 * (no YAML round trip, which would reformat unrelated entries).
 *
 * Counts are rounded (nearest ten from 100, nearest hundred from 1000) to limit
 * churn between runs.
 *
 * Usage: GITHUB_TOKEN=$(gh auth token) node scripts/update-stars.mjs
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const yamlPath = join(process.cwd(), 'data', 'solutions.yaml');
const lines = readFileSync(yamlPath, 'utf8').split('\n');

const targets = [];
let current = null;
lines.forEach((line, index) => {
  if (line.startsWith('  - name:')) {
    current = { name: line.slice('  - name:'.length).trim(), url: null };
    return;
  }
  if (!current) return;
  const url = line.match(/^    url:\s*['"]?([^'"\s]+)/);
  if (url) {
    current.url = url[1];
    return;
  }
  const stars = line.match(/^    stars:\s*(\d+)\s*$/);
  if (stars) {
    const repo = current.url?.match(/^https?:\/\/github\.com\/([^/]+)\/([^/#?]+)/);
    if (repo) {
      targets.push({
        name: current.name,
        repo: `${repo[1]}/${repo[2].replace(/\.git$/, '')}`,
        index,
        stars: Number(stars[1]),
      });
    }
  }
});

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': '101-ways-to-deploy-kubernetes',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

const round = (n) => {
  if (n >= 1000) return Math.round(n / 100) * 100;
  if (n >= 100) return Math.round(n / 10) * 10;
  return n;
};

const changed = [];
const notFound = [];
const archived = [];
const failed = [];

for (const t of targets) {
  let res;
  try {
    res = await fetch(`https://api.github.com/repos/${t.repo}`, { headers });
  } catch (e) {
    failed.push(`${t.name} (${t.repo}): ${e.message}`);
    continue;
  }
  if (res.status === 404) {
    notFound.push(`${t.name} (${t.repo})`);
    continue;
  }
  if (!res.ok) {
    failed.push(`${t.name} (${t.repo}): HTTP ${res.status} ${await res.text()}`);
    continue;
  }
  const data = await res.json();
  if (data.archived) archived.push(`${t.name} (${t.repo})`);
  const stars = round(data.stargazers_count);
  if (stars !== t.stars) {
    lines[t.index] = lines[t.index].replace(/\d+/, String(stars));
    changed.push(`${t.name}: ${t.stars} -> ${stars}`);
  }
}

if (changed.length > 0) writeFileSync(yamlPath, lines.join('\n'));

console.log(`Checked ${targets.length} repositories, ${changed.length} updated.`);
for (const [title, list] of [
  ['Updated', changed],
  ['Archived (consider "abandoned: true")', archived],
  ['Not found', notFound],
  ['Failed', failed],
]) {
  if (list.length === 0) continue;
  console.log(`\n${title}:`);
  list.forEach((item) => console.log(`  - ${item}`));
}

if (failed.length > 0) process.exit(1);
