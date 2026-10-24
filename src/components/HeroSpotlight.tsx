import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import { Typewriter } from "./Typewritter";
import { BackgroundBeams } from "./ui/background-beams";
import Herodesc from "./Herodesc";


function HeroSpotlight() {
  return (
    <div className="bg-black">
      <div className="h-fit  rounded-md  md:items-center md:justify-center  antialiased   overflow-hidden  w-full dark:bg-black mb-5">
        <Spotlight
          className="-top-50 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0  mt-20">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 bg-opacity-40 text-[#dedede] ">
            <span className="text-upside-down">Ashish Kumar Tiwari</span> <br />
            <Typewriter />
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            <Herodesc/>
          </p>
        </div>
      </div>
      
      <BackgroundBeams />
    </div>
  );
}

export default HeroSpotlight;
