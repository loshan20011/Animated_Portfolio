import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import MySkills from "@/components/main/MySkills";
import Navbar from "@/components/main/NavBar";
import MyProjects from "@/components/main/Projects";
import StarBG from "@/components/main/StarBG";
import Achievements from "@/components/main/Achievements"
import Contact from "@/components/main/Contact"


export default function Home() {
  return (
    <main className="w-full h-full">
    <div className="flex flex-col gap-20">
      <Navbar/>
      <Hero/>
      <StarBG/>
      <About/>
      <MySkills/>
      <MyProjects/>
      <Achievements/>
      <Contact/>
    </div>
  </main>
  );
}
