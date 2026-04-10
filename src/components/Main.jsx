import React from 'react'
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import WorkStation from './WorkStation';
import Certificates from './Certificates';

const Main = () => {
    
  return (
    <div className='w-full h-full '>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Main