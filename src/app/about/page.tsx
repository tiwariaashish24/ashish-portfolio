import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl text-[#7e3bc6] text-center font-extrabold mb-12">
          About Me
        </h1>
        
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e9e9e9] mb-4">
              Hello, I'm Ashish Kumar Tiwari
            </h2>
            <p className="text-[#e9e9e9] text-lg leading-relaxed">
              I'm a dedicated BTech student at Dronacharya Group of Institutions, with a fervent passion for coding, web development, and programming. I love building innovative solutions and exploring new technologies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e9e9e9] mb-4">
              My Journey
            </h2>
            <p className="text-[#e9e9e9] text-lg leading-relaxed">
              Throughout my academic journey, I've developed a strong foundation in computer science concepts and hands-on experience with modern web technologies. I enjoy solving complex problems and turning ideas into reality through code.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e9e9e9] mb-4">
              What I Do
            </h2>
            <ul className="text-[#e9e9e9] text-lg space-y-3">
              <li className="flex items-start">
                <span className="text-[#7e3bc6] mr-2">•</span>
                <span>Build modern web applications using React, Next.js, and Node.js</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7e3bc6] mr-2">•</span>
                <span>Solve competitive programming problems on LeetCode and Codeforces</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7e3bc6] mr-2">•</span>
                <span>Develop AI-powered applications and integrate modern APIs</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#7e3bc6] mr-2">•</span>
                <span>Contribute to open-source projects and collaborate with the developer community</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#e9e9e9] mb-4">
              Let's Connect
            </h2>
            <p className="text-[#e9e9e9] text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through the contact page or connect with me on LinkedIn, GitHub, or other platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
