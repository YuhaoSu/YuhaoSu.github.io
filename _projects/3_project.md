---
layout: page
title: "MedGRPO: Multi-Task Reinforcement Learning for Heterogeneous Medical Video Understanding"
authors: Yuhao Su, Anwesa Choudhuri, Zhongpai Gao, Benjamin Planche, Van Nguyen Nguyen, Meng Zheng, Yuhan Shen, Arun Innanje, Terrence Chen, Ehsan Elhamifar, Ziyan Wu
description: Introduced MedVidBench, a large-scale multi-task medical video understanding dataset with 531K video-instruction pairs and 8 tasks covering video, segment, and frame-level understanding. Developed MedGRPO, a multi-task RL framework with cross-dataset reward normalization for balanced training and medical LLM judge for caption evaluation. Improves over SFT baseline across tasks (e.g., +0.074 mIoU@0.3 on temporal action grounding, +0.588 LLM score on video summary).
venue:
year:
img:
abbr:
importance: 1
category: work
pdf: "#"
github:
website:
---

MedGRPO introduces a comprehensive framework for medical video understanding, combining a large-scale dataset with a novel multi-task reinforcement learning approach.

## MedVidBench Dataset

- **531K video-instruction pairs**: Large-scale dataset for medical video understanding
- **8 diverse tasks**: Covers video-level, segment-level, and frame-level understanding
- Enables comprehensive evaluation of medical video models

## MedGRPO Framework

- **Multi-Task Reinforcement Learning**: Novel RL framework designed for heterogeneous medical video tasks
- **Cross-Dataset Reward Normalization**: Ensures balanced training across different tasks and datasets
- **Medical LLM Judge**: Specialized evaluation for medical video caption quality

## Performance Improvements

Compared to supervised fine-tuning (SFT) baseline:
- **+0.074 mIoU@0.3** on temporal action grounding
- **+0.588 LLM score** on video summary generation
- Consistent improvements across all 8 tasks
