import React from 'react'
import Hero from './Hero';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const Main = () => {
    
  return (
    <div className='w-full h-full bg-gray-200'>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Main