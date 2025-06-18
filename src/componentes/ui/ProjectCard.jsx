import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group hover:scale-105">
      {/* Imagen del proyecto */}
      <div className="relative h-48 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-center">
            <span className="text-4xl mb-2 block">💻</span>
            <p className="text-cyan-400 font-medium text-sm">{project.category}</p>
          </div>
        )}
        
        {/* Overlay con botones */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-400 text-gray-900 p-3 rounded-full hover:bg-cyan-300 transition-colors"
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white p-3 rounded-full hover:bg-gray-600 transition-colors"
            >
              <FaGithub />
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 text-sm rounded-full border border-cyan-400/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;