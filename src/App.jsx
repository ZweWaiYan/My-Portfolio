import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className='fixed top-0 -z-10 h-full w-full'>
        {/* That is background from https://bg.ibelick.com/ */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className='container mx-auto max-w-screen-xl px-8'>
        <Navbar />        
        <Home />        
        <AboutMe className="py-16" />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App;