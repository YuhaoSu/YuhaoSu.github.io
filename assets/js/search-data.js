// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-two-stage-active-learning-for-efficient-temporal-action-segmentation",
          title: 'Two-Stage Active Learning for Efficient Temporal Action Segmentation',
          description: "We developed a two-stage active learning framework for temporal action segmentation (TAS) that achieves 95% of full-supervision performance with only 0.35% of labeled frames, significantly reducing annotation costs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-regionaligner-bridging-ego-exo-views-for-object-correspondence-via-unified-text-visual-learning",
          title: 'RegionAligner: Bridging Ego-Exo Views for Object Correspondence via Unified Text-Visual Learning',
          description: "Developed a unified text-visual learning framework for ego-exo object correspondence. Leverages large VLMs to filter visual distractors and introduces region-guided supervision. Includes unsupervised extension. Improves IoU by 10.16% (ego-to-exo) and 6.04% (exo-to-ego) on Ego-Exo4D.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-medgrpo-multi-task-reinforcement-learning-for-heterogeneous-medical-video-understanding",
          title: 'MedGRPO: Multi-Task Reinforcement Learning for Heterogeneous Medical Video Understanding',
          description: "Introduced MedVidBench, a large-scale multi-task medical video understanding dataset with 531K video-instruction pairs and 8 tasks covering video, segment, and frame-level understanding. Developed MedGRPO, a multi-task RL framework with cross-dataset reward normalization for balanced training and medical LLM judge for caption evaluation. Improves over SFT baseline across tasks (e.g., +0.074 mIoU@0.3 on temporal action grounding, +0.588 LLM score on video summary).",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
