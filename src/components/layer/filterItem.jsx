import React , { useState } from 'react'
import { RiArrowUpSFill } from 'react-icons/ri'
import List from './list'

const filterItem = ({dropdown , children , filterItemName}) => {
    let [arrow , setArrow] = useState(dropdown)
    let [show , setShow] = useState(true)
  return (
    <>
        {arrow ? <div className="w-[371px] mb-8">
            <h4 onClick={()=> setShow(!show)} className='text-black font-bold text-xl mb-9 flex justify-between items-center'>{filterItemName} <RiArrowUpSFill className={show == true ? 'rotate-180 transition-all' : 'transition-all rotate-0'}/> </h4>
            {show && (
            <List className='flex-col' >
                {children}
            </List>
            )}
        </div> : <div className="w-[371px] mb-8">
            <h4 className='text-black font-bold text-xl mb-9 flex justify-between items-center'>{filterItemName} </h4>            
            <List className='flex-col' >
                {children}
            </List>
        </div> }        
    </>
  )
}

export default filterItem