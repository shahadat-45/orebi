import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Image from './picture';

function banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div>
            <ul className="m-0 absolute  md:left-12 2xl:left-40 left-1/2 md:top-1/2 top-full -translate-y-[150%] md:-translate-y-1/2 flex md:block"> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div className="md:pr-2.5 pr-2 sm:h-8 h-6 text-black border-white text-[0px] border-b-2 md:border-b-0 md:border-r-2 border-r-0">
            0{i + 1}
          </div>
        )
      };
  return (
<>
    <div>
        <Slider {...settings}>
          <div className="bg-red-100">
            <Image src='../public/image/banner01.png' bclass='w-full h-28 sm:h-48 md:h-60 lg:h-80 xl:h-[400px] 2xl:h-[478px] min-[1920px]:h-[597px] '/>
          </div>
          <div className="bg-blue-100">
          <Image src='../public/image/banner02.png' bclass='w-full h-28 sm:h-48 md:h-60 lg:h-80 xl:h-[400px] 2xl:h-[478px] min-[1920px]:h-[597px] '/>
          </div>
          <div className="bg-green-100">
          <Image src='../public/image/banner03.jpg' bclass='w-full h-28 sm:h-48 md:h-60 lg:h-80 xl:h-[400px] 2xl:h-[478px] min-[1920px]:h-[597px] object-cover'/>
          </div>
          <div className="bg-green-100">
          <Image src='../public/image/banner04.jpg' bclass='w-full h-28 sm:h-48 md:h-60 lg:h-80 xl:h-[400px] 2xl:h-[478px] min-[1920px]:h-[597px] '/>
          </div>
        </Slider>
      </div>
</>
  )
}

export default banner