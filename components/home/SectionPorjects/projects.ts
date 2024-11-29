export interface Project {
  id: number;
  name: string;
  description: string;
  popupDescription: string;
  image: { src: string; title: string };
  meta: Array<string>;
  technologies: Array<string>;
  sourceLink: string;
  liveLink: string;
  className: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "TeachBuySell",
    description: `TeachBuySell — A P2P digital service marketplace that enable teachers downloading high-quality teaching resources created by other Aussie educators.`,
    popupDescription: `TeachBuySell — A P2P digital service marketplace that enable teachers downloading high-quality teaching resources created by other Aussie educators.`,
    image: {
      src: "/assets/projects/teachbuysell.svg",
      title: "TeachBuySell",
    },
    meta: ["TeachBuySell", "Full Stack Developer", "2023"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Redux Thunk",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS Lambda",
      "Airtable",
      "Front-End Development",
      "Back-End Development",
    ],
    sourceLink: "https://github.com/BB-Simon",
    liveLink: "https://teachbuysell.com.au/",
    className: "md:flex-row",
  },
  {
    id: 2,
    name: "Easely Dasboard",
    description: `Easely Dashboard— A P2P eCommerce marketplace that reinvents the rental experience and where a seller can create a storefront, list its products and servises, and sell/rent them to customers.`,
    popupDescription: `Easely Dashboard — A P2P eCommerce marketplace that reinvents the rental experience and where a seller can create a storefront, list its products and servises, and sell/rent them to customers.`,
    image: {
      src: "/assets/projects/easely-dashboard.svg",
      title: "Easely Dasboard",
    },
    meta: ["Easely Dasboard", "Full Stack Developer", "2023"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Redux Thunk",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Front-End Development",
      "Back-End Development",
    ],
    sourceLink: "https://github.com/BB-Simon",
    liveLink: "https://dashboard.easely.it/",
    className: "md:flex-row-reverse",
  },
  {
    id: 3,
    name: "Easely",
    description: `Easely — A P2P eCommerce marketplace that reinvents the rental experience and where a seller can create a storefront, list its products and servises, and sell/rent them to customers.`,
    popupDescription: `Easely — A P2P eCommerce marketplace that reinvents the rental experience and where a seller can create a storefront, list its products and servises, and sell/rent them to customers.`,
    image: { src: "/assets/projects/easely.svg", title: "Easely" },
    meta: ["Easely", "Front End Developer", "2022"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Redux Thunk",
      "NodeJS",
      "ExpressJS",
      "Front-End Development",
    ],
    sourceLink: "https://github.com/BB-Simon",
    liveLink: "https://www.easely.it/",
    className: "md:flex-row",
  },
  {
    id: 4,
    name: "Sommly",
    description: `Sommly - a multi-vendor marketplace - is a platform where a winery can create a storefront, list its products, and sell them to customers.`,
    popupDescription: `Sommly - a multi-vendor marketplace - is a platform where a winery can create a storefront, list its products, and sell them to customers.`,
    image: { src: "/assets/projects/sommly.svg", title: "Sommly TM" },
    meta: ["Sommly TM", "Full Stack Dev", "2021"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Redux Thunk",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    sourceLink: "https://github.com/BB-Simon",
    liveLink: "https://sommly.com/",
    className: "md:flex-row-reverse",
  },
  {
    id: 5,
    name: "Noii - Microinitiatives",
    description:
      "Noii - is a micro-entrepreneurship community platform where entrepreneurs design, implement and share their initiatives.",
    popupDescription:
      "Noii - is a micro-entrepreneurship community platform where entrepreneurs design, implement and share their initiatives. Each entrepreneur has his/her own dashboard wher he/she can draw, draft and publish his/her initiatives and interact with who like it or make it favorited or clone it or implemented it.",
    image: {
      src: "/assets/projects/noii.svg",
      title: "Noii - Microinitiatives",
    },
    meta: ["Noii - Microinitiatives", "Full Stack Dev", "2020"],
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Redux Thunk",
      "MUI",
      "Styled-Component",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "API",
      "RESTFul API",
      "Front-End Development",
      "Back-End Development",
    ],
    sourceLink: "https://github.com/BB-Simon/microinitiatives",
    liveLink: "https://modest-kirch-3798e4.netlify.app/",
    className: "md:flex-row",
  },
  {
    id: 6,
    name: "Expense Tracker",
    description:
      "Expense Tracker is a web app that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this very easy-to-use and user-friendly tool.",
    popupDescription:
      "Expense Tracker is a web app that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this very easy-to-use and user-friendly tool.",
    image: { src: "/assets/projects/budget.svg", title: "Expense Tracker" },
    meta: ["Microverse", "Back End Dev", "2023"],
    technologies: [
      "HTML",
      "CSS",
      "Ruby",
      "Ruby on Rails",
      "Devise",
      "RSpec",
      "Tailwind CSS",
      "PostgreSQL",
    ],
    sourceLink: "https://github.com/BB-Simon/budget-app",
    liveLink: "https://budget-app-01.onrender.com/",
    className: "md:flex-row-reverse",
  },
  {
    id: 7,
    name: "Bookstore CMS",
    description: `Book Store is a book management application where we can read all information about a book and add a new book to the library and modify any book information and remove any book from the book library.`,
    popupDescription: `Book Store is a book management application where we can read all information about a book and add a new book to the library and modify any book information and remove any book from the book library.`,
    image: { src: "/assets/projects/bookstore.svg", title: "Bookstore CMS" },
    meta: ["Microverse", "React Redux Dev", "2023"],
    technologies: [
      "JavaScript",
      "React",
      "React-Redux",
      "Redux-Toolkit",
      "CSS Modules",
    ],
    sourceLink: "https://github.com/BB-Simon/book-store",
    liveLink: "https://book-store-9jwh.onrender.com/",
    className: "md:flex-row",
  },
  {
    id: 8,
    name: "IPS Programming Summit 2023",
    description:
      "IPS programming summit 2023 is an AI-driven IPS international programming Summit that is the premiere global programming gathering conducted by and for the world’s programmers.",
    popupDescription:
      "IPS programming summit 2023 is an AI-driven IPS international programming Summit that is the premiere global programming gathering conducted by and for the world’s programmers.",
    image: {
      src: "/assets/projects/ips.svg",
      title: "IPS Programming Summit 2023",
    },
    meta: ["Microverse", "Front End Dev", "2023"],
    technologies: [
      "HTML",
      "CSS",
      "javascript",
      "JS DOM",
      "ES6",
      "Front End Development",
    ],
    sourceLink: "https://github.com/BB-Simon/programming-summit",
    liveLink: "https://bb-simon.github.io/programming-summit/",
    className: "md:flex-row-reverse",
  },
];

export default projects;
