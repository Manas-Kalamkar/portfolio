import React, { useEffect, useState } from 'react'
import MobileNav from './MobileNav';
import logo1 from '/assets/logo1.svg';
import { NavData } from '../../public/assets/data/NavData';
import { HashLink } from 'react-router-hash-link';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useDarkLightThemeContext } from './DarkLightThemeProvider';

const Header = () => {

  const { isDark, setisDark } = useDarkLightThemeContext();
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeSection, setActiveSection] = useState('');

  //tracking the current section logic
  useEffect(() => {
    //function for handling scroll 
    const handleScroll = () => {
      //tracks all the section 
      const sections = document.querySelectorAll("section[id]");
      let currentSection = '';
      //checks all the section for track current one 
      sections.forEach((section) => {
        const element = document.getElementById(section.id);

        if (element) {
          //rectangle of the section gets boundarys
          const rect = element.getBoundingClientRect();

          //here if the some section height is half or more than half of window's height then that section is active section 
          if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className='fixed top-6 left-0 w-full z-100 bg-transparent'>
      <div className="lg:mx-20 px-10 xl:px-0 flex items-center justify-between h-16">
        {/* Logo */}
        <a href='/'>
          <img src={logo1} alt='logo' className='h-15 w-15 cursor-pointer' />
        </a>

        <div className='flex items-center justify-end gap-4'>
          <button onClick={() => setisDark(!isDark)} className='scale-130 p-2.5 rounded-full transition-color hover:bg-(--green) duration-180 active:border-2 focus:border-(--green)'  >
            {
              isDark ? <MdDarkMode /> : <MdLightMode />
            }
          </button>

          <button
            className=" p-2 rounded focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} activeSection={activeSection} />
            {/* 3 bars icon */}
            <div className="space-y-1 lg:hidden">
              <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-800'} `}></span>
              <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-800'} `}></span>
              <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-gray-800'} `}></span>
            </div>
          </button>
          <div className=' hidden lg:grid '>
            <nav className="">
              <ul className={`flex flex-row space-x-16 items-center  rounded-4xl px-10 py-3 ${isDark ? "bg-gray-800  text-gray-500" : "bg-white text-black"}`}>
                {NavData.map((item, index) => {
                  return (
                    <li className='cursor-pointer font-bold' key={index}>
                      <HashLink to={item.path}
                        smooth
                      >
                        <span className={activeSection.toUpperCase() == item.title.toUpperCase() ? "text-(--green) text-lg " : "text-lg hover:text-green-300"}>{item.title}</span>
                      </HashLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>


  )
}

export default Header