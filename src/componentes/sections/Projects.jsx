import { projects } from "../../data/projects.js";
import ProjectCard from "../ui/ProjectCard.jsx";

const Projects = () => {
  return (
    <section id="proyectos" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Mis Proyectos
            </h2>
            <p className="text-xl text-cyan-400 font-medium mb-2">
              Algunos de mis trabajos recientes
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>


          <div className="text-center mt-16">
            <p className="text-gray-300 text-lg mb-6">
              ¿Interesado en ver más de mi trabajo?
            </p>
            <a
              href="https://github.com/CamiloRoman1101" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Ver más en GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;