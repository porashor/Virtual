import React from 'react'
import { pricingOptions } from '../constants'
import PriceCard from './PriceCard'
const Pricing = () => {
  return (
    <div className='mt-20 pb-10 container mx-auto w-[95%] border-b border-neutral-800'>
      <div className='text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider'>
        Pricing
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
        {pricingOptions.map((item, index)=>(
            <div key={index} className=''>
                <PriceCard title={item.title} des={item.features} price={item.price}/>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
