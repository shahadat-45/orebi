import React from 'react'
import { Link } from 'react-router-dom';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';

function cart_popup() {

    const cart = useSelector((state)=>state.myCard.card);

  return (
    <div>
        {cart.map((item , index)=>(
            <div key={index} className="w-[360px] h-[120px] bg-[#F5F5F3]">
                <div className="flex gap-x-5 items-center p-5">
                    <img src={item.thumbnail} alt={item.title} className='w-20'/>
                    <div className=" flex flex-col justify-center text-[#262626] font-bold">
                        <Link>{item.title}</Link>
                        <p className='pt-3'>${item.price}</p>
                    </div>
                    <ImCross className='right-5 absolute' size='10px'/>
                </div>
            </div>
        ))}
        <div className="w-[360px] h-[120px] bg-white">
            <div className=" pt-3 pl-5">
            <p className='text-[#767676] text-base mb-3'>Subtotal: <span className='text-[#262626] text-base font-bold'>$44.00</span></p>
                <div className="flex gap-x-5">
                    <button className='border border-black py-4 px-[38px] font-bold hover:bg-[#262626] hover:text-white'>View Cart</button>
                    <button className='border border-black py-4 px-[38px] font-bold hover:bg-[#262626] hover:text-white'>Checkout</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default cart_popup