'use client';

import React from 'react'
import Image from 'next/image';
import StarBG from '../../../components/main/StarBG';
import {motion} from 'framer-motion'

import { ArrowLeftIcon } from '@heroicons/react/24/solid'
import { slideInFromLeft } from '@/utils/motion'

const functionalities = ["Payment Gateway", "Subscription", "Email confirmation"]
const techStack = ["Wordpress", "WooCommerce Plugin", "CF7", "Updraft"];

const page = () => {
  return (
    <div className='md:h-[88vh] w-full justify-center md:items-center'>
      <h1 className="text-[50px] text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500 mt-10">
        BeeHoney Company Website
      </h1>
      <div className="w-full flex flex-row">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-40">
          {/* Left side */}
          <div className="flex flex-col items-start">
            <div className="mt-20 md:mt-24 mb-40 md:mb-0 w-[340px] md:w-[400px] md:h-[200px] h-0 relative">
              <Image
                src="/beehoney.png"
                alt="beehoney"
                width={800}
                height={200}
                className="object-cover md:[500px] rounded-lg shadow-lg border border-[#333333]"
              />
            </div>
            
            <p className="text-justify mb-8 md:text-lg md:text-white text-base text-gray-400 mr-4 ">
                <br/><br/>
                It is a official website of the BeeHoney company.In this project, I have crafted a conceptualized, 
                designed, and developed a responsive website for the business. I insert Payment Gate Way Integration, Services showcasing,
                 News letter subscription, and Google Sheet connector
            </p>
          </div>

          {/* Right side */}
          <div className="flex flex-col ml-0 md:ml-16 justify-center">
            <div className="text-white flex flex-row mb-8 md:ml-0">
              <span className="mr-3 font-semibold">Tech Stack:</span>
              {techStack.map((tech, index) => (
                <span key={index} className="ml-3 text-gray-400">{tech}</span>
              ))}
            </div>
            <div className="text-white mb-8 md:ml-0">
              <h2 className="text-xl font-semibold mb-4">Functionalities</h2>
              {functionalities.map((functional, index) => (
                <div key={index} className="text-white">- {functional}</div>
              ))}
            </div>
            <div className="flex flex-row gap-4 w-full mb-14">
              <div className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[220px]">
                <button
                  onClick={() => window.open("https://thefoodflow.live", "_blank")}
                >
                   &nbsp;&nbsp; Visit Site&nbsp;&nbsp;
                </button>
              </div>

              <div className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]">
                <button
                  onClick={() => window.open("https://github.com/link-to-repo", "_blank")}
                >
                  &nbsp;&nbsp;Visit GitHub&nbsp;&nbsp;
                </button>
              </div>
            </div>
          </div>
        </div>
        <StarBG />
      </div>

      <a href="#projects" className="cursor-pointer">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="Welcome-box py-[8px] px-[7px] border border-[#a2790d] opacity-[0.9] flex items-center cursor-pointer"
        >
          <ArrowLeftIcon className="text-[#b48811] mr-[10px] h-5 w-5" />
          <span className="text-[#b48811]">Back to Projects</span>
        </motion.div>
      </a>
    </div>
  );
}

export default page;
