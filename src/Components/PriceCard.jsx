import React from 'react'
import { CheckCheck } from 'lucide-react'
import Button from './Button'


const PriceCard = ({title, des = [], price }) => {
  return (
    <div className='p-10 border border-neutral-700 rounded-xl '>
      <div className='text-4xl mb-8 '>
        {title}
        {title === 'Pro' ? <span className='gradient text-transparent bg-clip-text'> ( Most populer )</span> : <span></span>}
      </div>
      <div className='flex items-end justify-start'>
        <p className='text-5xl mt-6 mr-2'>{price}</p>
        <span className='text-xl text-neutral-400'>/Month</span>
      </div>
      <div className='grid gap-3 my-4 items-center justify-start'>
        {
            des.map((item, index)=>(
                <div key={index} className='flex gap-2 mt-4'>
                    <CheckCheck/>
                    {item}
                </div>
            ))
        }
      </div>
      <Button href={`#`} className={`border border-orange-600 w-full mt-20 mb-4 hover:gradient`}> Subscribe </Button>
    </div>
  )
}

export default PriceCard
{/* <p className='mb-8'>{des}</p> */}