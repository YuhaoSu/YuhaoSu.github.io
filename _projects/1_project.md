---
layout: page
title: Two-Stage Active Learning for Efficient Temporal Action Segmentation
authors: Yuhao Su, Ehsan Elhamifar
description: We developed a two-stage active learning framework for temporal action segmentation (TAS) that achieves 95% of full-supervision performance with only 0.35% of labeled frames, significantly reducing annotation costs.
venue: ECCV
year: 2024
img:
abbr: ECCV
importance: 3
category: work
pdf: https://www.khoury.northeastern.edu/home/eelhami/publications/ATAS-ECCV24.pdf
github: "#"
website:
---

## Overview

We developed a two-stage active learning framework for temporal action segmentation (TAS) that achieves near-full-supervision performance with minimal annotations. This work addresses the challenge of expensive frame-level annotation in long video sequences.

## Key Contributions

- **Inter-video Selection**: Diverse video sampling strategy to select the most informative videos from the dataset
- **Intra-video Selection**: Identifies the most representative frames within selected videos for annotation
- **Prototype-based Learning**: Efficient TAS model that learns from limited annotations
- **Semi-supervised Extension**: Leverages unlabeled data to further improve performance

## Results

Our method achieves **95% of full-supervision performance** while using only **0.35% of labeled frames**, significantly reducing annotation costs while maintaining high accuracy.
