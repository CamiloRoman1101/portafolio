import { personalInfo } from "../../data/personal";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
         <div  className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Hola, soy <span className="text-cyan-400">{personalInfo.name}</span></h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
            {personalInfo.title}
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-lg ml-14 md:ml-0">{personalInfo.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 pl-40">
            <Button href="#proyectos" variant="primary">
              Ver Proyectos
            </Button>

            <Button href="#contacto" variant="outline">
              Contactar
            </Button>
          </div>
         </div>
         <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
          
         </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;