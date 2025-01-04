import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  // meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // fiver
  // threejs,
} from "../assets";
import fiver from '../assets/company/fiver.png'

export const navLinks = [
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "EBIZZ FZ LLC",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - Nov 2024",
    points: [
      "Developed and maintained complex React.js applications, implementing new features and integrating numerous APIs to meet evolving client requirements.",
      "Collaborated with backend teams working in Firebase to ensure seamless API integration and feature implementation.",
      "Built full-fledged authentication systems, including password reset, email transporters, and secure file uploads using Sharp and Multer.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Independent Team",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - June 2024",
    points: [
      "Designed and implemented interactive, responsive user interfaces using React.js to meet client requirements.",
      "Worked in a three-person team to develop a fully functional web application, focusing on scalable frontend solutions.",
      "Implemented Firebase for authentication, real-time database, and cloud storage, ensuring secure and efficient data handling.", 
      "Built and consumed RESTful APIs, ensuring seamless data flow between frontend and backend..",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Fiver",
    icon: fiver,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Dec 2024",
    points: [
      "Specializing in React, Firebase, and modern frameworks to deliver high-quality websites tailored to your needs.",
      "Crafting engaging and user-friendly web interfaces that drive results and elevate user experience.",
      "Offering expertise in modern tools like React.js, Firebase, and Tailwind CSS to bring your vision to life.",
      "Delivering pixel-perfect designs, interactive features, and seamless functionality to meet your business goals.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
