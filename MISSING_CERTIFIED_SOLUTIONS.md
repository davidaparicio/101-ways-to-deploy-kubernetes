# Missing Certified Kubernetes Solutions Analysis

This document analyzes certified Kubernetes solutions from the CNCF landscape that are missing from the 101-ways-to-deploy-kubernetes repository and could potentially be added based on the CONTRIBUTING.md criteria.

## Summary

- **Total Certified Solutions in CNCF Landscape**: ~144
- **Solutions Already in Repository**: ~42
- **Solutions Missing**: ~102
- **Solutions Recommended for Addition**: ~40

## Filtering Criteria (from CONTRIBUTING.md)

✅ **Should be added:**
- Kubernetes Deployment Tools that help install/create/provision clusters
- Kubernetes Distributions (different flavors of Kubernetes)  
- Managed Kubernetes Services (cloud provider managed clusters)
- Desktop/Local Development Tools
- Selfhosted Solutions for production clusters
- Management Platforms that deploy multiple clusters
- Infrastructure as Code tools for K8s deployment

❌ **Should NOT be added:**
- PaaS offerings running ON Kubernetes (not deployment tools)
- Applications deployed TO Kubernetes
- Add-ons and extensions (service meshes, ingress, monitoring)
- Enterprise-only solutions with no public access
- Region-specific solutions with language barriers

## Recommended Additions by Category

### 1. MANAGED - Cloud Provider Kubernetes Services (27 solutions)

These are certified managed Kubernetes services from various cloud providers that fit the "Managed" category criteria.

#### High Priority (Public cloud providers with English documentation)

1. **CoreWeave Kubernetes Service (CKS)**
   - Provider: CoreWeave
   - URL: https://www.coreweave.com/kubernetes
   - Notes: GPU-accelerated cloud provider, growing in AI/ML space
   - Category: Managed

2. **Gcore Managed Kubernetes**
   - Provider: Gcore
   - URL: https://gcore.com/cloud/managed-kubernetes
   - Notes: Edge cloud provider with global presence
   - Category: Managed

3. **STACKIT Kubernetes Engine (SKE)**
   - Provider: STACKIT (Schwarz IT - Lidl/Kaufland parent company)
   - URL: https://www.stackit.de/en/product/stackit-kubernetes-engine/
   - Notes: German cloud provider with English docs
   - Category: Managed

4. **Elastx Private Kubernetes**
   - Provider: Elastx (Sweden)
   - URL: https://elastx.se/en/kubernetes/
   - Notes: Swedish sovereign cloud provider
   - Category: Managed

5. **Leaseweb Managed Kubernetes**
   - Provider: Leaseweb
   - URL: https://www.leaseweb.com/cloud/kubernetes
   - Notes: Dutch hosting/cloud provider
   - Category: Managed

6. **Metal Stack Cloud Kubernetes**
   - Provider: Metal Stack
   - URL: https://www.metalstack.cloud/
   - Notes: Bare metal cloud provider
   - Category: Managed

7. **Orka (MacStadium)**
   - Provider: MacStadium
   - URL: https://www.macstadium.com/orka
   - Notes: Unique - Kubernetes for Mac infrastructure (CI/CD for iOS/macOS)
   - Category: Managed

8. **StarlingX**
   - Provider: OpenStack Foundation
   - URL: https://www.starlingx.io/
   - Repo: https://github.com/starlingx
   - Notes: Edge cloud computing platform with integrated Kubernetes
   - Category: Managed

9. **Tencent Kubernetes Engine (TKE)**
   - Provider: Tencent Cloud
   - URL: https://www.tencentcloud.com/products/tke
   - Notes: Major Chinese cloud provider with international presence
   - Category: Managed

10. **Volcengine Kubernetes Engine (VKE)**
    - Provider: ByteDance (TikTok parent company)
    - URL: https://www.volcengine.com/products/kubernetes-engine
    - Notes: ByteDance's cloud platform
    - Category: Managed

#### Medium Priority (Regional providers, less documentation)

11. **Aruba Managed Kubernetes**
    - Provider: Aruba (HPE)
    - URL: https://www.arubacloud.com/kubernetes.aspx
    - Notes: Italian cloud provider, part of HPE
    - Category: Managed

12. **Avisi AME**
    - Provider: Avisi (Netherlands)
    - URL: https://www.avisi.nl/
    - Notes: Dutch managed Kubernetes platform
    - Category: Managed

