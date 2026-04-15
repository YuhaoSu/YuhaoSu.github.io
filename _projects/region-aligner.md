---
layout: page
title: "RegionAligner: Bridging Ego-Exo Views for Object Correspondence via Unified Text-Visual Learning"
authors: Yuhao Su, Ehsan Elhamifar
description:
venue: WACV
year: 2026
img: /assets/img/publication_preview/region_aligner_wacv26.jpg
abbr: WACV
importance: 2
category: work
pdf: "https://openaccess.thecvf.com/content/WACV2026/papers/Su_RegionAligner_Bridging_Ego-Exo_Views_for_Object_Correspondence_via_Unified_Text-Visual_WACV_2026_paper.pdf"
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
