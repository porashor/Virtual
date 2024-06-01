import React from 'react'

const RowFoot = ({resourcesLinks, title}) => {
  return (
    <div>
        <h3 className='text-md font-semibold mb-4 text-3xl uppercase'>
            {title}
        </h3>
        <ul className='grid items-center justify-start space-y-2'>
            {
                resourcesLinks.map((item, index)=>(
                    <li key={index}>
                        <a className='text-md text-neutral-400' href={item.href}>{item.text}</a>
                    </li>
                ))
            }
        </ul>
        </div>
  )
}

export default RowFoot
