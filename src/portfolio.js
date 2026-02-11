/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loading"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Hassan Maroof",
  title: "Hi, I'm Hassan",
  subTitle: emoji(
    "Full Stack Engineer with 3+ years of experience building scalable, cloud-native distributed services using Java and Spring Boot across e-commerce, health tech, and enterprise systems. Proven impact through system modernization delivering up to 70% performance improvements, secure REST APIs, and data-intensive backend services. Currently pursuing an M.S. in Artificial Intelligence in Germany, with growing experience in LLM-based systems, RAG pipelines, and AI-aware backend design."
  ),
  resumeLink:
    "https://drive.google.com/file/d/10V-oZskT5v7JYDAmMwHVMF_CcuNR8HBH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hassan-maroof",
  linkedin: "https://www.linkedin.com/in/mhassanmaroof",
  gmail: "hassanmaroof098@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Backend Engineer (Java, Cloud, Microservices, AI-Aware)",
  skills: [
    emoji(
      "⚡ Design and build scalable backend systems using Java and Spring Boot with clean, maintainable microservices architectures."
    ),
    emoji(
      "⚡ Develop secure, high-performance REST APIs and backend services supporting e-commerce, health tech, and enterprise platforms."
    ),
    emoji(
      "⚡ Optimize databases and backend performance using PostgreSQL, MySQL, Redis caching, and efficient data access patterns."
    ),
    emoji(
      "⚡ Containerize applications with Docker and support CI/CD pipelines for reliable cloud-native deployments."
    ),
    emoji(
      "⚡ Learn and integrate AI-aware backend systems including LLM-based APIs, RAG pipelines, and data-driven services."
    ),
  ],

  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fas fa-coffee" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Microservices", fontAwesomeClassname: "fas fa-cubes" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Redis", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-sync-alt" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-github" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "LangChain", fontAwesomeClassname: "fas fa-link" },
    { skillName: "HuggingFace", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "OpenAI SDK", fontAwesomeClassname: "fas fa-brain" },
    { skillName: "Agile / Scrum", fontAwesomeClassname: "fas fa-users" },
  ],
  display: true
};


// Education Section

// ===================== EDUCATION =====================
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Brandenburg University of Technology",
      logo: require("./assets/images/btu.png"),
      subHeader: "Master of Science in Artificial Intelligence",
      duration: "October 2023 – Present",
      descBullets: [
        "Focus on Machine Learning, Data Science, and AI system design",
        "Hands-on coursework involving Python, ML models, and data pipelines"
      ]
    },
    {
      schoolName: "DHA Suffa University",
      logo: require("./assets/images/dhasuffa.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "2016 – 2021",
      descBullets: [
        "Core focus on Data Structures, Databases, Software Engineering, and Object-Oriented Programming"
      ]
    }
  ]
};


// ===================== BLOGS =====================
const blogsInfo = {
  display: true,
  blogs: [
    {
      title: "OpenAPI: Simplifying Distributed Service Communication",
      platform: "Medium",
      date: "2024",
      url: "https://medium.com/@hassanmaroof098/openapi-simplifying-distributed-service-communication-324b72ecb138",
      descBullets: [
        "Explains OpenAPI fundamentals and real-world usage",
        "How OpenAPI improves microservices communication",
        "Practical examples for API documentation and tooling"
      ]
    },
    {
      title: "Why Real End-to-End Testing Is Crucial for Security and Functionality",
      platform: "Medium",
      date: "2024",
      url: "https://medium.com/@hassanmaroof098/why-real-end-to-end-testing-is-crucial-for-security-and-functionality-8dddcc9cd45b",
      descBullets: [
        "Why mocked tests fail to catch critical issues",
        "Security and integration risks in modern systems",
        "Best practices for real E2E testing pipelines"
      ]
    }
  ]
};


// ===================== TECH STACK =====================
const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend Engineering (Java / Spring Boot)",
      progressPercentage: "85%",
      description:
        "Designed and developed scalable backend services and REST APIs using Java, Spring Boot, Hibernate, and microservices architecture."
    },
    {
      Stack: "Databases & Caching",
      progressPercentage: "80%",
      description:
        "Worked with PostgreSQL, MySQL, Oracle DB, MongoDB, and Redis to optimize data access, performance, and reliability."
    },
    {
      Stack: "Cloud & DevOps",
      progressPercentage: "70%",
      description:
        "Containerized services using Docker and supported CI/CD pipelines for automated builds and deployments."
    },
    {
      Stack: "AI / ML (Learning)",
      progressPercentage: "55%",
      description:
        "Learning and experimenting with LLM-based systems, RAG pipelines, LangChain, HuggingFace, and OpenAI APIs."
    },
    {
      Stack: "Engineering Practices",
      progressPercentage: "85%",
      description:
        "Applied Clean Architecture, SOLID principles, Agile/Scrum workflows, and code quality best practices."
    }
  ],
  displayCodersrank: false // Set true to display codersrank stats on Skills section
};


// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Werkstudent Software Engineer",
      company: "MTG AG",
      companylogo: require("./assets/images/download.png"),
      companyUrl: "{link}",
      date: "Oct 2024 – Present",
      descBullets: [
        "Developed and maintained backend services using Java and Spring Boot, implementing secure REST APIs.",
        "Built end-to-end integration tests to improve reliability and production readiness.",
        "Worked with Oracle DB, PostgreSQL, and Hibernate Envers for data management and auditing.",
        "Containerized applications using Docker to support scalable development workflows."
      ]
    },
    {
      role: "Software Engineer",
      company: "MedznMore",
      companylogo: require("./assets/images/Medznmore-1.png"),
      companyUrl: "{link}",
      date: "Aug 2021 – Jul 2023",
      descBullets: [
        "Developed a finance and reconciliation microservice, improving system performance by 70%.",
        "Designed and implemented REST APIs for B2C mobile and web applications.",
        "Integrated Redis caching to reduce database load and improve response times by 20%.",
        "Optimized database queries using JPA, improving system performance by 40%."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Xpert Business Solution",
      companylogo: require("./assets/images/xpertbusinesssolutions.png"),
      companyUrl: "{link}",
      date: "Nov 2020 – Apr 2021",
      descBullets: [
        "Built web applications using React and integrated REST APIs.",
        "Collaborated with senior engineers to deliver maintainable frontend features."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "From backend system design to cloud-native services, these projects highlight my experience building scalable, high-impact software solutions.",
  projects: [
    {
      image: require("./assets/images/Medznmore-1.png"),
      projectName: "Sultan – Financial & Reconciliation Microservice",
      projectDesc:
        "Designed and developed a Spring Boot microservice to separate finance and reconciliation logic from a monolith. Improved processing performance by 70% using optimized data models, REST APIs, and asynchronous workflows.",
    },
    {
      image: require("./assets/images/Medznmore-1.png"),
      projectName: "E-Pharmacy Backend Platform",
      projectDesc:
        "Built backend REST APIs for a healthcare e-commerce platform using Java, Spring Boot, and MySQL. Optimized database queries and caching strategies to improve system performance by 40%.",
    },
    {
      image: require("./assets/images/Medznmore-1.png"),
      projectName: "Pricing Service",
      projectDesc:
        "Developed a centralized pricing microservice used across internal teams. Improved pricing consistency and reduced response latency through efficient API design and database access patterns.",
    },
    {
      image: require("./assets/images/computerrepair.png"),
      projectName: "AI Academic & Experimental Projects",
      projectDesc:
        "Implemented machine learning and AI experiments as part of an M.S. in Artificial Intelligence, including data preprocessing, model training, and early exploration of LLM-based APIs and RAG pipelines using Python.",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Course completion certificates",

  achievementsCards: [
    {
      title: "React.js Essential Training Certificate",
      subtitle:
        "Learned about how React.js works and DOM manipulation",
      image: require("./assets/images/essential.png"),
      imageAlt: "LinkedIn",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/6b50873155e28cb5baa4102a61b8b00a6db42985e50fe755744c6e7df094401c"
        },
      ]
    },
    {
      title: "React.js Design Patterns",
      subtitle:
        "Learned about React.js design patterns and components lifecycle",
      image: require("./assets/images/design.png"),
      imageAlt: "LinkedIn",
      footerLink: [
        {
          name: "Certification",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Building a website with Node.JS and Express.JS",
      subtitle: "Learned about how to conncet client side to a server side using Node and Express",
      image: require("./assets/images/express.png"),
      imageAlt: "LinkedIn",
      footerLink: [
        {name: "Certification", url: "https://www.linkedin.com/learning/certificates/82b42e5fd11112dd4984e063b19d8edd01f5f02d2b831f1243197bb0fc3cce50"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Contact me now to discuss my portfolio in details",
  number: "+49 176 84976078",
  email_address: "hassanmaroof098@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  blogsInfo
};
