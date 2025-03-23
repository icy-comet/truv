"use client";

import Image from "next/image";
import { Section } from "@radix-ui/themes";
import whyVote from "../../public/images/whyVoteImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const WhyVoteComponent = () => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <Section className="h-screen w-full flex flex-col bg-[#E26002] ">
        <div ref={textRef} className="text-4xl md:text-7xl font-bold text-white mb-6 mt-20 w-[100%] text-center [text-shadow:0_5px_6px_rgb(99_102_241/_0.8)]">
          <h1>Why We Make Your Vote Safer & Smarter?</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-40 mx-30">
          <div className="bg-[#FDF3E7] p-6 rounded-lg shadow-md md:w-30 w-65 flex-auto ">
            <ul className="space-y-6">
              <li className="flex items-center">
                <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
                <span className="text-black font-semibold">
                  Tamper-proof Security
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
                <span className="text-black font-semibold">
                  Decentralized & Transparent
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
                <span className="text-black font-semibold">
                  Real-time Vote Counting
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
                <span className="text-black font-semibold">
                  Anonymous & Private Voting
                </span>
              </li>
            </ul>
          </div>

          <div className="relative w-64 flex-auto">
            <Image
              src={whyVote}
              alt="Clipboard Illustration"
              className="w-64 md:w-130"
            />
          </div>
        </div>
      </Section>
    </>
  );
};

export default WhyVoteComponent;