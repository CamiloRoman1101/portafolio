import './App.css'
import Navbar from './componentes/layout/Navbar'
import About from './componentes/sections/About'
import Contact from './componentes/sections/Contact'
import Hero from './componentes/sections/Hero'
import Projects from './componentes/sections/Projects'
import ProjectCard from './componentes/ui/ProjectCard'


function App() {
  
  return (
    <>
      <div >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />

      </div>
      
    </>
  )
}

export default App
