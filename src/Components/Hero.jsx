import React from 'react'
import vider1 from "../assets/video1.mp4"
import vider2 from "../assets/video2.mp4"
import Button from './Button'
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'>
            Virtual build tools <span className='gradient text-transparent bg-clip-text'>for developers</span>
        </h1>
        <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>
            Empower your creativity and bring your V app ideas to life with our intuitive development tools. Get start today and trun your imagination into immersive reality!
        </p>
        <div className='flex justify-center my-10 gap-4'>
            <Button href="#"  className='hover:border-orange-800 hover:gradient border hover:border'>Start for free</Button>
            <Button href="#"  className='hover:border-orange-800 hover:gradient border hover:border'>Documentation</Button>
        </div>
        <div className='flex flex-col md:flex-row mt-10 justify-center gap-4 my-4'>
            <video src={vider1} autoPlay loop muted className='h-[200px] md:h-[350px] w-fit rounded-lg border border-orange-800'></video>
            <video src={vider2} autoPlay loop muted className='h-[200px] md:h-[350px] w-fit rounded-lg border border-orange-800'></video>
        </div>
    </div>
  )
}

export default Hero
