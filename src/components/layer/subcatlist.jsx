import React from 'react'
import ListItem from './listItem'

const subcatlist = ({sub_category}) => {
  return (
    <>
        <ListItem className='pb-2 w-full text-[#2e2d2d]' listInnerItem={sub_category}/>
    </>
  )
}

export default subcatlist