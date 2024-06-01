import React from 'react'

const TesCard = ({des, img, title, subTitle}) => {
  return (
    <div className='border grid items-center gap-5 border-neutral-800 rounded-md p-6'>
      <div className='text-md text-neutral-400 tracking-wider space-y-2'>
        {des}
      </div>
      <div className='flex items-center justify-start gap-5'>
        <img src={img} alt="testimonial card" className='h-[40px] w-[40px] rounded-full'/>
        <div className='grid gap-2'>
            <div className='text-2xl tracking-wider'>{title}</div>
            <div className='text-md text-neutral-500 tracking-wide'>{subTitle}</div>
        </div>
      </div>
    </div>
  )
}

export default TesCard
