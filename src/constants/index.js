import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    starbucks,
    tesla,
    carrent,
    jobit,
    threejs,
  } from "../assets";
  
const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "MERN Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "PeacefulQode",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Feb 2021 - Aug 2021",
      points: [
        "Designed websites, portals and large-scale web applications for multiple clients.",
        "Validated code for proper structuring, security and compatibility with different browsers, devices or operating systems.",
        "Participated in code review meetings, providing input on bugs, inefficiencies and potential solutions to emergent issues.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "OliveConcepts",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Sept 2021 - July 2023",
      points: [
        "Developed a scalable and high-performance React application that reduced page load time by 40% and improved overall user experience",
        "Implemented a reusable component library in React, resulting in a significant increase in development efficiency and consistency across multiple projects",
        "Implemented state management solutions like Redux to handle complex application data flow and ensure consistent UI updates.",
        "Successfully developed and launched 15+ WordPress websites, delivering customized solutions that met client requirements and exceeded expectations.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Swiggy - Clone",
      description:
        "The Swiggy clone is a web application developed using React.js that replicates the functionality of the popular food delivery platform Swiggy. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Henish11/Swiggy-Clone",
      live_link: "https://swiggy-clone-henish.vercel.app/",
    },
    {
      name: "3D - Portfolio",
      description:
        "This is an immersive 3D portfolio website created with ReactJS, ThreeJS, and Framer Motion, featuring captivating 3D effects and seamless navigation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threeJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Henish11/3D-Portfolio",
      live_link: "https://henish-3d-portfolio.vercel.app/",
    },

  ];
  
  export { services, technologies, experiences, projects, navLinks };