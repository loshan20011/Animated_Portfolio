import Image from "next/image";
import React from "react";

const achievements = [
  {
    year: "2018",
    title: "Science Day Speech Competition about Impact of AI organized by Hindu colledge",
    description: "Awarded 1st place",
    img: "/speech1st.jpg", // Replace with actual image paths
  },
  {
    year: "2024",
    title: "MoraUxplore 2.0",
    description: "1st Runners Up, organized by IEEE UoM",
    img: "/moraux2.jpg",
  },
  {
    year: "2023",
    title: "Idealize, organized by UoM",
    description: "Earned top honors, Web App Excellence Award, People's Choice Award",
    img: "/idealize.jpg",
  },
  {
    year: "2023",
    title: "INSL Sabaragamuwa Province",
    description: "Top 10 finalist, organized by IEEE",
    img: "/insl.jpg",
  },
  {
    year: "2024",
    title: "AI Ideathon Aurora",
    description: "Top 6 finalist, University of Sri Jayawardanapura",
    img: "/aurora.jpeg",
  },
  {
    year: "2018",
    title: "National level speech competition organized by Kamban Kazhagam",
    description: "Awarded 2nd place",
    img: "/speech2nd.jpg",
  },
];

const AchievementsSection = () => {
  return (
    <section id ="awards">
    <div className="w-full flex flex-col items-center p-8">
      <h1 className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
        Achievements<br/><br/>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {achievements.map((achievement, index) => (
          <div key={index} className="relative w-[400px] h-[400px] ">
            {/* Image fills the circle and is fully round */}
            <div className="w-full h-full rounded-full overflow-hidden shadow-inner shadow-md shadow-[#a2790d] bg-[#03001417]">
              <Image
                src={achievement.img}
                alt={achievement.title}
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            {/* Text content is positioned at the bottom half, overlapping */}
            <div className="absolute bottom-0 left-0 w-full text-center p-4 bg-gradient-to-t from-black to-transparent rounded-full">
              <h2 className="text-yellow-500 text-2xl font-bold drop-shadow-lg">{achievement.year}</h2>
              <p className="text-white font-medium">{achievement.title}</p>
              <p className="text-[#bb9b49] text-sm font-bold">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default AchievementsSection;
