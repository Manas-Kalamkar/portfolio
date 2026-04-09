import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

const Footer = () => {
  return (
    <section id='footer' className='w-full h-fit p-10 text-white flex flex-col items-center justify-center bg-gradient-to-b from-black via-black to-gray-800 '>
      <div className='flex gap-3'>
        Follow me on:
        <a href="https://github.com/Manas-Kalamkar" className='cursor-pointer' target='_blank' ><GitHubIcon /></a>
        <a href="https://linkedin.com/in/Manas-Kalamkar" className='cursor-pointer' target='_blank'><LinkedInIcon /></a>
        <a href="https://www.instagram.com/manas_9.10/" className='cursor-pointer' target='_blank'><InstagramIcon /></a>
      </div>

    </section>
  )
}

export default Footer