import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  dci,
  firstPortfolio,
  induPro,
  wip,
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
    title: `Weiterbildung:`,
    name: "Web-und Softwareentwicklerin",
    company_name: "DCI Digital Career Institute GmbH",
    icon: dci,
    iconBg: "#E6DEDD",
    date: "JUNI 2022 — AUGUST 2023",
    points: [
      "1-jährige Vollzeit Weiterbildung im Bereich Full-Stack Webentwicklung (MERN Stack)",
      "Durchführung mehrerer Projekte",
      "Abschließenden praktischen Projekt zur Festigung der Programmierkenntnisse",
      "Teilnahme am Englischunterricht im Rahmen des Kurses",
    ],
  },
  {
    title: "Orientierungskurs:",
    name: "Web-Development und Online Marketing",
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

const getColorForTagName = (tagName) => {
  switch (tagName) {
    case "html":
      return "text-[#FF6D00]";
    case "css":
      return "text-[#0277BD]";
    case "Javascript":
      return "text-[#0D0808]";
    case "react":
      return "text-[#53C1DE]";
    case "tailwind":
      return "text-[#00A4C1]";
    case "nodeJs":
      return "text-[#21A366]";
    case "mongodb":
      return "text-[#4CAF50]";
    case "git":
      return "text-[#0D0808]";
    case "scss":
      return "text-[#0277BD]";
    case "wordpress":
      return "text-[#1B769C]";
    case "expressJs":
      return "text-[#828282]";
    case "Bootstrap":
      return "text-[#7A11F7]";
    case "firebase":
      return "text-[#FFC400]";
    default:
      return "text-gray-500";
  }
};

const projects = [
  {
    name: "Altes Portfolio",
    details: "War das erste Abschluss Projekt nach 3 Monaten für UI",
    tags: [
      {
        name: "HTML",
        color: getColorForTagName("html"),
      },
      {
        name: "CSS",
        color: getColorForTagName("css"),
      },
    ],
    image: firstPortfolio,
    source_code_link:
      "https://portfolio-michelle-2ib2m842o-michelle1404.vercel.app/",
    website: true,
  },
  {
    name: "Indu-Pro",
    details: "Ist eine Beratungs/-Dienstleistungs Firma für Photovoltaik",
    tags: [
      {
        name: "Wordpress",
        color: getColorForTagName("wordpress"),
      },
    ],
    image: induPro,
    source_code_link: "https://indu-pro.de/",
    website: true,
  },
  {
    name: "Work in Progress",
    details: "Lorem ipsum dolor sit am",
    tags: [
      {
        name: "React JS",
        color: getColorForTagName("react"),
      },
      {
        name: "Tailwind",
        color: getColorForTagName("tailwind"),
      },
      {
        name: "MongoDB",
        color: getColorForTagName("mongodb"),
      },
      {
        name: "Express.JS",
        color: getColorForTagName("expressJs"),
      },
    ],
    image: wip,
    source_code_link: "https://github.com/Michelle1404",
    website: false,
  },
];

export { technologies, experiences, projects };
