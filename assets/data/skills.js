import { FaHtml5, FaReact, FaJava, FaGithub, FaGitAlt, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDocker, SiExpress } from "react-icons/si";

export const skills = [
    { name: "HTML5", color: "#E34F26", Icon: FaHtml5 },
    { name: "Tailwind CSS", color: "#06B6D4", Icon: RiTailwindCssFill },
    { name: "TypeScript", color: "#3178C6", Icon: BiLogoTypescript },
    { name: "JavaScript", color: "#F7DF1E", Icon: IoLogoJavascript },
    { name: "React", color: "#61DAFB", Icon: FaReact },
    { name: "Git", color: "#F05032", Icon: FaGitAlt },
    { name: "GitHub", color: "#c5c6c9", Icon: FaGithub },
];

export const futureSkills = [
    { name: "Docker", color: "#2496ED", Icon: SiDocker },
    { name: "Express", color: "#c5c6c9", Icon: SiExpress },
    { name: "Databases", color: "#47A248", Icon: FaDatabase }, // MongoDB-inspired
];