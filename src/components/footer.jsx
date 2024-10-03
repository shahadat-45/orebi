import React from 'react'
import List from './layer/list'
import ListItem from './layer/listItem'
import Image from './layer/picture'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


function footer() {
  return (
    <div className='max-w-[1920px] bg-[#F5F5F3] h-auto'>
      <div className="max-[1536px]:container max-w-container mx-auto relative 2xl:static flex flex-wrap xl:flex-row lg:flex-nowrap justify-around lg:pt-14">
      <div className='2xl:mr-36 xl:mr-28 lg:mr-20 md:ml-0 xl:ml-5 mt-8 lg:mt-0 order-3 md:order-1'>
            <h5 className='text-[#262626] font-bold text-base mb-4'>MENU</h5>
            <List className='flex-col gap-y-1.5'>
              <ListItem to='/' listInnerItem='Home'/>
              <ListItem to='/products' listInnerItem='Shop'/>
              <ListItem to='/about' listInnerItem='About'/>
              <ListItem to='/contacts' listInnerItem='Contacts'/>
              <ListItem listInnerItem='Journal'/>
            </List>
        </div>
        <div className='2xl:mr-36 xl:mr-28 lg:mr-20 md:ml-0 mt-8 lg:mt-0 order-4 md:order-2'>
        <h5 className='text-[#262626] font-bold text-base mb-4'>SHOP</h5>
            <List className='flex-col gap-y-1.5'>
              <ListItem listInnerItem='Category 1'/>
              <ListItem listInnerItem='Category 2'/>
              <ListItem listInnerItem='Category 3'/>
              <ListItem listInnerItem='Category 4'/>
              <ListItem listInnerItem='Category 5'/>
            </List>
        </div>
        <div className='2xl:mr-36 xl:mr-28 lg:mr-20 md:ml-0 mt-8 lg:mt-0 order-5 md:order-3'>
        <h5 className='text-[#262626] font-bold text-base mb-4'>HELP</h5>
            <List className='flex-col gap-y-1.5'>
              <ListItem listInnerItem='Privacy Policy'/>
              <ListItem listInnerItem='Terms & Conditions'/>
              <ListItem listInnerItem='Special E-shop'/>
              <ListItem listInnerItem='Shipping'/>
              <ListItem listInnerItem='Secure Payments'/>
            </List>
        </div>
        <div className='2xl:mr-64 xl:mr-28 md:ml-0 mt-4 lg-mt-0 order-2 md:order-4 absolute lg:static left-2 md:left-auto md:right-5 md:top-16 top-12 lg:top-28'>
            <h5 className='text-[#262626] text-base font-bold leading-7'>(052) 611-5711</h5>
            <h5 className='text-[#262626] text-base font-bold mb-4'>company@domain.com</h5>
            <p className='text-[#6D6D6D] leading-4'>575 Crescent Ave. Quakertown, PA 18951</p>
        </div>
        <div className='order-1 mt-8 lg:mt-0 ml-2 md:ml-0 md:order-5 w-full md:w-auto md:mr-52 lg:mr-5 mb-24 md:mb-0'>
            <Image src='../public/image/Logo.png' bclass='lg:w-[120px] w-20'/>
        </div>
      </div>
        <div className='container md:w-auto lg:mt-16 mt-12 pb-4 md:pb-8 lg:pb-12 xl:pb-14 flex justify-between mx-auto'>
          <div className="icon flex gap-x-4">
            <a href="https://www.facebook.com/mdshahadat45" target='_blank'><FaFacebookF/></a>
            <a href=""><FaLinkedinIn/></a>
            <a href=""><FaInstagram/></a>            
          </div>
          <div className=""><p className='text-[#6D6D6D] ml-4 lg:ml-0'>2020 Orebi Minimal eCommerce Figma Template by Adveits </p></div>
        </div>
    </div>
  )
}

export default footer