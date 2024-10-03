import React from 'react'
import List from './list'
import ListItem from './listItem'

const sub_categories = ({className}) => {
    return(
        <div className={`bg-white sm:w-[518px] md:w-[560px] w-48 flex pb-[30px] sm:justify-evenly justify-around flex-wrap sm:flex-nowrap text-sm ${className}`}>
        <List className='flex-col text-[#767676] gap-y-2.5'>
            <h3 className='text-[#262626] text-base font-bold sm:mt-7 mt-2.5  mb-2'>Phones</h3>
            <ListItem listInnerItem='Phone 1' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Phone 2' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Phone 3' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Phone 4' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Phone 5' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Phone 6' active='hover:text-[#262626] hover:font-bold'/>          
            <ListItem listInnerItem='Phone 7' active='hover:text-[#262626] hover:font-bold'/>          
        </List>        
        <List className='flex-col text-[#767676] gap-y-2.5'>
            <h3 className='text-[#262626] text-base font-bold sm:mt-7 mt-2.5  mb-2'>Computers</h3>
            <ListItem listInnerItem='Computer 1' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Computer 2' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Computer 3' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Computer 4' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Computer 5' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Computer 6' active='hover:text-[#262626] hover:font-bold'/>          
            <ListItem listInnerItem='Computer 7' active='hover:text-[#262626] hover:font-bold'/>          
        </List>
        <List className='flex-col text-[#767676] gap-y-2.5'>
            <h3 className='text-[#262626] text-base font-bold sm:mt-7 mt-2.5  mb-2'>Smart watches</h3>
            <ListItem listInnerItem='Smart watches 1' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Smart watches 2' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Smart watches 3' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Smart watches 4' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Smart watches 5' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Smart watches 6' active='hover:text-[#262626] hover:font-bold'/>          
            <ListItem listInnerItem='Smart watches 7' active='hover:text-[#262626] hover:font-bold'/>          
        </List>
        <List className='flex-col text-[#767676] gap-y-2.5 w-[74px]'>
            <h3 className='text-[#262626] text-base font-bold sm:mt-7 mt-2.5  mb-2'>Cameras</h3>
            <ListItem listInnerItem='Cameras 1' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Cameras 2' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Cameras 3' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Cameras 4' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Cameras 5' active='hover:text-[#262626] hover:font-bold'/>
            <ListItem listInnerItem='Cameras 6' active='hover:text-[#262626] hover:font-bold'/>          
            <ListItem listInnerItem='Cameras 7' active='hover:text-[#262626] hover:font-bold'/>          
        </List>
    </div>
    )
}

export default sub_categories