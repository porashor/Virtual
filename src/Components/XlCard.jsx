import React from 'react'

const XlCard = ({des, title, index, icon, wid}) => {
  return (
    <div className={`grid gap-4 mt-10  grid-cols-[1fr_7fr] ${wid || ""}`}>
        <div className='h-[50px] w-[50px] bg-neutral-900 flex items-center justify-center rounded-full text-orange-700'>
            {icon}
        </div>
        <div className='grid items-center justify-center gap-6'>
            <h2 className='text-2xl tracking-wide'>{title}</h2>
            <p className='text-md text-neutral-500 tracking-wider space-x-3'>{des}</p>
        </div>
    </div>
  )
}

export default XlCard
