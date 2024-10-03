import React, { useState } from 'react'
import {RiArrowRightSLine} from 'react-icons/ri'
import Navbar from './../components/navbar';
import Search_bar from './../components/search_bar';
import Footer from './../components/footer';

const myaccount = () => {
  const [value , setValue] = useState(1);
  return (
    <>
    <Navbar/>
    <Search_bar/>
    <section className='title container mx-auto mb-32'>
        <h2 className='font-bold text-5xl text-[#262626] mt-[124px] mb-3 first-letter:uppercase'>My Account</h2>
        <p className=' text-[#767676] text-xs flex items-center'>Home <RiArrowRightSLine/> <span className='first-letter:uppercase'>My Account</span> </p>
    </section>
    <div className="container mb-36">
      <div className='flex gap-x-10'>
          <ul className='text-base text-[#767676]'>
              <li onClick={()=>setValue(1)} className={` ${value == 1 ? 'font-bold text-[#262626]' : 'text-[#767676]'} mb-5 cursor-pointer`}>Dashboard</li>
              <li className='bg-[#F0F0F0] h-[1px] w-[233px]'></li>
              <li onClick={()=>setValue(2)} id='list' className={` ${value == 2 ? 'font-bold text-[#262626]' : 'text-[#767676]'} my-5 cursor-pointer`}>Others</li>
              <li className='bg-[#F0F0F0] h-[1px] w-[233px]'></li>
              <li onClick={()=>setValue(3)} id='list' className={` ${value == 3 ? 'font-bold text-[#262626]' : 'text-[#767676]'} my-5 cursor-pointer`}>Donwloads</li>
              <li className='bg-[#F0F0F0] h-[1px] w-[233px]'></li>
              <li onClick={()=>setValue(4)} id='list' className={` ${value == 4 ? 'font-bold text-[#262626]' : 'text-[#767676]'} my-5 cursor-pointer`}>Addresses</li>
              <li className='bg-[#F0F0F0] h-[1px] w-[233px]'></li>
              <li onClick={()=>setValue(5)} id='list' className={` ${value == 5 ? 'font-bold text-[#262626]' : 'text-[#767676]'} my-5 cursor-pointer`}>Account details</li>
              <li className='bg-[#F0F0F0] h-[1px] w-[233px]'></li>
              <li onClick={()=>setValue(6)} id='list' className={` ${value == 6 ? 'font-bold text-[#262626]' : 'text-[#767676]'} my-5 cursor-pointer`}>Logout</li>
              <li className='bg-[#F0F0F0] h-[1px] w-[233px]'></li>
          </ul>
          {value == 1 && (
            <div className='dashboard text-base leading-8 text-[#767676]'>
              <p>Hello <span className='text-[#262626] font-medium'>admin</span> (not <span className='text-[#262626] font-medium'>admin</span>? <span className='text-[#262626] font-medium'>Log out</span>)</p>
              <p className='max-w-[918px]'>From your account dashboard you can view your <span className='text-[#262626] font-medium'>recent orders</span>, manage your <span className='text-[#262626] font-medium'>shipping and billing addresses</span>, and <span className='text-[#262626] font-medium'>edit your password and account details</span>.</p>
          </div>
          )}
          {value == 2 && (
            <div className='dashboard text-base leading-8 text-[#767676]'>
              <p>This is (others? page)</p>
          </div>
          )}
          {value == 3 && (
            <div className='dashboard text-base leading-8 text-[#767676]'>
              <p>This is (download? page)</p>
          </div>
          )}
          
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default myaccount