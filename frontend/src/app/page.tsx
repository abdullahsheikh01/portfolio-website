import Image from "next/image";
import Header from "../components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}
