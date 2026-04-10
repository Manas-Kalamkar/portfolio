import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaCity, FaClockRotateLeft } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";
import { useDarkLightThemeContext } from './DarkLightThemeProvider';

const Footer = () => {
  const { isDark, setisDark } = useDarkLightThemeContext();
  return (
    <section className={`flex justify-center flex-col p-full w-[90%] lg:w-[60%] items-center hover:border-(--green) font-semibold lg:scale-120 `}
    >
      <div className='flex flex-col items-center border-b-2 text-2xl p-5 w-full justify-center '>
        <div>Manas Kalamkar</div>
        <div>Open to Internships</div>
      </div>
      <div className='text-xl p-4 flex flex-col gap-4' >
        <div>
          <FaCity className="transition-colors duration-100 inline scale-120 mr-2" />
          Based in: Pune, Maharashtra, India
        </div>
        <div>
          <SlUserFollow className="transition-colors duration-100 inline scale-120 mr-2 " />
          Follow me on:
          <div className='flex flex-col ml-5'>
            <div>
              <a href="https://github.com/Manas-Kalamkar" className='cursor-pointer hover:text-(--green) group' target='_blank' >
                <FaGithub className="transition-colors duration-100 inline scale-120 mr-2 " />
                <span className='group-hover:bg-gradient-to-r
         group-hover:from-green-500 
         group-hover:via-(--green) 
        group-hover:to-green-400 
        group-hover:bg-clip-text
        group-hover:text-transparent' >Manas Kalamkar
                </span>
              </a>
            </div>

            <div>
              <a href="https://linkedin.com/in/Manas-Kalamkar" className='cursor-pointer hover:text-sky-600 group' target='_blank'>
                <FaLinkedin className="transition-colors duration-100 inline scale-120 mr-2 " />
                <span className='
    transition-all 
    duration-3  00 
    group-hover:bg-gradient-to-r
    group-hover:from-sky-300
    group-hover:via-sky-500
    group-hover:to-sky-400
    group-hover:bg-clip-text
    group-hover:text-transparent
    '>
                  Manas Kalamkar
                </span>
              </a>
            </div>


          </div>
        </div>
        <div>

        </div>
        <div className='text-[0.8rem]'>
          <i>
            <FaClockRotateLeft className="transition-colors duration-100 inline scale-120 mr-2  " />
            Usually replies within a day</i>
        </div>
      </div>

    </section>
  )
}

export default Footer