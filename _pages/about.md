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

**Yuhao Su** is a Ph.D. Candidate in Computer Science at [Khoury College of Computer Sciences](https://www.khoury.northeastern.edu) at Northeastern University. His research spans **multimodal learning**, **video understanding**, as well as **learning & optimization**. His research builds practical AI task assistants that understand long-form video at lower annotation and compute cost, advised by [Prof. Ehsan Elhamifar](https://www.khoury.northeastern.edu/home/eelhami/).

During his Ph.D., he enriched his expertise in multimodal LLMs and video understanding through a research internship at [UII America](https://usa.united-imaging.com), where he developed MedVidBench, a large-scale multi-task medical video understanding dataset, and MedGRPO, a multi-task reinforcement learning framework.

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
