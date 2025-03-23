// src/components/HeroSection.tsx
import Image from "next/image";
import heroImage from "../../public/images/hero-2.png";

const HeroSection = () => {
  return (
    <>
      <section className="bg-[#160a01] w-full h-[80%] flex justify-evenly align-center py-10 px-10">
        <div className="w-64 flex-auto">
          <Image
            src={heroImage}
            alt="Illustration of online voting"
            className="w-full select-none"
          />
        </div>

        <div className="w-32 flex-auto">
          <h1 className="text-4xl md:text-7xl font-bold text-orange-500 mb-6 mt-20">
            Empower
            <br /> Your
            <br /> University
            <br /> Elections
          </h1>
          <p className="text-lg text-white mb-8 w-7/10">
            Secure, transparent, and hassle-free online voting for students and
            faculty – ensuring fair elections with reliable results, accessible
            from anywhere, anytime.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
