import React, { useEffect, useRef } from "react";
import useLenis from '../../public/assets/data/lenis';
import { NavData } from "../../public/assets/data/NavData";
import { HashLink } from "react-router-hash-link";

export default function MobileNav({ isOpen, setIsOpen,activeSection }) {
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
              {NavData.map((item, index) => {
                return (
                  <li className='cursor-pointer font-bold' key={index}>
                    <HashLink to={item.path}
                      smooth
                    >
                      <span onClick={() => setIsOpen(false)} className={activeSection.toUpperCase() == item.title.toUpperCase() ? "text-(--green) text-4xl" : "text-gray-200 text-3xl"}>{item.title}</span>
                    </HashLink>
                  </li>
                )
              })}
            </ul>
          </nav>
          =

        </div>
      )}
    </div>
  );
}
