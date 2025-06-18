import { aboutInfo, skills } from "../../data/skills.js";
import SkillCard from "../ui/SkillCard.jsx";

const About = () => {
  return (
    <section id="sobre-mi" className="py-10 bg-gray-900 relative">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {aboutInfo.title}
            </h2>
            <p className="text-xl text-cyan-400 font-medium">
              {aboutInfo.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {aboutInfo.description}
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  ¿Qué me caracteriza?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {aboutInfo.highlights.map((highlights, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className=" text-cyan-400 text-lg">
                        {highlights.split(" ")[0]}
                      </span>
                      <span>
                        {highlights.substring(highlights.indexOf(" ") + 1)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Placeholder para imagen o elemento visual */}
                <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/20">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">🚀</span>
                    <p className="text-cyan-400 font-medium">En constante</p>
                    <p className="text-white font-bold text-xl">APRENDIZAJE</p>
                  </div>
                </div>

                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
              Tecnologías y Herramientas
            </h3>
            <div className="space-y-12">
              {skills.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h4 className="text-xl font-semibold text-cyan-400 mb-6 text-center lg:text-left">{category.category}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {category.technologies.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex} skill={skill} />
                  ))}
                  </div>
                </div>
              ))}
            </div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default About;
