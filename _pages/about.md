---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate in Computer Science

profile:
  align: right
  image: yuhao_head.jpg
  image_circular: false
  more_info:

selected_papers: false
social: true

announcements:
  enabled: false   # rendered manually below (between bio and Selected Works)
  scrollable: true
  limit: 5

latest_posts:
  enabled: false          # ✅ turn this ON
  scrollable: false      # blog list without scroll box
  limit: 3               # number of posts to show
---

**Yuhao Su** is a PhD candidate in Computer Science at [Khoury College of Computer Sciences](https://www.khoury.northeastern.edu/) at Northeastern University, advised by [Prof. Ehsan Elhamifar](https://www.khoury.northeastern.edu/home/eelhami/). His research focuses on multimodal LLMs, video understanding, and agentic and interactive AI.

He was a Research Intern at [Samsung Research America](https://sra.samsung.com/) (2026) and [United Imaging Intelligence](https://www.uii-ai.com/) (2025). Before Northeastern, he earned his B.A. in Mathematics and Computer Science from [the University of Minnesota](https://www.umn.edu).

He is seeking full-time Applied/Research Scientist, MLE, and SWE roles starting 2027.

---

## <span id="news"></span> News

{% include news.liquid limit=true %}

---

## <span id="selected-works"></span> Selected Works

<div class="selected-works">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include selected_works_entry.liquid %}
  {% endfor %}
</div>

### Under Review

Ongoing research on agentic video LLMs, interactive video understanding, and multimodal generation.

---

## Academic Service

Reviewer: CVPR, ICCV, ECCV, NeurIPS, ICLR, TPAMI, WACV, ICASSP
