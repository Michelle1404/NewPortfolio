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
  shopify,
  dci,
  carrent,
  jobit,
  tripguide,
  threejs,
  express,
  sass,
  bootstrap,
  firebase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Über mich",
  },
  {
    id: "work",
    title: "Projekte",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const services = [
  {
    title: "M",
    icon: mongodb,
  },
  {
    title: "E",
    icon: mobile,
  },
  {
    title: "R",
    icon: reactjs,
  },
  {
    title: "N",
    icon: nodejs,
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Express.JS",
    icon: express,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: `Weiterbildung: Web- und Softwareentwickler/in`,
    company_name: "DCI Digital Career Institute GmbH",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "JUNI 2022 — AUGUST 2023",
    points: [
      "1-jährige Vollzeit Weiterbildung im Bereich Full-Stack Webentwicklung (MERN Stack)",
      "Durchführung mehrerer Projekte",
      "Abschließenden praktischen Projekts zur Festigung der Programmierkenntnisse",
      "Teilnahme am Englischunterricht im Rahmen des Kurses",
    ],
  },
  {
    title: "Orientierungskurs: Web-Development und Online Marketing",
    company_name: "DCI Digital Career Institute GmbH",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "APRIL 2022 — MAI 2022",
    points: [
      "Webentwicklung, erste Schritte im HTML und CSS",
      "Online Marketing",
      "Cloud Computing und Amazon Web Services",
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
