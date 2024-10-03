import React from "react";
import { AiFillHeart } from 'react-icons/ai';
import { PiArrowsCounterClockwiseBold, PiShoppingCartFill} from 'react-icons/pi';

function Card(item) {
//   const { title, excerpt, imageUrl, price} = props;
  return (
    <>
    {item.map((val) => ( 
<div key={val.id} className='card w-[370px] h-[465px] relative'>
<button className='Category px-8 py-2 bg-[#262626] text-white font-bold absolute top-5 left-7'>New</button>
<img src={val.img} alt="" />
<div className='flex justify-between mt-5 mb-4 ml-1'>
<h5 className='font-bold text-xl'>{val.title}</h5>
  <p className='text-[#767676] text-base flex items-center'>{val.price}</p>
</div>
<p className='text-[#767676] text-base'>{val.excerpt}</p>
<div className="w-[370px] h-[156px] opacity-0 duration-500 bg-transparent absolute bottom-[17px] -translate-y-1/2 hover:bg-white hover:opacity-100">
    <p className="flex justify-end items-center gap-x-4 mr-8 mt-6 text-base text-[#767676]">Add to Wish List <span className="text-[#262626]"><AiFillHeart/></span></p>
    <p className="flex justify-end items-center gap-x-4 mr-8 mt-5 text-base text-[#767676]">Compare <span className="text-[#262626]"><PiArrowsCounterClockwiseBold/></span></p>
    <p className="flex justify-end items-center gap-x-4 mr-8 mt-5 text-base font-bold">Add to Cart <span className="text-[#262626]"><PiShoppingCartFill/></span></p>
</div>
</div>
   ))}
</>
  );
}

export default Card;