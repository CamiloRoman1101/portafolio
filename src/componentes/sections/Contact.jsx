import { contactInfo } from "../../data/contact.js";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              {contactInfo.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Información de Contacto
                </h3>
               
                <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-semibold">{contactInfo.status}</span>
                  </div>
                </div>

    
                <div className="space-y-4">
                  <a 
                    href={contactInfo.social.email}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <FaEnvelope className="text-cyan-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white font-medium">{contactInfo.email}</p>
                    </div>
                  </a>

                  <a 
                    href={contactInfo.social.phone}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                      <FaPhone className="text-cyan-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Teléfono</p>
                      <p className="text-white font-medium">{contactInfo.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-cyan-400 text-xl" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Ubicación</p>
                      <p className="text-white font-medium">{contactInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Sígueme en
                </h3>
                <div className="flex gap-4">
                  <a
                    href={contactInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-8 border border-gray-600">
              <h3 className="text-2xl font-bold text-white mb-6">
                Habilidades
              </h3>
              
              <div className="space-y-4 mb-8">
                {contactInfo.interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-gray-300">{interest}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                {contactInfo.message}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={contactInfo.social.email}
                  className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 px-6 py-3 rounded-lg font-semibold text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Enviar Email
                </a>
                <a
                  href={contactInfo.social.phone}
                  className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
                >
                  Llamar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;