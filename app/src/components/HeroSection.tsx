"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import heroImage from "../../public/images/hero-2.png";

const HeroSection = () => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typewriterAnimation = () => {
      if (textRef.current) {
        const text = "Empower";
        let index = 0;

        const typingInterval = setInterval(() => {
          if (textRef.current) {
            textRef.current.innerText = text.slice(0, index + 1);
            index++;
            if (index === text.length) {
              clearInterval(typingInterval);

              setTimeout(() => {
                if (textRef.current) {
                  textRef.current.classList.remove("border-r-4");
                }

                setTimeout(() => {
                  if (textRef.current) {
                    textRef.current.innerText = "";
                    textRef.current.classList.add("border-r-4");
                  }
                  typewriterAnimation();
                }, 1000);
              }, 500);
            }
          }
        }, 350);
      }
    };

    typewriterAnimation();

    return () => {};
  }, []);

  return (
    <section className="bg-[#160a01] w-full h-[80%] flex justify-evenly items-center py-10 px-10">
      <div className="w-64 flex-auto">
        <Image src={heroImage} alt="Illustration of online voting" className="w-full" />
      </div>

      <div className="w-32 flex-auto">
        <h1 className="text-4xl md:text-7xl font-bold text-orange-500 mb-6 mt-20">
          <span
            ref={textRef}
            className="overflow-hidden inline-block border-r-4 border-white pr-1 animate-blink text-white"
          ></span>
          <br /> Your
          <br /> University
          <br /> Elections
        </h1>
        <p className="text-lg text-white mb-8 w-7/10">
          Secure, transparent, and hassle-free online voting for students and faculty – ensuring
          fair elections with reliable results, accessible from anywhere, anytime.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;