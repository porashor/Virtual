import React from 'react'
import { CheckCircle } from 'lucide-react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants'
import XlCard from './XlCard'
const WorkFlow = () => {
  return (
    <div className='mt-10 lg:mt-20 container w-[95%] mx-auto border-b border-neutral-800'>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl mt-6 tracking-wide text-center'>
        Accelerate your <span className='gradient text-transparent bg-clip-text'>coding workflow</span>
      </h1>
      <div className='block lg:flex gap-4 justify-between items-center mt-10'>
        <img src={codeImg} alt="code " className='w-full lg:w-1/2'/>
        <div className='w-full lg:w-1/2'>
            {checklistItems.map((item, index)=>(
                <div key={index}>
                    <XlCard title={item.title}  des={item.description} index={index} wid={`w-fit`} icon={<CheckCircle/>}/>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