13. **Catalyst Kubernetes Service**
    - Provider: Catalyst Cloud (New Zealand)
    - URL: https://catalystcloud.nz/services/paas/kubernetes/
    - Notes: New Zealand OpenStack-based cloud
    - Category: Managed

14. **Control Plane Managed Kubernetes**
    - Provider: Control Plane
    - URL: https://controlplane.com/
    - Notes: Managed Kubernetes platform
    - Category: Managed

15. **NETWAYS Managed Kubernetes**
    - Provider: NETWAYS (Germany)
    - URL: https://www.netways.de/
    - Notes: German open source specialist
    - Category: Managed

16. **Nirmata Managed Kubernetes**
    - Provider: Nirmata
    - URL: https://www.nirmata.com/
    - Notes: Also has a management platform offering
    - Category: Managed (and possibly Management Platform)

17. **Previder Kubernetes Engine (PKE)**
    - Provider: Previder (Netherlands)
    - URL: https://www.previder.com/
    - Notes: Dutch cloud provider
    - Category: Managed

18. **Swisscom Kubernetes Service**
    - Provider: Swisscom
    - URL: https://www.swisscom.ch/en/business/enterprise/offer/cloud/kubernetes.html
    - Notes: Swiss telecommunications provider
    - Category: Managed

19. **Switch Cloud Kubernetes (SCK)**
    - Provider: SWITCH (Switzerland)
    - URL: https://www.switch.ch/
    - Notes: Swiss academic cloud provider
    - Category: Managed

20. **Taikun CloudWorks**
    - Provider: Taikun
    - URL: https://taikun.cloud/
    - Notes: Multi-cloud Kubernetes management (could also be Management Platform)
    - Category: Managed / Management Platform

#### Lower Priority (Limited public info or region-specific)

21-27. Baidu Cloud Container Engine, Hikube, Huawei Cloud Container Engine (CCE), Intel Kubernetes Service, Samsung Kubernetes Engine (SKE), Tata Communications Vayu Kubernetes Service, WKS - Wiit Kubernetes Service

### 2. SELFHOSTED - Kubernetes Distributions (6 solutions)

These are certified Kubernetes distributions that can be self-hosted.

1. **Constellation**
   - Provider: Edgeless Systems
   - URL: https://www.edgeless.systems/products/constellation/
   - Repo: https://github.com/edgelesssys/constellation
   - License: AGPL 3.0
   - Notes: Confidential computing Kubernetes - isolates clusters from infrastructure
   - Category: Selfhosted
   - Based on: K3s or K0s with confidential VMs

2. **Plural**
   - Provider: Plural
   - URL: https://www.plural.sh/
   - Repo: https://github.com/pluralsh/plural
   - License: Apache 2.0
   - Notes: Open-source Kubernetes deployment platform
   - Category: Selfhosted / IaC
   - Based on: Terraform, Helm

3. **Red Hat Build of Microshift**
   - Provider: Red Hat
   - URL: https://www.redhat.com/en/technologies/cloud-computing/openshift/microshift
   - Repo: https://github.com/openshift/microshift
   - License: Apache 2.0
   - Notes: Lightweight OpenShift for edge/IoT
   - Category: Selfhosted
   - Based on: OpenShift/OKD

4. **Kublr**
   - Provider: Kublr
   - URL: https://kublr.com/
   - License: ❌ (Proprietary)
   - Notes: Enterprise Kubernetes platform
   - Category: Selfhosted / Management Platform

5. **Giant Swarm**
   - Provider: Giant Swarm
   - URL: https://www.giantswarm.io/
   - Repo: https://github.com/giantswarm
   - License: Apache 2.0 (components)
   - Notes: Managed Kubernetes platform
   - Category: Management Platform

6. **Robin CNP (Cloud Native Platform)**
   - Provider: Robin.io (acquired by Rakuten)
   - URL: https://robin.io/
   - License: ❌ (Proprietary)
   - Notes: Cloud-native storage platform with K8s
   - Category: Selfhosted (if storage is core feature, might not fit criteria)

### 3. IAC / INSTALLER - Infrastructure as Code & Installers (4 solutions)

1. **Cozystack**
   - Provider: Cosystack
   - Repo: https://github.com/cozystack/cozystack
   - License: Apache 2.0
   - Notes: Free PaaS platform based on Kubernetes
   - Category: IaC / Selfhosted
   - Based on: Talos Linux, Kamaji

