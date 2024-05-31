import React from 'react';
import {features} from "../constants"
import XlCard from './XlCard';
const Features = () => {
  return (
    <div className='container w-[95%] mx-auto relative mt-20 border-b border-neutral-800 min-h-[800px]'>
        <div className='text-center '>
            <span className='bg-neutral-900 text-orange-500 rounded-full h-6 text-sm px-2 py-1'>
                Features
            </span>
            <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>Easily build <span className='gradient text-transparent bg-clip-text'>
            your code 
              </span></h2>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 xl:grid-cols-3 gap-4 mt-10 lg:mt-20'>
          {features.map((item, index)=>(
            <div key={index}>
              <XlCard title={item.text} des={item.description} index={index} icon={item.icon} wid={`w-fit`} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default Features;






{/* <div className='h-[50px] w-[50px] bg-neutral-900 flex items-center justify-center rounded-full text-orange-700'>
{item.icon}
</div>
<div className='grid items-center justify-center gap-6'>
  <h2 className='text-2xl tracking-wide'>{item.text}</h2>
  <p className='text-md text-neutral-500 tracking-wider space-x-3'>{item.description}</p>
</div> */}