
"use client";

import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCode,
  IconMail,
} from "@tabler/icons-react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tiwariaashish24",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ashish-kumar-tiwari-812698296/",
    icon: IconBrandLinkedin,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/",
    icon: IconCode,
  },
  {
    label: "Email",
    href: "mailto:tiwariashish04@icloud.com",
    icon: IconMail,
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#080808] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <nav
          aria-label="Social media links"
          className="flex items-center justify-center gap-7"
        >
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-purple-400"
            >
              <Icon size={25} stroke={1.8} />
            </Link>
          ))}
        </nav>

        <p className="text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Ashish Kumar Tiwari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
