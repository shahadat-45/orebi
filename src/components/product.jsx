import React from "react";
import { AiFillHeart } from 'react-icons/ai';
import { PiArrowsCounterClockwiseBold, PiShoppingCartFill} from 'react-icons/pi';
import Image from "./layer/picture";
import { Link } from "react-router-dom";
import { increment } from "./addToCard";
import { useSelector, useDispatch } from 'react-redux';



function Product(props) {

  const { title, excerpt, imageUrl, price, label, allInfoCard, to} = props;
  let previousData = useSelector((pvsData)=>pvsData.myCard.card);
  let dispatch = useDispatch();

  const handleAddToCard = ()=>{
    if (previousData.find((el)=> el.id == allInfoCard.id)) {
      let arr = previousData.map((el)=>{
        if (el.id === allInfoCard.id) {
          return {
            ...el,
            count: el.count + 1,
          };
        }
        return el;
      });
      dispatch(increment(arr));
    }
    else{
      dispatch(
        increment({
          ...allInfoCard,
          count: 1,
        })
      );
    }
  }
  return (
    <>
      <div className='card w-[370px] h-[465px] '>
        <div className="img group relative">
        <Image src={imageUrl} alt="" bclass="h-[370px] object-fill w-full"/> 
        <div className="w-[370px] invisible md:h-[156px] duration-300 bg-white absolute top-full -z-10 group-hover:-translate-y-full group-hover:z-10 group-hover:visible">
            <p className="flex justify-end items-center gap-x-4 mr-8 md:mt-6 mt-5 text-base text-[#767676] hover:font-bold hover:text-black hover:cursor-pointer ">Add to Wish List <span className="text-[#262626]"><AiFillHeart/></span></p>
            <p className="flex justify-end items-center gap-x-4 mr-8 md:mt-5 mt-4 text-base text-[#767676] hover:font-bold hover:text-black hover:cursor-pointer ">Compare <span className="text-[#262626]"><PiArrowsCounterClockwiseBold/></span></p>
            <p onClick={handleAddToCard} className="flex justify-end items-center gap-x-4 mr-8 md:mt-5 mt-4 mb-4 md:mb-0 text-base text-[#767676] hover:font-bold hover:text-black hover:cursor-pointer ">Add to Cart <span className="text-[#262626]"><PiShoppingCartFill/></span></p>
        </div>
        <button className='Category md:px-8 px-4 md:py-2 py-1 bg-[#262626] text-white font-bold absolute md:top-5 top-4 md:left-7 left-2'>{label} </button>
        </div>
      <div className='flex justify-between mt-5 mb-4 ml-1'>
        <Link to={to}>
          <h5 className='font-bold text-xl ml-2 md:ml-0'>{title}</h5>
        </Link>
        <p className='text-[#767676] text-base flex items-center mr-2 md:mr-0'>{price}</p>
      </div>
      <p className='text-[#767676] text-base ml-3 md:ml-0'>{excerpt}</p>
      </div>
</>
  );
}

export default Product;