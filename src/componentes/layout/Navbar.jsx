import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <nav className='fixed p-4 top-0 left-0 right-0 z-50 flex items-center justify-between text-white bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50'>
      {/* Logo */}
      <div 
        className='text-xl md:text-2xl font-bold cursor-pointer hover:text-cyan-400 transition-colors duration-200'
        onClick={() => scrollToSection('inicio')}
      >
        CR
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2'>
        <a 
          href="#inicio" 
          className='text-lg hover:text-cyan-400 cursor-pointer transition-colors duration-200 relative group'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('inicio');
          }}
        >
          Inicio
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full'></span>
        </a>
        <a 
          href="#sobre-mi" 
          className='text-lg hover:text-cyan-400 cursor-pointer transition-colors duration-200 relative group'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('sobre-mi');
          }}
        >
          Sobre Mí
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full'></span>
        </a>
        <a 
          href="#proyectos" 
          className='text-lg hover:text-cyan-400 cursor-pointer transition-colors duration-200 relative group'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('proyectos');
          }}
        >
          Proyectos
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full'></span>
        </a>
        <a 
          href="#contacto" 
          className='text-lg hover:text-cyan-400 cursor-pointer transition-colors duration-200 relative group'
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contacto');
          }}
        >
          Contacto
          <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-200 group-hover:w-full'></span>
        </a>
      </div>

      {/* CTA Button Desktop */}
      <a 
        href="#contacto" 
        className='hidden md:block px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-200 font-medium'
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('contacto');
        }}
      >
        Hablemos
      </a>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden flex flex-col gap-1 p-2'
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className='flex flex-col p-4'>
          <a 
            href="#inicio" 
            className='py-3 text-lg hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800/30'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
          >
            Inicio
          </a>
          <a 
            href="#sobre-mi" 
            className='py-3 text-lg hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800/30'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('sobre-mi');
            }}
          >
            Sobre Mí
          </a>
          <a 
            href="#proyectos" 
            className='py-3 text-lg hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800/30'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('proyectos');
            }}
          >
            Proyectos
          </a>
          <a 
            href="#contacto" 
            className='py-3 text-lg hover:text-cyan-400 transition-colors duration-200 border-b border-gray-800/30'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacto');
            }}
          >
            Contacto
          </a>
          <a 
            href="#contacto" 
            className='mt-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg transition-colors duration-200 font-medium text-center'
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contacto');
            }}
          >
            Hablemos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;