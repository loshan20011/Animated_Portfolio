import React from 'react'
import HeroContext from '../sub/HeroContext'


const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
         <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/New Project.mp4" type="video/mp4" />
      </video>
      
      <HeroContext/>
    </div>
  )
}

export default Hero
