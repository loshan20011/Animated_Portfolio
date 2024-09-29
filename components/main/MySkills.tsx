"use client";

import { Variants } from "framer-motion";
import SkillSection from "../sub/SkillSection"; // Adjust the path as needed
import { Frontend_skill, Backend_skill, Full_stack, Other_skill } from "@/constants"; // Assuming your skills data is in a file

// Animation Variants for the skill cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};


const Skills = () => {
  return (
    <section className="skills-section py-20 " id="skills">
      <h1 className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
        Technical Skills
      </h1>
      
      <SkillSection
        title="Frontend Skills"
        skills={Frontend_skill}
        cardVariants={cardVariants} sectionVariants={{}}      />
      <SkillSection
        title="Backend Skills"
        skills={Backend_skill}
        cardVariants={cardVariants}
        sectionVariants={{}} // Pass backend variant
      />
      <SkillSection
        title="Full Stack Skills"
        skills={Full_stack}
        cardVariants={cardVariants}
        sectionVariants={{}} // Pass full stack variant
      />
      <SkillSection
        title="Other Skills"
        skills={Other_skill}
        cardVariants={cardVariants}
        sectionVariants={{}} // Pass other skills variant
      />
    </section>
  );
};

export default Skills;
