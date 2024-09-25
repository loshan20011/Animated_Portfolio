import Hero from "@/components/main/Hero";
import Navbar from "@/components/main/NavBar";
import StarBG from "@/components/main/StarBG";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
    <div className="flex flex-col gap-20">
      <Navbar/>
      <Hero/>
      <StarBG/>
    </div>
  </main>
  );
}
