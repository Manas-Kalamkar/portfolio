import React from 'react'
import myPhoto from '../assets/myPhotoNew.png'
const Hero = () => {
  return (
    <section id='home' className='w-full h-screen bg-gray-200 flex flex-col md:flex-row md:h-fit md:pt-20 md:mb-20 lg:flex-col justify-between lg:justify-start px-[20px]'>
      <div className='pt-[100px] md:pt-[160px] lg:pt-[70px] flex flex-col xl:flex-row xl:justify-between xl:items-center lg:mx-18 '>
        <h2 className='text-5xl font-bold mb-4 leading-tight lg:text-7xl'>
          Hey There,<br />
          I'm Manas
        </h2>      
        <div className='text-xl lg:w-160'>
          A passionate React Developer focused on building dynamic and interactive web applications.</div>
      </div>
      <div className='flex justify-center items-start'>
          <img src={myPhoto} alt="myPhoto" className='object-cover lg:h-160' />
      </div>

    </section>  )
}

export default Hero