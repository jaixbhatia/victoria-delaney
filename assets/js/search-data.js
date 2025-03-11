// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-published-research",
          title: "published research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-work-with-me",
          title: "work with me",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/work-with-me/";
          },
        },{id: "nav-lab",
          title: "lab",
          description: "members of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab/";
          },
        },{id: "nav-resources",
          title: "resources",
          description: "Resources for graduate students and early career researchers",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resources/";
          },
        },{id: "news-a-simple-inline-announcement",
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
          section: "News",},{id: "projects-ai-and-creative-production",
          title: 'AI and Creative Production',
          description: "I share this work with postdoctoral scholar ‘Joba Adisa. We are interviewing students as they participate in a task protocol we designed to elicit creative thinking with GenAI. We are curious to explore (1) how students generate new ideas when GenAI is present, and (2) how students solve open-ended problems with creative solutions when GenAI is present.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AI_and_creative_production/";
            },},{id: "projects-ai-and-productive-struggle-in-mathematics",
          title: 'AI and Productive Struggle in Mathematics',
          description: "In partnership with three graduate students, we are interviewing mathematics students and asking them to “think aloud” as they solve pre-calculus, statistics, and calculus free response tasks when AI is available.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AI_and_productive_struggle_in_mathematics/";
            },},{id: "projects-math-of-facial-recognition",
          title: 'Math of Facial Recognition',
          description: "This work was the basis of my dissertation thesis. I co-designed a 5-lesson machine learning unit, “The Math of FaceID,” with high school teacher David Dobervich, for integration into high school statistics courses. I studied the classroom enactments of FaceID with three other teachers and the nature/substance of their curricular adaptations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Math_Of_Facial_Recognition/";
            },},{id: "projects-pre-service-teachers-conceptions-of-statistics",
          title: 'Pre-Service Teachers’ Conceptions of Statistics',
          description: "I designed a teaching unit with doctoral student Ryan Aniceto about conceptual understanding of high school statistics. We aim to understand how pre-service teachers develop conceptual understanding of statistics and what challenges they encounter when learning to teach about it.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Pre-Service_Teachers'_Conceptions_of_Statistics-copy/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
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
