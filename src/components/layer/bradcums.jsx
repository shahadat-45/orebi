import React from 'react'
import {RiArrowRightSLine} from 'react-icons/ri'

const bradcums = () => {
  return (
    <section className='title container mx-auto mb-32'>
        <h2 className='font-bold text-5xl text-[#262626] mt-[124px] mb-3 first-letter:uppercase'>{window.location.pathname.split('/')[1]}</h2>
        <p className=' text-[#767676] text-xs flex items-center'>Home <RiArrowRightSLine/> <span className='first-letter:uppercase'>{window.location.pathname.split('/')[1]}</span> </p>
    </section>
  )
}

export default bradcums