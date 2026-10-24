import React from 'react'
import Contactsection from './Contactsection'
import Globe from './Globe'

const Contactpage = () => {
  return (
    <div className='flex  w-full  justify-center items-center  align-baseline flex-wrap'>
      <div className=' z-20'>
        <Contactsection/>
      </div>
      <div className=' w-[50rem] mt-[-30rem] md:mt-[-10rem]'>
        <Globe/>
      </div>
    </div>
  )
}

export default Contactpage
