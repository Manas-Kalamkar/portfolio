import React from 'react'
import {projects} from '../assets/data/projects'

const Projects = () => {
  return (
    <section id='projects' className='w-full  h-full flex flex-col gap-10 bg-gray-200 text-black items-center justify-center pt-[60px]'>
      <div className='text-4xl font-bold px-15 pt-[60px] lg:pt-0'>My Latest Works</div>
      <div className='grid sm:grid-row-2 md:grid-cols-3 gap-4  max-w-[1000px] p-4'>
        {projects.map((project,index)=>{
          return(
            <div key={index} className='border-2 border-gray-300 rounded-lg p-4 bg-white hover:scale-105 duration-300'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-gray-700 mb-2'>{project.description}</p>
              <div className='mb-2'>
                {project.tech.map((techItem, techIndex) => (
                  <span key={techIndex} className='inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2 hover:bg-blue-300 duration-200'>{techItem}</span>
                ))}
              </div>
              <div className='flex space-x-4'>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>Live</a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>GitHub</a>
              </div>
            </div>
          )
        })}
        </div>
      
    </section>
  )
}

export default Projects