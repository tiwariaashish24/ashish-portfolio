"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const Projects = () => {
  const content = [
    {
      title: "Token Optimizer",
      description:
        "Build smarter AI applications with a token optimization platform that analyzes text, estimates token usage and API costs, and improves prompts through summarization, compression, and code optimization. Track optimization history and manage AI usage with a modern, responsive interface.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/TokenOptizer.png"
            width={2000}
            height={1500}
            className="h-full w-full object-fit"
            alt="Token Optimizer"
          />
        </div>
      ),
      imgurl: ""
    },
    {
      title: "StudyFlow",
      description:
        "Make studying more organized with a desktop productivity application designed to help students manage their study sessions. Use stopwatch, countdown, and Pomodoro timers while maintaining session history and building better study habits.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/StudyFlow.png"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="StudyFlow"
          />
        </div>
      ),
    },
    {
      title: "ChatGpt Build",
      description:
        "Develop an AI chat application using modern web technologies, authentication, and database integration. Focus on creating a conversational interface with user management, persistent data, and a scalable foundation for AI-powered interactions.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/ChatGpt.png"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="ChatGpt Build"
          />
        </div>
      ),
    },
     {
      title: "NotebookLM",
      description:
        "Explore an AI-powered notebook experience designed to help users interact with information and organize knowledge. Build and experiment with client-server architecture and modern AI application workflows.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/Notebooklm"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="NotebookLM"
          />
        </div>
      ),
    },
     {
      title: "Phone Control MCP",
      description:
        "Connect AI assistants with smartphone operations through a Model Context Protocol server. Explore tool-based interactions and device connectivity using TypeScript, MCP, ADB, Bluetooth, and Wi-Fi debugging.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/PhoneMcp.png"
            width={1500}
            height={1500}
            className="h-full w-full object-cover"
            alt="Phone Control MCP"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="mt-10 pt-10 flex flex-col justify-center">
      
        <span className="text-4xl md:text-7xl  text-[#7e3bc6] text-center font-extrabold m-4 text-upside-down">
        Projects
      </span>
      <StickyScroll content={content} />
    </div>
  );
};

export default Projects;
