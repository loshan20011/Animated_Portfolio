"use client";

import { Variants, Variant } from "framer-motion";
import SkillSection from "../sub/SkillSection"; // Adjust the path as needed
import { Frontend_skill, Backend_skill, Full_stack, Other_skill } from "@/constants"; // Assuming your skills data is in a file

// Animation Variants for the skill cards
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

// Animation Variants for the skill sections
const sectionVariants: Variants = {
  frontend: {
    hidden: { opacity: 0, x: 100 },  // Starts from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  backend: {
    hidden: { opacity: 0, x: -100 },  // Starts from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  fullStack: {
    hidden: { opacity: 0, y: 50 },  // Normal animation from below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  other: {
    hidden: { opacity: 0, y: 50 },  // Normal animation from below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};

const Skills = () => {
  return (
    <section className="skills-section py-20">
      <h1 className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
        Technical Skills
      </h1>
      
      <SkillSection
        title="Frontend Skills"
        skills={Frontend_skill}
        cardVariants={cardVariants}
        sectionVariants={sectionVariants.frontend} // Pass frontend variant
      />
      <SkillSection
        title="Backend Skills"
        skills={Backend_skill}
        cardVariants={cardVariants}
        sectionVariants={sectionVariants.backend} // Pass backend variant
      />
      <SkillSection
        title="Full Stack Skills"
        skills={Full_stack}
        cardVariants={cardVariants}
        sectionVariants={sectionVariants.fullStack} // Pass full stack variant
      />
      <SkillSection
        title="Other Skills"
        skills={Other_skill}
        cardVariants={cardVariants}
        sectionVariants={sectionVariants.other} // Pass other skills variant
      />
    </section>
  );
};

export default Skills;
