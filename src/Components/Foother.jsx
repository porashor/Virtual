import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'
import RowFoot from './RowFoot'




const Foother = () => {
  return (
    <div className='container mt-20 w-[95%] mx-auto mb-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        <RowFoot title={`Resources`} resourcesLinks={resourcesLinks}/>
        <RowFoot title={`Platform`} resourcesLinks={platformLinks}/>
        <RowFoot title={`Community`} resourcesLinks={communityLinks}/>
      </div>
    </div>
  )
}

export default Foother
