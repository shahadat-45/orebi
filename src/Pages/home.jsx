import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import Navbar from "../components/navbar"
import Product from "../components/product"
import Footer from '../components/footer'
import Search_bar from '../components/search_bar'
import Banner from '../components/layer/banner'
import { FaTruck, FaLongArrowAltRight, FaLongArrowAltLeft} from "react-icons/fa";
import {PiNumberTwoBold, PiArrowCounterClockwiseBold} from "react-icons/pi";
import Image from './../components/layer/picture';
import axios from "axios";

function SampleNextArrow({onClick}) {
  return (
    <div className='absolute md:top-[152px] top-40 md:p-6 p-3 bg-[#00000033] 2xl:-right-2 -right-6 -translate-x-1/2 rounded-full' onClick={onClick}>
        <FaLongArrowAltRight size='30px' color="white"/> 
      </div>
  );
};

function SamplePrevArrow({onClick}) {
  return (
    <div className='absolute md:top-[152px] top-40 md:p-6 p-3 bg-[#00000033] left-0 rounded-full z-10' onClick={onClick}>
        <FaLongArrowAltLeft size='30px' color="white"/>    
      </div>
  );
}

function home(props) {

  const settings = {
    dots: false,
    // arrow: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1536,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
// const [fetchCount, setFetchCount] = useState(1);
  const [currentFetch, setCurrentFetch] = useState([]);
  useEffect(()=>{
    const HandleFetchApi = async () => {
      axios.get('https://dummyjson.com/products').then((response) => {
        setCurrentFetch(response.data.products) ;
      })
    };
    HandleFetchApi();
  }, [])
  return (
    <div className='homepage min-h-screen'>
      
        <p>{props.name ? props.name : ''}</p>        

  <Navbar/>
  <Search_bar/>
    {/* .........Banner Part .........*/}
    <Banner/>
      {/*........ Service Icon Part ........*/}
  <div className="3icon border-b-[0.5px] border-black-50">
    <div className="max-[1536px]:container max-w-container mx-auto flex justify-between items-center h-20">
      <div className='md:flex md:gap-x-4 text-center md:items-center'>
        <PiNumberTwoBold size='20px' className="mx-auto md:mx-0"/><p className='text-[#6D6D6D] text-sm md:w-[180px] w-[100px] md:text-base'>Two years warranty</p>
      </div>
      <div className='md:flex md:gap-x-4 text-center md:items-center'>
      <FaTruck size='20px' className="mx-auto md:mx-0"/> <p className='text-[#6D6D6D] text-sm md:w-[180px] w-[100px] md:text-base'>Free shipping</p>
      </div>
      <div className='md:flex md:gap-x-4 text-center md:items-center'>
        <PiArrowCounterClockwiseBold size='20px' className="mx-auto md:mx-0"/><p className='text-[#6D6D6D] text-sm md:w-[180px] w-[100px] md:text-base'>Return policy in 30 days</p>
      </div>
    </div>
    </div>

      {/* ........ Ads part .......*/}

    <div className="ads max-[1536px]:container max-w-container mx-auto 2xl:mb-52 md:mb-0 md:mt-20 2xl:mt-36 mt-8 md:h-auto flex flex-col md:flex-row bg-white">
      <div className="right md:w-[780px] w-auto md:mr-2.5 2xl:mr-5 relative">
        <img src="../public/image/Phones_Sale.png" alt="" className="object-cover"/>
        <div className="absolute md:bottom-3 2xl:bottom-[72px] bottom-8 sm:bottom-14 md:ml-10 2xl:ml-16 ml-6">
          <h3 className='font-bold 2xl:text-4xl sm:text-3xl text-xl 2xl:mb-9 md:mb-2 mb-2'>Phones Sale</h3>
          <p className='sm:text-base text-sm text-[#262626b3] flex items-center 2xl:mb-12 md:mb-4 mb-3'>Up to <span className='md:text-3xl 2xl:text-[40px] text-xl text-[#262626] font-bold mx-1.5 my-auto '>30%</span>sale for all phones!</p>
          <button className='md:py-2 md:px-8 2xl:py-4 2xl:px-14 py-2 px-5 bg-[#262626] text-white font-bold'>Shop Now</button>
        </div>
      </div>
      <div className="left md:w-[780px] w-auto bg-white md:ml-2.5 2xl:ml-5">
      <div className="up 2xl:h-auto mt-5 md:mt-0 2xl:mb-5 md:mb-0 relative">
      <img src="../public/image/Electronics_Sale.png" alt="" className=''/>
        <div className="absolute 2xl:ml-14 md:ml-6 ml-6 bottom-4 sm:bottom-8 2xl:bottom-16 md:bottom-3">
          <h3 className='font-bold 2xl:text-4xl sm:text-3xl text-xl 2xl:mb-9 md:mb-2 mb-2'>Electronics Sale</h3>
          <p className='sm:text-base text-sm text-[#262626b3] flex items-center 2xl:mb-12 md:mb-4 mb-3'>Up to <span className='md:text-3xl 2xl:text-[40px] text-xl text-[#262626] font-bold mx-1.5 my-auto'>70%</span>sale for all electronics!</p>
          <button className='md:py-2 md:px-8 2xl:py-4 2xl:px-14 py-2 px-5 bg-[#262626] text-white font-bold'>Shop Now</button>
        </div>
      </div>
      <div className="down 2xl:h-auto mt-5 md:mt-0 2xl:mt-5 md:translate-y-5 relative">
      <img src="../public/image/Furniture_Offer.png" alt=""/>
        <div className="absolute 2xl:ml-14 md:ml-6 ml-6 bottom-4 sm:bottom-8 2xl:bottom-16 md:bottom-3">
          <h3 className='font-bold 2xl:text-4xl sm:text-3xl text-xl 2xl:mb-9 md:mb-2 mb-2'>Furniture Offer</h3>
          <p className='sm:text-base text-sm text-[#262626b3] flex items-center 2xl:mb-12 md:mb-4 mb-3'>Up to <span className='md:text-3xl 2xl:text-[40px] text-xl text-[#262626] font-bold mx-1.5 my-auto'>50%</span>sale for all furniture items!</p>
          <button className='md:py-2 md:px-8 2xl:py-4 2xl:px-14 py-2 px-5 bg-[#262626] text-white font-bold'>Shop Now</button>
        </div>
      </div>
      </div>
    </div>

      {/* .... Arrivals slider part ..... */}

<div className="mx-auto 2xl:mt-32 md:mt-20 mt-10 2xl:mb-28 mb-14 max-[1536px]:container max-w-container relative">
      <h2 className='md:text-[39px] text-2xl font-bold text-[#262626] md:mb-12 mb-2'>New Arrivals</h2>
      <Slider {...settings}>
        {currentFetch.slice(0 , 30).map((project, index) => (
          <div className="py-2 mx-auto" key={index}>
              <Product
                allInfoCard={project}
                to={`/products/${project.id}`}
                title={project.title}
                excerpt={project.category}
                imageUrl={project.thumbnail}
                price={'$' + project.price}
                label={project.discountPercentage + ' %'}
              />  
          </div>
        ))}
      </Slider>
  </div>  
          {/* .... Our Bestsellers Product part ..... */}

    <div className="bestseller max-[1536px]:container max-w-container mx-auto 2xl:mb-32 mb-20">
      <h2 className='text-[39px] font-bold text-[#262626] mb-12'>Our Bestsellers</h2> 
        <div className="flex flex-wrap gap-x-10">
        {currentFetch.slice(8 , 12).map((project, index) => (
          <div className="" key={index} >
              <Product
                allInfoCard={project}
                to={`/products/${project.id}`}
                title={project.title}
                excerpt={project.category}
                imageUrl={project.thumbnail}
                price={'$' + project.price}
                label={project.discountPercentage + ' %'}
              />            
          </div>
        ))}
        </div>    
    </div> 

      {/* .... Clock image part .....*/}

    <div className="max-[1536px]:container max-w-container mx-auto h-[370px] bg-[#F3F3F3] xl:mb-32 mb-16 flex gap-x-12">
      <div className='hidden lg:block'>
        <Image src='../public/image/Phone_of_the_year.png'/>
      </div>
      <div className="mt-16 mx-auto lg:mx-0 bg-[url('../public/image/Phone_of_the_year.png')] lg:bg-none bg-cover bg-center">      
        <h3 className='text-[#262626] text-4xl font-bold mb-10'>Phone of the year</h3>
        <p className='font-base text-[#262626] lg:w-[511px] w-80 mb-12'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
        <button className='py-4 px-14 bg-[#262626] text-white font-bold'>Shop Now</button>
      </div>
    </div>
            {/* .... Special Offers part ..... */}
      
  <div className="max-[1536px]:container max-w-container mx-auto mb-[140px]">
    <h2 className='2xl:text-[39px] text-3xl font-bold text-[#262626] xl:mb-12 mb-6 md:mb-8'>Special Offers</h2> 
    <div className="flex flex-wrap gap-x-10">
        {currentFetch.slice(22 , 26).map((project, index) => (
          <div className="" key={index} >
              <Product
                allInfoCard={project}
                to={`/products/${project.id}`}
                title={project.title}
                excerpt={project.category}
                imageUrl={project.thumbnail}
                price={'$' + project.price}
                label={project.discountPercentage + ' %'}
              />
          </div>
        ))}
    </div>    
  </div>    {/* .... At the lest Footer part ..... */}

    <Footer/>
</div>
  )
}


export default home