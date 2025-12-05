---
layout: about
title: About
permalink: /
subtitle: Ph.D. Candidate in Computer Science

profile:
  align: right
  image:
  image_circular: false
  more_info: >
    <p>NOVA Lab</p>
    <p>Khoury College of Computer Sciences</p>
    <p>Northeastern University</p>
    <p>Boston, MA</p>
    <p>su.yuh@northeastern.edu</p>

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

**Yuhao Su** is a Ph.D. Candidate in Computer Science at [Khoury College of Computer Sciences](https://www.khoury.northeastern.edu) at Northeastern University. He completed his first year of coursework remotely during the pandemic (2020-2021) before beginning research in Boston in 2021. His research spans **multimodal LLMs**, **video understanding**, and **data-efficient & interactive AI**. His doctoral work focuses on temporal action segmentation, object correspondence, active learning, feedback learning under the supervision of [Prof. Ehsan Elhamifar.](https://www.khoury.northeastern.edu/home/eelhami/)

During his Ph.D., he enriched his expertise in multimodal LLMs and video understanding through a research internship at [UII America](https://www.uii-ai.com), where he developed MedVidBench, a large-scale multi-task medical video understanding dataset, and MedGRPO, a multi-task reinforcement learning framework.

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

Research on interactive and training-free temporal action segmentation, with focus on multimodal reasoning and feedback-driven learning.

---
