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
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/al-tas/";
            },},{id: "projects-medgrpo-multi-task-reinforcement-learning-for-heterogeneous-medical-video-understanding",
          title: 'MedGRPO: Multi-Task Reinforcement Learning for Heterogeneous Medical Video Understanding',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/medgrpo/";
            },},{id: "projects-regionaligner-bridging-ego-exo-views-for-object-correspondence-via-unified-text-visual-learning",
          title: 'RegionAligner: Bridging Ego-Exo Views for Object Correspondence via Unified Text-Visual Learning',
          description: "",
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
