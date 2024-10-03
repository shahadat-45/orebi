import React from 'react'
import Navbar from "../components/navbar"
import Search_bar from './../components/search_bar';
import Banner from './../components/layer/banner';
import Footer from './../components/footer';
import Bradcums from './../components/layer/bradcums';

function contact() {
  return (
    <div className='contact_page'>
      <Navbar />
      <Search_bar/>
      <Bradcums/>
      <div className='container'>
        <h2 className='text-[#262626] text-5xl font-bold font-sans'>Fill up a Form</h2>       
        <form action="#" method='POST' className='mt-[42px]'>
          <div className='mb-6'>
            <label htmlFor="" className='text-[#262626] text-base font-bold'>Name</label><br/>
            <input type="text" className='border-b border-[#D8D8D8] w-[779px] pt-2.5 pb-4' placeholder='Your name here'/>
          </div>
          <div className='mb-6'>
            <label htmlFor="" className='text-[#262626] text-base font-bold'>Email</label><br/>
            <input type="text" className='border-b border-[#D8D8D8] w-[779px] pt-2.5 pb-4' placeholder='Your email here'/>
          </div>
          <div className='mb-8'>
            <label htmlFor="" className='text-[#262626] text-base font-bold'>Message</label><br/>
            <textarea className='border-b border-[#D8D8D8] w-[779px] pt-2.5 pb-4' cols="30" rows="6" placeholder='Your message here'></textarea>
          </div>
          <div className='mb-6'>
            <button className='bg-[#262626] h-[50px] w-[200px] text-white font-bold'>Post</button>
          </div>
        </form>
        <iframe className='my-[140px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116811.98350692847!2d90.30888260327035!3d23.805278984163984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b7a55cd36f%3A0xfcc5b021faff43ea!2sCreative%20IT%20Institute!5e0!3m2!1sen!2sbd!4v1709038024653!5m2!1sen!2sbd" width="1600" height="572" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
      <Footer/>
    </div>
  )
}

export default contact