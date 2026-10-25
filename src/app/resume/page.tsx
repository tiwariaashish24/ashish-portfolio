import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-7xl text-[#7e3bc6] text-center font-extrabold mb-8">
        My Resume
      </h1>
      <p className="text-[#e9e9e9] text-center max-w-2xl mb-12">
        View my resume to learn more about my experience, skills, and qualifications.
      </p>
      <a
        href="/Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#7e3bc6] hover:bg-[#6620B3] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        View Resume
      </a>
    </div>
  )
}

export default page
