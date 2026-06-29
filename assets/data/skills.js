import { FaHtml5, FaReact, FaJava, FaGithub, FaGitAlt, FaDatabase } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { SiDocker, SiExpress } from "react-icons/si";

export const skills = [
    { name: "HTML5", color: "#f16529", Icon: FaHtml5 },
    { name: "tailwindcss", color: "#2596be", Icon: RiTailwindCssFill },
    { name: "TypeScript", color: "#3178c6", Icon: BiLogoTypescript },
    { name: "JavaScript", color: "#f7df1e", Icon: IoLogoJavascript },
    { name: "React", color: "#149eca", Icon: FaReact },
    { name: "Git", color: "#F05032", Icon: FaGitAlt },
    { name: "GitHub", color: "#8b949e", Icon: FaGithub },
];

export const futureSkills = [
    { name: "Docker", color: "#58c4dc", Icon: SiDocker },
    { name: "Express", color: "#6cb52d", Icon: SiExpress },
    { name: "Databases", color: "#c74634", Icon: FaDatabase },
];