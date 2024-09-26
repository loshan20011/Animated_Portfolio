"use client";

import { Variants, motion } from "framer-motion";
import Image from "next/image";

// Define the type for each skill
interface Skill {
  skill_name: string;
  Image: string;
  width: number;
  height: number;
}

// Define the props for the SkillSection component
interface SkillSectionProps {
  title: string;
  skills: Skill[];
  cardVariants: Variants; // Type for framer-motion animation variants
  sectionVariants: Variants; // Added to handle section-level animation
}

const SkillSection: React.FC<SkillSectionProps> = ({
  title,
  skills,
  cardVariants,
  sectionVariants, // Include sectionVariants in the props
}) => (
  <motion.div
    variants={sectionVariants} // Apply section animation
    initial="hidden"
    animate="visible"
    className="mb-1"
  >
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className=""
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image
            src={skill.Image}
            alt={skill.skill_name}
            width={skill.width}
            height={skill.height}
            className="mb-3"
          />
          <p className="text-center font-semibold text-lg">{skill.skill_name}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default SkillSection;
