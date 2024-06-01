import React from 'react'
import { testimonials } from '../constants'
import TesCard from './TesCard'





const Testimonial = () => {
  return (
    <div className='container mt-20 w-[95%] mx-auto tracking-wide border-b pb-10 border-neutral-800'>
      <h2 className='text-3xl text-center my-10 lg:my-20 sm:text-5xl lg:text-6xl'>
        What people are saying 
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16'>
        {
            testimonials.map((item, index)=>(
                <div className='w-[420px]' key={index}>
                    <TesCard des={item.text} title={item.user} img={item.image} subTitle={item.company}/>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Testimonial
