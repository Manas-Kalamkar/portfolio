import React, { useRef, useEffect, useState } from "react";
import { certificates } from "../../public/assets/data/certificates";
import useLenis from "../../public/assets/data/lenis";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Certificates = () => {

  const lenis = useLenis();
  const containerRef = useRef(null);
  const velocityRef = useRef(0);
  const isInteractingRef = useRef(false);
  const autoScrollInterval = useRef(null);


  const FRICTION = 0.92;
  const MIN_VELOCITY = 0.02;

  // -----------------------------
  // SMOOTH VELOCITY SCROLL LOOP
  // -----------------------------
  useEffect(() => {
    const smoothScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      isInteractingRef.current = false;
      container.scrollLeft += velocityRef.current * 5;

      velocityRef.current *= FRICTION;
      if (Math.abs(velocityRef.current) < MIN_VELOCITY) {
        velocityRef.current = 0;
      }

      requestAnimationFrame(smoothScroll);
    };

    smoothScroll();
  }, []);

  // -----------------------------
  // AUTO SCROLL (INFINITE LOOP)
  // -----------------------------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const startAutoScroll = () => {
      isInteractingRef.current = false;
      if (autoScrollInterval.current) return;
      autoScrollInterval.current = setInterval(() => {
        if (!isInteractingRef.current) {
          container.scrollLeft += 1;
          if (
            container.scrollLeft + container.clientWidth >=
            container.scrollWidth
          ) {
            container.scrollLeft = 0;
          }
        }
      }, 15);
    };

    const stopAutoScroll = () => {
      isInteractingRef.current = true;
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    };

    startAutoScroll();

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("mouseleave", startAutoScroll);

    return () => {
      stopAutoScroll();
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  // -----------------------------
  // DISABLE LENIS INSIDE THIS SECTION
  // -----------------------------
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onEnter = () => {
      lenis.options.wheelMultiplier = 0.01;
    };



    container.addEventListener("mouseenter", onEnter);

    return () => {
      container.removeEventListener("mouseenter", onEnter);
      lenis.options.wheelMultiplier = 5;
    };
  }, []);

  //KEYDOWN EVENT FOR LEFT/RIGHT ARROW

  useEffect(() => {

    const container = containerRef.current;
    const handleKeyDown = (e) => {
      if (!container) return;
      if (e.key === "ArrowLeft") {
        velocityRef.current = -2;
        isInteractingRef.current = true;
      } else if (e.key === "ArrowRight") {
        velocityRef.current = 2;
        isInteractingRef.current = true;
      }
    };
    const handleKeyUp = () => {
      velocityRef.current = 0;
      isInteractingRef.current = false;
    }


    container.addEventListener("keydown", handleKeyDown);
    container.addEventListener("keyup", handleKeyUp);

    return () => {
      container.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("keyup", handleKeyUp);

    }
  }, [])
  const handleUIDirections = (direction) => {

    const container = containerRef.current;
    if (!container) return;
    isInteractingRef.current = true;
    if (direction === "left") {
      velocityRef.current = -2;

    } else if (direction === "right") {
      velocityRef.current = 2;
      container.scrollLeft += 100;
    }
  }


  return (

    <section
      className="w-full h-full flex flex-col gap-10 items-center justify-center pt-[60px] px-[20px]"
    >
      <div className="text-4xl font-bold px-15 pt-[60px] lg:pt-0 relative" >
        Certifications
      </div>
      {/* Overlay buttons */}

      <div
        ref={containerRef}
        className="w-screen flex flex-col items-center justify-around gap-5 md:flex-row md:flex-wrap lg:justify-start lg:flex-nowrap lg:w-[102%] rounded-lg overflow-x-auto no-scrollbar lg:gap-10 p-[20px]"
      >
        <button
          onClick={() => handleUIDirections("left")}
          className="hidden lg:block absolute left-4  z-100 "
        >
          <FaChevronLeft className="w-10 h-10 opacity-80 hover:opacity-100 bg-(--green) active:p-3 rounded-full p-2 transition-transform transform hover:scale-110 duration-100 text-gray-200 cursor-pointer" />

        </button>
        {certificates.map((certificate) => (
          <div
            key={certificate.id}
            className="flex justify-evenly h-[500px] flex-col border-2 border-gray-300 shrink-0 rounded-lg p-4 hover:scale-105 duration-300 w-100 max-w-full"
          >
            <a
              href={certificate.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 "
            >
              <img
                src={certificate.img}
                alt={certificate.title}
                className="hover:flex object-contain rounded-lg border-1 border-(--green) hover:border-4 hover:scale-105 duration-300"
              />
            </a>
            <div>

              <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
              <p className="text-gray-500 mb-2 sm:w-[100%]">
                {certificate.description}
              </p>

            </div>
          </div>
        ))}

        <button
          onClick={() => handleUIDirections("right")}
          className="hidden lg:block absolute right-4"
        >
          <FaChevronRight className="w-10 h-10 opacity-80 hover:opacity-100 bg-(--green) active:p-3 rounded-full p-2 transition-transform transform hover:scale-110 duration-100 text-gray-200 cursor-pointer" />


        </button>
      </div>
    </section>
  )
}

export default Certificates

