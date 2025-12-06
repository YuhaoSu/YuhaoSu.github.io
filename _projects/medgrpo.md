---
layout: page
title: "MedGRPO: Multi-Task Reinforcement Learning for Heterogeneous Medical Video Understanding"
authors: Yuhao Su, Anwesa Choudhuri, Zhongpai Gao, Benjamin Planche, Van Nguyen Nguyen, Meng Zheng, Yuhan Shen, Arun Innanje, Terrence Chen, Ehsan Elhamifar, Ziyan Wu
description: "<b>Task:</b> The work introduces the MedVidBench benchmark (531K video-instruction pairs) and the MedGRPO RL framework, which utilizes cross-dataset reward normalization and a medical LLM judge to stabilize training and advance medical video understanding.<br><b>Results:</b> Supervised fine-tuning on MedVidBench outperforms GPT-4.1 and Gemini-2.5-Flash across all tasks, with MedGRPO further improving performance over the SFT baseline on multiple tasks."
venue:
year:
img:
abbr:
importance: 1
category: work
pdf: "#"
github: https://github.com/YuhaoSu/MedGRPO
website: https://yuhaosu.github.io/MedGRPO/
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
