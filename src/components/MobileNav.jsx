import React, { useEffect, useRef } from "react";
import useLenis from './lenis';


export default function MobileNav({ isOpen, setIsOpen }) {
  const lenis = useRef(useLenis());
  // disable body scroll when open
  useEffect(() => {
    if (isOpen) {
      lenis.current.stop();
      document.body.classList.add("overflow-hidden");
    } else {
      lenis.current.start();
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col justify-center items-center">
      {/* You don’t need another Open Nav button here, Header already has one */}
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black z-50 `}
        >

          <nav className="">
            
            
            <ul className="flex flex-col justify-center items-center space-y-8 h-screen">
              <li className="text-5xl text-white cursor-pointer font-bold" onClick={()=>setIsOpen(false)}><a href="#home">Home</a></li>
              <li className="text-5xl text-white cursor-pointer font-bold" onClick={()=>setIsOpen(false)}><a href="#about">About</a></li>
              <li className="text-5xl text-white cursor-pointer font-bold" onClick={()=>setIsOpen(false)}><a href="#projects">Projects</a> </li>
              <li className="text-5xl text-white cursor-pointer font-bold" onClick={()=>setIsOpen(false)}><a href="#contact">Contact</a></li>

            </ul>
          </nav>
=

        </div>
      )}
    </div>
  );
}
