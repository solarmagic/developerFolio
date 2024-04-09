/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  username: "Beomgyu Kim",
  title: "Hi all, I'm Beomgyu Kim",
  subTitle: emoji(
    "AI and algorithm enthusiast. In the Hanyang Univserity Visual Intelligence Lab (HYUVILAB), I mainly conducted research on the super-resolution, implcit neural representation, and latest deep learning architectures such as diffusion model."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1S68zu40vv_aPXS9_sz-odKHYkPfszCU8/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/solarmagic",
  linkedin: "https://www.linkedin.com/in/solarmagic/",
  gmail: "solmagix@gmail.com",
  // BOJ: "https://www.acmicpc.net/user/solarmagic",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ I have experience solving algorithm problems or carrying out projects in various languages such as C/C++/Python/Java."
    ),
    emoji(
      "⚡ I created a model with PyTorch/Tensorflow and conducted training and testing."
    ),
    emoji(
      "⚡ I document through Markdown and LaTeX, and collaborate with my team through git, slack, trello, etc."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Markdown",
      fontAwesomeClassname: "fab fa-markdown"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "Computer Vision",
      fontAwesomeClassname: "fas fa-eye"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "CloudFlare",
      fontAwesomeClassname: "fab fa-cloudflare"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Hanyang University",
      logo: require("./assets/images/HYU_logo_singlecolor_png.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "March 2022 - August 2024",
      desc: "Visual Intelligence Lab, Major GPA 4.24",
      descBullets: [
        "Scale-Arbitrary Super-Resolution with Latent Diffusion Model",
        "Position Classification on the Endotracheal Tube with Automatic Segmentation of the Trachea and the Tube on Plain Chest Radiography Using Deep Convolutional Neural Network"
      ]
    },
    {
      schoolName: "Hanyang University",
      logo: require("./assets/images/HYU_logo_singlecolor_png.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "March 2017 - February 2022",
      desc: "Cum Laude, Major GPA 4.01"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Algorithm", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning (Computer Vision, Architecture)",
      progressPercentage: "80%"
    },
    {
      Stack: "Computer Security (Webhacking, Cryptography, Pwanble)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Student",
      company: "Queen's University Belfast ECIT",
      companylogo: require("./assets/images/qub_logo.png"),
      date: "Sep 2019 – Dec 2019",
      descBullets: [
        "Machine learning based web application firewall.",
        "Intentionally creating a vulnerable web and collecting malicious packets.",
        "ML-based WAF production and demonstration using RandomForest, N-gram, etc."
      ]
    },
    {
      role: "Mentee (ML Engineer)",
      company: "SW Maestro",
      companylogo: require("./assets/images/swm_logo.jpeg"),
      date: "Apr 2020 – Dec 2020",
      descBullets: [
        "Artificial intelligence assist training “Maesil”(daily indoor exercise).",
        "Research and cooperation on 3d pose estimation, real-time 2d pose estimation, pose match, etc.",
        "Learn domain management, documentation, and collaboration."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Extracurricular Activities",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/BOJ.png"),
      projectName: "Baekjoon Online Judge",
      projectDesc:
        "Solved 2400+ Problems in BOJ, Tested 7 Problems for UNIST’s programming competition",
      footerLink: [
        {
          name: "BOJ",
          url: "https://boj.kr/u/solarmagic"
        },
        {
          name: "SOLVED.AC",
          url: "http://solved.ac/solarmagic"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/5226665.png"),
      projectName: "ICEWALL",
      projectDesc:
        "School Hacking Defense club, 1st Place in 2018 internal CTF, 3rd Place in 2019 internal CTF, Created 1 Problem for 2018 HCTF, Penetration test on campus homepage"
    },
    {
      image: require("./assets/images/hyualoha.jpg"),
      projectName: "ALOHA",
      projectDesc:
        "Study algorithms at the school algorithm club, 3rd place in internal competition 2017, 10th place in Korea Univ., Sookmyung Women’s Univ. Hanyang Univ. integrated club competition"
    },
    {
      image: require("./assets/images/hai.png"),
      projectName: "HAI",
      projectDesc:
        "Founding member of the first AI club on campus, Basic AI studty with other members, Reading and presenting trend AI papers"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Competitions and Awards🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "School Competition",
      subtitle:
        "Won awards in school algorithm competition and security competition",
      image: require("./assets/images/HYU_logo_singlecolor_png.png"),
      imageAlt: "Hanyang University",
      footerLink: [
        {
          name: "2017 HCPC Beginner Division 1st Place"
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "2020 HCTF Advanced Division 2nd Place"
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        }
        // {
        //   name: "Google Code-in Blog",
        //   // url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "ICPC",
      subtitle:
        "Starting to participate in the competition in 2017. In the 2021 preliminary, we achieved good results and achieved two first-solves.",
      image: require("./assets/images/ICPCLogo-Regionals-2017-standard_hi.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "2021 ICPC Seoul Regional Preliminary 8th",
          url: "https://static.icpckorea.net/2021/scoreboard_preliminary/"
        },
        {
          name: "2021 ICPC Seoul Regional 22nd",
          url: "http://static.icpckorea.net/2021/scoreboard_regional/"
        }
      ]
    },

    {
      title: "UCPC",
      subtitle:
        "Passed the preliminary competition for four consecutive years and advanced to the finals of Union of Clubs for Programming Contests",
      image: require("./assets/images/UCPC.png"),
      imageAlt: "UCPC Logo",
      footerLink: [
        {
          name: "2018 UCPC 27th",
          url: "https://www.acmicpc.net/contest/spotboard/314"
        },
        {
          name: "2019 UCPC 27th",
          url: "https://www.acmicpc.net/contest/spotboard/450"
        },
        {
          name: "2020 UCPC 23rd",
          url: "https://www.acmicpc.net/contest/spotboard/524"
        },
        {
          name: "2021 UCPC 35th",
          url: "https://www.acmicpc.net/contest/spotboard/670"
        }
      ]
    },
    {
      title: "Company-hosted competition",
      subtitle:
        "I achieved good results in competitions hosted by Samsung, Hyundai Mobis, and Brandi.",
      image: require("./assets/images/group-business-people-having-meeting_53876-14814.avif"),
      imageAlt: "enterprise",
      footerLink: [
        {
          name: "2020 Brandi Codename B 7~16th place",
          url: ""
        },
        {
          name: "2020 SCPC Finalist"
        },
        {
          name: "Hyundai mobis algorithm contest 17th Place",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  // subtitle:
  // "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://hackmd.io/@solarmagic/SyMqs4xZP",
      title: "Calculate the similarity of movements between two people",
      description:
        "An article written after thinking about movement matching during SW Maestro"
    },
    {
      url: "https://hackmd.io/@solarmagic/ByrZuCOFw",
      title: "Maesil 3D model (SW Maestro)",
      description:
        "An article written after thinking about the model during SW Maestro"
    },
    {
      url: "https://hackmd.io/@solarmagic/scpc2020r1",
      title: "Review and solution code for SCPC 2020 Round 1",
      description: "Review and solution code for SCPC 2020 Round 1"
    },
    {
      url: "https://hackmd.io/@solarmagic/SJ2bpnCDF",
      title: "2021 Algorithm Team Competition Review",
      description:
        "Review of practice and competition results with team members in 2021"
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+82-10-7520-4034",
  email_address: "solmagix@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
