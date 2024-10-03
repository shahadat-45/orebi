import React, { useState } from 'react'
import ListItem from './listItem'
import { FaPlus } from "react-icons/fa6"
import { TiMinus } from "react-icons/ti";


const catlist = ({category , showSubCat , children}) => {
    let [subcat , setSubcat] = useState(showSubCat)
    let [show , setShow] = useState(false)
  return (
    <>
        {
            subcat ?
        <>
        <div onClick={()=>setShow(!show)}>
            <ListItem className='pb-5 w-full mb-5 flex text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem={category} > {subcat == true ? <><FaPlus className={show == true ? 'hidden' : '' + 'order-1'}/><TiMinus className={show == false ? 'hidden' : '' + 'order-1'}/></> : ''} </ListItem>
        </div>
        {show && (
            <div className='mb-3'>
                {children}
            </div>
        )}
        </> 
        :
        <div>
            <ListItem className='pb-5 w-full mb-5 flex text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem={category} > {subcat == true ? <><FaPlus className={show == true ? 'hidden' : '' + 'order-1'}/><TiMinus className={show == false ? 'hidden' : '' + 'order-1'}/></> : ''} </ListItem>
        </div>
        }        
    </>
  )
}

export default catlist