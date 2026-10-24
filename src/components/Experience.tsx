"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

const dummyContent = [
  {
    title: "Nextjs",
    description: (
      <>
        <p>
          Developed Perplexity Build, an AI-powered search platform 
          inspired by Perplexity AI, using modern web technologies.
          Implemented an intuitive user interface, integrated AI-powered search 
          capabilities, and optimized the application for responsiveness and performance.
          Focused on delivering a seamless conversational search experience with relevant,
          context-aware responses and a clean, user-friendly interface.
        </p>
      </>
    ),
    badge: "PerplixityBuild",
    image: "/Perplixity.png",
  },

  {
    title: "Reactjs",
    description: (
      <>
        <p>
          Developed Chatty, a real-time messaging application
          using a Turborepo monorepo architecture to organize
          and manage multiple applications and shared packages efficiently. 
          Implemented secure authentication, direct messaging, chat room creation,
          and message management with a responsive, user-friendly interface. 
          Leveraged a modular project structure to improve code reusability, 
          maintainability, and scalability while delivering a seamless communication experience.
        </p>
      </>
    ),
    badge: "Chatty-Build",
    image: "/Chatty.png",
  },
];

const Experience = () => {
  return (
    <>
      <h1 className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="max-w-2xl mx-auto antialiased pt-2 relative">
          {dummyContent.map((item, index) => (
            <div key={`content-${index}`} className="mb-10">
              <h2 className="bg-black text-[#6620B3] rounded-full text-2xl w-fit px-4 py-1 mb-4 font-semibold">
                {item.badge}
              </h2>

              <p className={twMerge("text-[#ffffffac] text-sm mb-4")}>
                {item.title}
              </p>

              <div className="text-sm text-[#e9e9e9] prose prose-sm dark:prose-invert">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1000"
                    width="1000"
                    className="rounded-lg mb-10 object-cover"
                  />
                )}
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
};

export default Experience;
