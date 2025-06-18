import { FaGithub } from "react-icons/fa";
import { personalInfo } from "../../data/personal";
import Button from "../ui/Button";
import yo1 from "../../assets/yo.jpg";
import yo2 from "../../assets/yo2.jpg";
import yo3 from "../../assets/yo3.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gray-900 py-24 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-slide-in-left">
              Hola, soy{" "}
              <span className="text-cyan-400 animate-pulse">
                {personalInfo.name}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6 animate-slide-in-left animation-delay-200">
              {personalInfo.title}
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-lg md:ml-0 animate-slide-in-left animation-delay-400">
              {personalInfo.description}
            </p>

            <div className="flex justify-center lg:justify-start gap-4 animate-slide-in-left animation-delay-800 pb-10 ">
              <a
                href={personalInfo.github}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl"
              >
                <FaGithub />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-in-left animation-delay-600 md:pl-0">
              <Button href="#proyectos" variant="primary">
                Ver Proyectos
              </Button>

              <Button href="#contacto" variant="outline">
                Contactar
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end animate-slide-in-right animation-delay-300 md:pr-15 ">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full flex items-center justify-center animate-float relative overflow-hidden">
              {/* <span className="text-4xl z-10 relative">👨‍💻</span> */}
              <img src={yo3} alt="Foto de perfil" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
