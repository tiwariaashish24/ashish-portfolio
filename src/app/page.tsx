"use client"
import Contactpage from "@/components/Contactpage";
import Experience from "@/components/Experience";
import HeroSpotlight from "@/components/HeroSpotlight";
import Profiles from "@/components/Profiles";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-black">
    <HeroSpotlight/>
    <Profiles/>
    <Experience/>
    <Projects/>
    <Skills/>
    <Contactpage/>
    <Footer />
    </div>
  );
}
