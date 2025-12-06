---
layout: page
title: "RegionAligner: Bridging Ego-Exo Views for Object Correspondence via Unified Text-Visual Learning"
authors: Yuhao Su, Ehsan Elhamifar
description: "<b>Task:</b> RegionAligner is proposed as a unified text-visual framework that uses VLMs to filter distractors and applies region-guided supervision to solve the challenging problem of cross-view object correspondence between egocentric and exocentric videos.<br><b>Results:</b> RegionAligner significantly outperforms baselines on Ego-Exo4D, achieving IoU improvements of 10.16% (ego-to-exo) and 6.04% (exo-to-ego), while also demonstrating adaptation to unsupervised settings."
venue: WACV
year: 2026
img:
abbr: WACV
importance: 2
category: work
pdf: "#"
github: https://github.com/YuhaoSu/RegionAligner
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
