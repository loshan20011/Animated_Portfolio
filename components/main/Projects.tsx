
"use client";

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const MyProjects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <h1 className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
        About Me
      </h1>

      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        
        <Link href="./projects/VirtualLab">
          <ProjectCard
            src="/VirtualLab.png"
            title="Virtual Lab for A/L Students"
            description="It is a web-based platform designed to enhance practical learning experiences for advanced-level school students. 
                I designed and developed the backend authentication, controls, middleware, and data schemas, along with the data storage
                system using MongoDB. Also implemented Google authentication.
                Developed admin dashboard functionalities to add new practical and subjects.
                Developed frontend user interface with ReactJS."
            techStack={["ReactJS", "CSS", "MongoDB", "Firebase", "NodeJS", "PostmanAPI", "API Integration" ]}
          />
        </Link>
        <Link href="./projects/Foodflow">
          <ProjectCard
            src="/foodflow.png"
            title="The FoodFlow"
            description="In this project, I developed the website responsiveness for optimal user experience on diverse devices.
            The foodflow led back-end development efforts for the web application.
            in this group project I played a key role in developing front of the application."
            techStack={["HTML5", "NodeJS", "MongoDB", "CSS3", "JavaScript", "Bootstrap5" ]}
          />
        </Link>
        <Link href="./projects/VitaCam">
          <ProjectCard
            src="/VitaCam.jpg"
            title="VitaCam"
            description="This is an ongoing project, developed to identify vitamin deficiency by using image processing machine learning model. I designed 
            and develop frontend pages, and worked with backend configurations."
            techStack={["React Native", "CSS3", "MongoDB", "API Integration", "PostmanAPI"]}
          />
        </Link>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        <Link href="./projects/BeeHoney">
          <ProjectCard
            src="/beehoney.png"
            title="BeeHoney"
            description="In this project, I have crafted a conceptualized, designed, and developed a responsive website for the business."
            techStack={["Wordpress", "Elementor", "wordpress plugins"]}
          />
        </Link>
       
        <Link href="./projects/LifeSpark">
          <ProjectCard
            src="/lifespark.png"
            title="LifeSpark Home Builders"
            description="First year individual web project for construction company, designed and developed responsive frontend pages. And deployed the website in GitHub platform"
            techStack={["HTML", "CSS", "JavaScript"]}
          />
        </Link>
        <Link href="./projects/ShaTheatre">
          <ProjectCard
            src="/ShaTheatre.png"
            title="SHaTheatre"
            description="I used Window Builder in Eclipse to design a Java GUI application for a theatre seat booking system. Implemented user
                authentication with HashMap and managed seat bookings using Array List. It incorporates OOP principles"
            techStack={["Java", "Eclipse"]}
          />
        </Link>
      </div>

      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 mb-10">
        {/* <Link href=""> */}
        <Link href="./projects/LinkPlus">
          <ProjectCard
            src="/LinkPlus.jpg"
            title="LinkPlus"
            description="Developing web application inspired by LinkedIn to connect students and 
            industry professionals with the Sabaragamuwa University
            of Sri Lanka."
            techStack={["Laravel", "CSS", "MySQL"]}
          />
        </Link>
        <Link href="./projects/HMInterior">
          <ProjectCard
            src="/hminterior.png"
            title="HM Interior"
            description="In this project,I have crafted a conceptualized, designed, and developed a seamless and responsive user interface for business organization."
            techStack={["Wordpress", "Elementor", "wordpress plugins"]}
          />
        </Link>
        <Link href="./projects/Mamsha">
          <ProjectCard
            src="/Mamsha.png"
            title="Mamsha Academy"
            description="In this project, I developed LMS system for vieing course details, add to cart, user authentication. I have integrated live zoom meeting
            with the web app where students can able to get into the meeting easily."
            techStack={["Java", "JavaSwing"]}
          />
        </Link>
      </div>
    </section>
  );
};

export default MyProjects;
