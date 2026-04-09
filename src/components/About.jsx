import React from 'react'
import CardOfSkills from './CardOfSkills'
import { skills } from './skills'
import { futureSkills } from './skills'

const About = () => {
  return (
    <section id='about' className='w-full h-full flex flex-col gap-10 justify-center items-center bg-gray-200 px-[20px]'>
      <div className='text-4xl font-bold pt-[60px] lg:pt-0'>About Me</div>
      <div className='text-xl text-center md:w-250'> I'm a final-year Computer Engineering student passionate about building interactive web applications using technologies like <strong>React</strong>, <strong>JavaScript</strong>, and <strong>TypeScript</strong>. Driven by curiosity and a desire to solve real-world problems, I'm constantly learning and refining my skills. Currently, I’m seeking an <strong><em>internship</em></strong> to apply my knowledge and grow as a developer while exploring new technologies.</div>      
      <div className='text-xl font-semibold'>Core Skills & Technologies:
        <div className='flex flex-row flex-wrap gap-3 mg:gap-5 justify-center pt-4'>
          {
            skills.map(({name,color,Icon},index)=>(
              <CardOfSkills key={index}  name={name} color={color} Icon={Icon} />
            ))
          }
        </div>
      </div>
      <div className='text-xl font-semibold'>Skills I'm Developing:
        <div className='flex flex-row flex-wrap gap-3 mg:gap-5 justify-center pt-4'>
          {
            futureSkills.map(({name,color,Icon},index) => (
              <CardOfSkills key={index} name={name} color={color} Icon={Icon} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
