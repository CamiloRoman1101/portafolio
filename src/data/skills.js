import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiNextdotjs, SiExpress } from 'react-icons/si';
import { DiVisualstudio } from 'react-icons/di';


export const skills = [
  {
    category: 'Frontend',
    technologies: [
        {name: 'HTML', level: 'Avanzado', icon: FaHtml5},
        {name: 'CSS', level: 'Intermedio', icon: FaCss3Alt},
        {name: 'JavaScript', level: 'Intermedio', icon: FaJsSquare},
        {name: 'React', level: 'Intermedio', icon: FaReact},
        {name: 'Tailwind CSS', level: 'Intermedio', icon: SiTailwindcss},
    ]
},
{
    category: 'Herramientas',
    technologies: [
        {name: 'Git', level: 'Intermedio', icon: FaGitAlt},
        {name: 'GitHub', level: 'Intermedio', icon: FaGithub},
        {name: 'Visual Studio Code', level: 'Intermedio', icon: DiVisualstudio},
    ]
},
{
    category: 'En Aprendizaje',
    technologies: [
        {name: 'TypeScript', level: 'Básico', icon: SiTypescript},
        {name: 'Next.js', level: 'Básico', icon: SiNextdotjs},
        {name: 'Node.js', level: 'Básico', icon: FaNodeJs },
        {name: 'Express.js', level: 'Básico', icon: SiExpress},
    ]
}
];

export const aboutInfo = {
    title: 'Sobre mí',
    subtitle: "Desarrollador",
    description:
        "Ingeniero mecatrónico apasionado por el desarrollo web. Me encanta crear soluciones digitales funcionales, combinando programación, diseño y análisis de datos. Siempre en constante aprendizaje para transformar ideas en proyectos reales."
    ,
    highlights:[
        "🎯 Enfocado en desarrollo Frontend",
        "📚 Aprendizaje constante",
        "💡 Pensamiento analítico",
        "🤝 Trabajo en equipo"
    ]
};