---
layout: page
title: "RegionAligner: Bridging Ego-Exo Views for Object Correspondence via Unified Text-Visual Learning"
authors: Yuhao Su, Ehsan Elhamifar
description: Developed a unified text-visual learning framework for ego-exo object correspondence. Leverages large VLMs to filter visual distractors and introduces region-guided supervision. Includes unsupervised extension. Improves IoU by 10.16% (ego-to-exo) and 6.04% (exo-to-ego) on Ego-Exo4D.
venue: WACV
year: 2026
img:
abbr: WACV
importance: 2
category: work
pdf: "#"
github: "#"
website:
---

RegionAligner addresses the challenge of establishing object correspondence between egocentric (first-person) and exocentric (third-person) views by developing a unified text-visual learning framework.

## Key Contributions

- **Vision-Language Model Integration**: Leverages large VLMs to effectively filter visual distractors in multi-view scenarios
- **Region-Guided Supervision**: Introduces novel region-guided supervision mechanism for improved correspondence learning
- **Unsupervised Extension**: Provides an unsupervised learning approach for scenarios with limited labeled data

## Results

Our method achieves significant improvements on the Ego-Exo4D benchmark:
- **10.16% IoU improvement** on ego-to-exo correspondence
- **6.04% IoU improvement** on exo-to-ego correspondence
