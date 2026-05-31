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
  enabled: false
  scrollable: false
  limit:

latest_posts:
  enabled: false          # ✅ turn this ON
  scrollable: false      # blog list without scroll box
  limit: 3               # number of posts to show
---

**Yuhao Su** is a Ph.D. Candidate in Computer Science at [Khoury College of Computer Sciences](https://www.khoury.northeastern.edu/) at Northeastern University, advised by [Prof. Ehsan Elhamifar](https://www.khoury.northeastern.edu/home/eelhami/). His research focuses on multimodal LLMs, video understanding, and generative models, with emphasis on efficiency and real-world applications.

He is currently a Research Intern at [Samsung Research America](https://sra.samsung.com/), working on efficient video LLMs. Previously, he interned at [UII America](https://www.uii-ai.com/), where he developed MedVidBench, a large-scale medical video understanding dataset, and MedGRPO, a multi-task RL framework for video LLM training.

Before Northeastern, he earned his B.A. in Mathematics and Computer Science from [the University of Minnesota](https://www.umn.edu).

---

## <span id="selected-works"></span> Selected Works

<div class="selected-works">
  {% assign sorted_projects = site.projects | sort: "importance" %}
  {% for project in sorted_projects %}
    {% include selected_works_entry.liquid %}
  {% endfor %}
</div>

### Under Review

Ongoing research on interactive video understanding and multimodal generation.

---
