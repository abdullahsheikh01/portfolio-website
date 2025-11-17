import Image from "next/image";
import Header from "../components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <Header/>
      <Hero/>
    </div>
  );
}
