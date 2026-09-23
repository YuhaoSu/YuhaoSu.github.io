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
  },{id: "news-regionaligner-accepted-to-wacv-2026",
          title: 'RegionAligner accepted to WACV 2026.',
          description: "",
          section: "News",},{id: "news-medgrpo-accepted-to-cvpr-2026",
          title: 'MedGRPO accepted to CVPR 2026.',
          description: "",
          section: "News",},{id: "news-passed-thesis-proposal",
          title: 'Passed thesis proposal.',
          description: "",
          section: "News",},{id: "news-started-research-internship-at-samsung-research-america-mountain-view",
          title: 'Started research internship at Samsung Research America, Mountain View.',
          description: "",
          section: "News",},{id: "news-medvidbench-serves-as-the-benchmark-for-the-medvidu-challenge-at-eccv-2026",
          title: 'MedVidBench serves as the benchmark for the MedVidU Challenge at ECCV 2026.',
          description: "",
          section: "News",},{id: "projects-two-stage-active-learning-for-efficient-temporal-action-segmentation",
          title: 'Two-Stage Active Learning for Efficient Temporal Action Segmentation',
          description: "Cuts annotation cost for temporal action segmentation by first choosing the most diverse videos, then the frames that best summarize each one. Reaches 95% of fully supervised performance with only 0.35% of frames labeled.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/al-tas/";
            },},{id: "projects-medgrpo-multi-task-reinforcement-learning-for-heterogeneous-medical-video-understanding",
          title: 'MedGRPO: Multi-Task Reinforcement Learning for Heterogeneous Medical Video Understanding',
          description: "A 531K-pair medical video benchmark (MedVidBench) covering 8 tasks, plus a multi-task RL post-training framework whose cross-dataset reward normalization keeps training stable when heterogeneous tasks are mixed. MedVidBench is the benchmark of the ECCV 2026 MedVidU Challenge.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/medgrpo/";
            },},{id: "projects-regionaligner-bridging-ego-exo-views-for-object-correspondence-via-unified-text-visual-learning",
          title: 'RegionAligner: Bridging Ego-Exo Views for Object Correspondence via Unified Text-Visual Learning',
          description: "Matches the same object between first-person and third-person views: a VLM names the task-relevant objects to narrow the search region, and multi-level supervision aligns regions across views. Works in both supervised and unsupervised settings on Ego-Exo4D.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/region-aligner/";
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
