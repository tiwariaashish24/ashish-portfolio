import React from "react";
import {
  IconPhone,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";

const contacts = [
  {
    label: "Phone",
    value: "+91 87093 88221",
    href: "tel:+918709388221",
    Icon: IconPhone,
  },
  {
    label: "Email",
    value: "tiwariiashish04@gmail.com",
    href: "mailto:tiwariiashish04@gmail.com",
    Icon: IconMail,
  },
  {
    label: "Location",
    value: "Greater Noida, UP, India",
    Icon: IconMapPin,
  },
];

const Page = () => {
  return (
    <main className="min-h-screen bg-black px-5 py-20 text-[#e9e9e9] sm:px-8">
      <section className="mx-auto max-w-5xl">
        {/* Gradient Heading */}
        <h1 className="text-upside-down mb-4 text-center text-4xl font-extrabold sm:text-5xl md:text-7xl">
          About Me
        </h1>

        {/* Heading Underline */}
        <div className="mx-auto mb-10 h-1 w-16 rounded-full bg-gradient-to-r from-[#7e3bc6] via-cyan-400 to-[#7e3bc6]" />

        {/* Introduction */}
        <p className="mx-auto mb-16 max-w-3xl text-center text-base leading-relaxed text-[#e9e9e9]/85 sm:text-lg md:mb-20">
          I&apos;m a passionate software developer and BTech student
          at Dronacharya Group of Institutions, interested in
          full-stack development, modern web technologies, and
          solving challenging programming problems. I enjoy building
          innovative applications and turning ideas into reality
          through code.
        </p>

        {/* Contact Information */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {contacts.map(({ label, value, href, Icon }) => {
            const content = (
              <div className="group relative flex flex-col items-center gap-3 px-3 py-5 text-center transition-transform duration-300 hover:-translate-y-1">
                {/* Icon */}
                <Icon
                  size={40}
                  stroke={1.6}
                  className="text-[#e9e9e9] transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.65)]"
                />

                {/* Label */}
                <h2 className="text-lg font-semibold transition-colors duration-300 group-hover:text-cyan-400">
                  {label}
                </h2>

                {/* Value */}
                <p className="break-words text-sm text-[#a5a5b0] transition-colors duration-300 group-hover:text-white sm:text-base">
                  {value}
                </p>

                {/* Cyan Hover Underline */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transition-all duration-500 group-hover:w-4/5" />

                {/* Glow Effect */}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 blur-sm transition-all duration-500 group-hover:w-4/5 group-hover:opacity-100" />
              </div>
            );

            return href ? (
              <a
                key={label}
                href={href}
                className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Page;