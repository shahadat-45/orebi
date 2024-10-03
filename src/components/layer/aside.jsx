import React , { useState } from 'react'
import List from './list'
import ListItem from './listItem'
import {RiArrowUpSFill} from 'react-icons/ri'
import {BsFillBalloonFill} from 'react-icons/bs'
import { FaPlus } from "react-icons/fa6"
import Catlist from './catlist';
import FilterItem from './filterItem'
import Subcatlist from './subcatlist';

function aside() {

  return (
    <aside className='h-auto'>
        <FilterItem dropdown={false} filterItemName='Shop by Category'>
        <Catlist category="category 1" showSubCat={true}> 
                <Subcatlist sub_category='12345' />
                <Subcatlist sub_category='12345' />
            </Catlist>
            <Catlist category="category 2" showSubCat={false}/>
            <Catlist category="category 3" showSubCat={true}> 
                <Subcatlist sub_category='12345' />
                <Subcatlist sub_category='123456' />
                <Subcatlist sub_category='1234567' />
                <Subcatlist sub_category='12345678' />
                <Subcatlist sub_category='123456789' />
            </Catlist>
            <Catlist category="category 4" showSubCat={false}/>
            <Catlist category="category 5" showSubCat={false}/>
        </FilterItem>
        <FilterItem dropdown={true} filterItemName='Shop by Brand'> 
            <Catlist category="Brand 1" showSubCat={false}/>
            <Catlist category="Brand 2" showSubCat={false}/>
            <Catlist category="Brand 3" showSubCat={false}/>
            <Catlist category="Brand 4" showSubCat={false}/>
            <Catlist category="Brand 5" showSubCat={false}/>
        </FilterItem>        
        <FilterItem dropdown={true} filterItemName='Shop by Price'> 
            <Catlist category="$0.00 - $9.99" showSubCat={false}/>
            <Catlist category="$10.00 - $19.99" showSubCat={false}/>
            <Catlist category="$20.00 - $29.99" showSubCat={false}/>
            <Catlist category="$30.00 - $49.99" showSubCat={false}/>
            <Catlist category="$50.00 - $99.99" showSubCat={false}/>
        </FilterItem>        
        {/* <div className="w-[371px] mb-14">
            <h4 className='text-black font-bold text-xl mb-9 flex justify-between items-center'>Shop by Color <RiArrowUpSFill/> </h4>
            <List className='flex-col' >
                <ListItem className='pb-5 w-full flex gap-x-2.5 items-center mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Color 1'> <BsFillBalloonFill color='black'/> </ListItem>
                <ListItem className='pb-5 w-full flex gap-x-2.5 items-center mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Color 2'> <BsFillBalloonFill color='rgba(255, 134, 134, 1)'/> </ListItem>
                <ListItem className='pb-5 w-full flex gap-x-2.5 items-center mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Color 3'> <BsFillBalloonFill color='rgba(126, 211, 33, 1)'/> </ListItem>
                <ListItem className='pb-5 w-full flex gap-x-2.5 items-center mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Color 4'> <BsFillBalloonFill color='rgba(182, 182, 182, 1)'/> </ListItem>
                <ListItem className='pb-5 w-full flex gap-x-2.5 items-center mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Color 5'> <BsFillBalloonFill color='rgba(21, 203, 165, 1)'/> </ListItem>
            </List>
        </div> */}
        {/* <div className="w-[371px] mb-14">
        <h4 className='text-black font-bold text-xl mb-9 flex justify-between'>Shop by Brand <RiArrowUpSFill/> </h4>
            <List className='flex-col' >
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Brand 1'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Brand 2'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Brand 3'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Brand 4'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='Brand 5'/>
            </List>
        </div> */}
        {/* <div className="w-[371px] mb-14">
        <h4 className='text-black font-bold text-xl mb-9 flex justify-between'>Shop by Price <RiArrowUpSFill/> </h4>
            <List className='flex-col' >
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='$0.00 - $9.99'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='$10.00 - $19.99'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='$20.00 - $29.99'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='$30.00 - $39.99'/>
                <ListItem className='pb-5 w-full mb-5 text-[#767676] border-b-2 border-[#F0F0F0]' listInnerItem='$40.00 - $69.99'/>
            </List>
        </div> */}
    </aside>
  )
}

export default aside