2. **Cybozu Kubernetes Engine (CKE)**
   - Provider: Cybozu
   - Repo: https://github.com/cybozu-go/cke
   - License: Apache 2.0
   - Notes: Distributed Kubernetes cluster manager
   - Category: IaC / Selfhosted
   - Based on: Kubernetes

3. **Kubeasz**
   - Provider: EaszLab (Chinese community project)
   - Repo: https://github.com/easzlab/kubeasz
   - License: MIT
   - Notes: Ansible-based Kubernetes deployment tool
   - Category: IaC
   - Based on: Ansible, similar to Kubespray

4. **NKD (NestOS Kubernetes Deployer)**
   - Provider: OpenAnolis Community
   - Repo: https://github.com/openanolis/nkd (might need verification)
   - License: Apache 2.0
   - Notes: Kubernetes deployment for NestOS
   - Category: IaC / Kubernetes OS
   - Based on: NestOS (Fedora CoreOS-like)

### 4. MANAGEMENT PLATFORM (3 solutions)

Platforms that help deploy and manage multiple Kubernetes clusters.

1. **Giant Swarm**
   - Already covered above in Selfhosted
   - Category: Management Platform

2. **Nirmata**
   - Already covered above in Managed
   - Has both managed service and management platform
   - Category: Management Platform

3. **Taikun**
   - Already covered above in Managed
   - Multi-cloud Kubernetes management
   - Category: Management Platform

## Solutions NOT Recommended

### Why some certified solutions are excluded:

1. **Enterprise-only with no public access:**
   - Many certified distributions from enterprises (Alibaba, Huawei internal, various Chinese companies)
   - No public documentation or trial available
   - Examples: Many of the Chinese enterprise platforms

2. **Region-specific with language barriers:**
   - China-only services with Chinese-only documentation
   - Examples: China Mobile CMIT PaaS, JD.com JDOS, etc.

3. **Merged or discontinued:**
   - Products that have been merged into others
   - Example: AKS Engine (abandoned)

4. **Not actually deployment tools:**
   - Some "certified" entries are actually PaaS platforms
   - Don't help deploy Kubernetes, they run on it

5. **Insufficient information:**
   - Some solutions lack sufficient public documentation
   - Unable to verify they fit the criteria

## Implementation Recommendations

### Phase 1: Add High-Value Open Source Solutions (Priority 1)
- Constellation (confidential computing - unique offering)
- Plural (open source deployment platform)
- Red Hat Build of Microshift (edge/IoT focused)
- Cozystack (PaaS with K8s)
- Cybozu Kubernetes Engine (CKE)

### Phase 2: Add Well-Known Managed Services (Priority 2)
- CoreWeave (GPU cloud - hot topic)
- Gcore (edge/CDN provider)
- STACKIT (major European cloud)
- Tencent/Volcengine (major Asian clouds)
- StarlingX (OpenStack edge platform)
- Orka (unique Mac infrastructure)

### Phase 3: Add Regional Providers (Priority 3)
- European providers: Elastx, Leaseweb, Metal Stack, NETWAYS, Previder, Swisscom, Switch
- Other regions: Catalyst (NZ), various others

### Phase 4: Add Management Platforms
- Giant Swarm
- Nirmata (management platform aspect)
- Taikun

## Notes on Categorization

Some solutions could fit multiple categories:
- **Nirmata**: Both Managed service AND Management Platform
- **Taikun**: Both Managed service AND Management Platform
- **Giant Swarm**: Management Platform but also has distribution aspects
- **Plural**: Could be IaC or Selfhosted
- **Cozystack**: Could be IaC, Selfhosted, or even Management Platform

For these, choose the primary category based on the main use case.

## Verification Needed

Before adding any solution, verify:
1. ✅ Public documentation exists
2. ✅ Fits CONTRIBUTING.md criteria (deployment tool, not app platform)
3. ✅ Has English documentation or clear usage examples
4. ✅ Is actively maintained (check last commit/release)
5. ✅ Has clear licensing information
6. ✅ Can identify "Based on" technology where applicable

## Conclusion

Out of 102 missing certified solutions, approximately **40 solutions** are good candidates for addition:
- 27 managed services (with varying priority levels)
- 6 selfhosted distributions
- 4 IaC/installer tools  
- 3 management platforms

The rest are excluded due to being enterprise-only, region-locked, lacking documentation, or not fitting the repository's criteria.
