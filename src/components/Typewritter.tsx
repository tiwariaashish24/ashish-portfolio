"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function Typewriter() {
  const words = [
    {
      text: "Keystrokes",
    },
    {
      text: "Shaping",
    },
    {
      text: "Tomorrow's",
    },
    {
      text: "Possibilities",
      className: "text-blue-500 dark:text-blue-500",
    },
    
  ];
  return (
    
      <span className="flex justify-center">
      <TypewriterEffectSmooth words={words} />
      </span>
      
    
  );
}
