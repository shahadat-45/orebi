import React from "react";
import "./about.css"
import Navbar from "../components/navbar"
import Bradcums from './../components/layer/bradcums'
import Image from './../components/layer/picture';
import Footer from "../components/footer";

function about() {
  return (
    <>
      <Navbar />
      <Bradcums/>
      <div className="container">
        <div className="image flex gap-x-10 mb-32">
          <div className="img h-[776px] w-[780px] relative">
            <Image bclass='max-h-[776px] w-[780px] object-cover' src='../../public/image/Basic_Crew_Neck_Tee.png'/>
            <button className="h-[76px] w-[281px] bg-[#262626] text-white font-bold text-base absolute bottom-16 left-[250px]">Our Brands</button>
          </div>
          <div className="img h-[776px] w-[780px] relative">
            <Image bclass='max-h-[776px] w-[780px] object-cover' src='../../public/image/Special_Offers_08.png'/>
            <button className="h-[76px] w-[281px] bg-[#262626] text-white font-bold text-base absolute bottom-16 left-[250px]">Our Stores</button>
          </div>
        </div>
        <div className="description mb-[108px]">
          <h2 className="text-[#262626] font-normal text-[39px]">Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h2>
        </div>
        <div className="infotext flex gap-x-10 mb-32">
          <div className="vision">
            <h4 className="text-[25px] font-bold text-black mb-3">Our Vision</h4>
            <p className="text-base font-normal text-[#767676] leading-8 max-w-[506px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="vision">
            <h4 className="text-[25px] font-bold text-black mb-3">Our Story</h4>
            <p className="text-base font-normal text-[#767676] leading-8 max-w-[506px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an printer took a galley of type and scrambled it to make a type specimen book. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, quam impedit veniam vero minus laudantium est dignissimos quae quis fuga facilis.</p>
          </div>
          <div className="vision">
            <h4 className="text-[25px] font-bold text-black mb-3">Our Brands</h4>
            <p className="text-base font-normal text-[#767676] leading-8 max-w-[506px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book consequuntur pariatur blanditiis ex ducimus consectetur magni accusamus illo reprehenderit? Aliquid unde .</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default about