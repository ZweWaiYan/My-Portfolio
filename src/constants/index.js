import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { DiMysql, DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export const HERO_CONTENT = `I'm passionate about building visually captivating websites with user-friendly interfaces and feature-rich functionalities.`;

export const ABOUT_TEXT = `I am a dedicated and versatile developer passionate about creating efficient, user-friendly web and mobile applications. My journey began with a deep curiosity about how things work, which led me to explore various technologies through self-study and hands-on experience. Over the past year, I have gained experience working with HTML, CSS, JavaScript, React.js, Node.js, MySQL, MSSQL, and MongoDB. Additionally, I am a self-study in Java and have gained project experience in Kotlin and Flutter through comprehensive training. I thrive in collaborative environments, enjoy solving complex problems, and am always eager to learn and adapt to new challenges. Beyond coding, I stay active, explore the latest technologies, and contribute to open-source projects.`;

export const Skills_ICON = [
  { component: FaHtml5, color: "text-orange-400", animateDuration: 0.1, name: "HTML", shadow: "hover:shadow-orange-400" },
  { component: IoLogoCss3, color: "text-cyan-400", animateDuration: 6, name: "CSS", shadow: "hover:shadow-cyan-400" },
  { component: RiTailwindCssFill, color: "text-cyan-400", animateDuration: 2.5, name: "Tailwind", shadow: "hover:shadow-cyan-400" },
  { component: SiJavascript, color: "text-yellow-400", animateDuration: 2, name: "JavaScript", shadow: "hover:shadow-yellow-400" },
  { component: RiReactjsLine, color: "text-cyan-400", animateDuration: 6, name: "React", shadow: "hover:shadow-cyan-400" },
  { component: DiNodejs, color: "text-green-600", animateDuration: 4, name: "NodeJs", shadow: "hover:shadow-green-600" },
  { component: SiMongodb, color: "text-green-400", animateDuration: 5.5, name: "MongoDB", shadow: "hover:shadow-green-400" },
  { component: DiMysql, color: "text-cyan-400", animateDuration: 5.5, name: "MySQL", shadow: "hover:shadow-cyan-400" },
  { component: FaJava, color: "text-red-400", animateDuration: 3.5, name: "Java", shadow: "hover:shadow-red-400" },
  { component: IoLogoFirebase, color: "text-orange-400", animateDuration: 4.5, name: "Firebase", shadow: "hover:shadow-orange-400" },
  { component: FaFlutter, color: "text-cyan-400", animateDuration: 2, name: "Flutter", shadow: "hover:shadow-cyan-400" },
  { component: FaGithub, color: "text-white", animateDuration: 2.5, name: "Github", shadow: "hover:shadow-white" },
]

export const EXPERIENCES = [
  {
    year: "2022 to 2023",
    role: "Junior Full Stack Developer (On-Site)",
    company: "Apex Integra Co., Ltd",
    companyLink: "http://www.apexintegra.com/",
    description: [
      "• Worked in cooperated with designers to develop user-friendly web interfaces using the React framework.",
      "• Experienced in utilizing C# backend development and managing MSSQL and MySQL databases to data flow.",
      "• Cooperated with mobile developers to create efficient APIs meeting data needs in mobile development.",
      "• Work with senior developers to manage large, complex design projects for corporate clients.",
      "• Developed, maintained, and enhanced code on production projects, and maintained optimal workflow in both front-end & back-end.",
    ],
    skills: ["React.js", "C# ASP.Net Core", "MSSQL", "MYSQL", "Firebase", "Github"],
  },
  {
    year: "2020",
    role: "Android Developer (Bootcamp)",
    company: "Myanmar IT Consulting",
    companyLink: "https://www.myanmaritc.com/",
    description: [
      "• Learned practical Android projects using Kotlin & Flutter Framework and Firebase for data storage..",
      "• The final project was completed within the allotted time to write the project with the team..",
    ],
    skills: ["Java", "Kotlin", "Flutter", "Firebase"],
  },
];

export const PROJECTS = [
  {
    title: "Beautiful coffee info show",
    image: project1,
    description:
      "An interactive website designed to showcase the ingredients needed to make various types of coffee. It's perfect for coffee enthusiasts or restaurants looking to provide an engaging way to explore coffee recipes.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    url: "https://github.com/ZweWaiYan/Coffee",
    liveWeb: "https://coffee-khaki-eight.vercel.app/",
  },
  {
    title: "One time Desert Menu",
    image: project2,
    description:
      "One-time interactive dessert menu created for restaurants. Designed with simplicity and elegance, it allows users to select desserts and instantly see the total price, enhancing the dining experience.",
    skills: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/ZweWaiYan/Sweet-cafe-menu",
    liveWeb: "https://onetimemenu.vercel.app/",
  },
  {
    title: "News HomePage",
    image: project4,
    description:
      "News home page with beautiful UI and responsive design.",
    skills: ["React", "Tailwind", "TypeScript"],
    url: "https://github.com/ZweWaiYan/News_HomePage",
    liveWeb: "https://news-home-page-seven.vercel.app/",
  },  
  {
    title: "Magway Directory (On Going ... )",
    image: project3,
    description:
      "Information about famous hotels, restaurants, and pagodas of Magway Township and other by MSH Group.",
    skills: ["React", "Tailwind", "Framer motion"],
    url: "https://github.com/ZweWaiYan/magwaydirectory",
    liveWeb: "",
  },    
];

export const CONTACT = {
  address: "Yangon, Myanmar",
  email: "zyan8027@example.com",
};
