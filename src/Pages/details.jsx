import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './../components/navbar';
import Search_bar from '../components/search_bar';
import Footer from './../components/footer';
import {RiArrowRightSLine} from 'react-icons/ri'
import { FaPlus, FaStar, FaMinus } from "react-icons/fa";
import Image from './../components/layer/picture';


const details = (props) => {
    let {pid} = useParams();
    const [currentFetch, setCurrentFetch] = useState([]);
    let [image , setImage] = useState([]);
    let [features , setFeatures] = useState(false);
    let [shipping , setShipping] = useState(false);
    useEffect(()=>{
      const HandleFetchApi = async () => {
        axios.get(`https://dummyjson.com/products/${pid}`).then((response) => {
            setCurrentFetch(response.data);
            setImage(response.data.images);
        })
      };
      HandleFetchApi();
    }, [])
    let rate = document.getElementById('Ratings');
    let desp = document.getElementById('descripton');
    let desp_btn = document.getElementById('desp_btn');
    let review_btn = document.getElementById('review_btn');
    let description = () => {
        desp.classList.add('active' , 'show');
        rate.classList.remove('active' , 'show');
        if (desp_btn.classList.contains("text-[#767676]")) {
            desp_btn.classList.replace("text-[#767676]", "text-black");
            desp_btn.classList.add("font-bold");
            review_btn.classList.replace("text-black", "text-[#767676]");
            review_btn.classList.remove("font-bold");

        } 
    }
    let reviews = () => {
        rate.classList.add('active', 'show');
        desp.classList.remove('active' , 'show');
        if (review_btn.classList.contains("text-[#767676]")) {
            review_btn.classList.replace("text-[#767676]", "text-black");
            review_btn.classList.add("font-bold");
            desp_btn.classList.remove("font-bold");
            desp_btn.classList.replace("text-black" , "text-[#767676]");

        }
    }
  return (
    <>
        <Navbar/>
        <Search_bar/>
        <section className='title container mx-auto mb-32'>
            <p className=' text-[#767676] text-xs flex items-center'>Home <RiArrowRightSLine/> <span className='first-letter:uppercase'>{window.location.pathname.split('/')[1]}</span> </p>
        </section>
        <div className='container'>
            <div className='images h-[1600px] w-[1600px] flex flex-wrap gap-10'>
                { image.slice(0, 4).map((project, index) => (
                    <div key={index} className="h-[780px] w-[778px]">
                        <Image src={project} bclass='w-full object-cover max-h-[780px] '/>
                    </div>
                ))}
            </div>
            <div className="content mt-12 mb-7">
              <h2 className='mb-4 text-5xl font-bold text-[#262626]'>{currentFetch.title}</h2>
              <div className='flex gap-x-6 mb-5'>
                <div className="stars flex items-center">
                <FaStar color='#FFD881'/>
                <FaStar color='#FFD881'/>
                <FaStar color='#FFD881'/>
                <FaStar color='#FFD881'/>
                <FaStar color='#FFD881'/>
                </div>
                <p className='text-[#767676]'>1 Review</p>
              </div>
              <div className="price flex gap-x-6 items-center mb-6">
                <span className='text-[#767676] line-through'>${(currentFetch.price + (currentFetch.price / 100 * currentFetch.discountPercentage)).toFixed(2)}</span>
                <span className='text-2xl font-semibold'>${currentFetch.price}</span>
              </div>
              <div className='h-[1px] w-[780px] bg-[#F0F0F0]'></div>
            </div>
            <form className="inventory" method='POST' action='#'>
              <div className="color flex gap-x-[50px] items-center mb-7">
                <h4 className='text-base font-semibold'>COLOR:</h4>
                  <ul className='flex mt-2.5'>
                    <li className="color1 mb-2.5 h-9 w-9 bg-"><input id="a1" className='w-4 h-4' type="radio" name="color" value="30" />
                        <label className='bg-[#CDCDCD]' for="a1"></label>
                    </li>
                    <li className="color2 mb-2.5 h-9 w-9 bg-"><input id="a2" className='w-4 h-4' type="radio" name="color" value="30" />
                        <label className='bg-[#FF8686]' for="a2"></label>
                    </li>
                    <li className="color3 mb-2.5 h-9 w-9 bg-"><input id="a3" className='w-4 h-4' type="radio" name="color" value="30" />
                        <label className='bg-[#7ED321]' for="a3"></label>
                    </li>
                    <li className="color4 mb-2.5 h-9 w-9 bg-"><input id="a4" className='w-4 h-4' type="radio" name="color" value="30" />
                        <label className='bg-[#B6B6B6]' for="a4"></label>
                    </li>
                    <li className="color5 mb-2.5 h-9 w-9 bg-"><input id="a5" className='w-4 h-4' type="radio" name="color" value="30" />
                        <label className='bg-[#15CBA5]' for="a5"></label>
                    </li>
                </ul>
              </div>
              <div className="size flex gap-x-[76px] mb-7 items-center">
                <h4 className='text-base font-semibold'>SIZE:</h4>
                <select className="border h-9 min-w-[140px] text-base px-5" aria-label="Default select example">
                  <option selected >S</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div className="size flex gap-x-[29px] items-center mb-[30px]">
                <h4 className='text-base font-semibold'>QUANTITY:</h4>
                <div>
                  <input className='border h-9 w-[140px] text-base px-5 placeholder:text-[#767676]' type="number" placeholder='0'/>
                </div>
              </div>
              <div className='h-[1px] w-[780px] bg-[#F0F0F0] mb-5'></div>
              <div className="status flex items-center gap-x-7 mb-5">
                <h4 className='text-base font-semibold'>STATUS: </h4>
                <span className={`text-base ${currentFetch.stock == 0 ? 'text-red-600' : 'text-[#767676]'}`}>{currentFetch.stock == 0 ? 'Out of stock' : 'In stock'}</span>
              </div>
              <div className='h-[1px] w-[780px] bg-[#F0F0F0] mb-5'></div>
              <div className="button mb-5 flex gap-x-5 items-center">
                <button className='w-[200px] h-[50px] border border-[#262626] text-[#262626] font-bold'>Add to Wish List</button>
                <button className='w-[200px] h-[50px] border  bg-[#262626] text-white font-bold'>Add to Cart</button>
              </div>
              <div className='h-[1px] w-[780px] bg-[#F0F0F0] mb-5'></div>
            </form>
            <div className="details">
              <div onClick={()=>(setFeatures(!features))} className="features w-[780px] min-h-[48px] ">
                <h3 className='font-bold text-base text-[#262626] flex justify-between mb-6'>FEATURES & DETAILS <span>{features == true ? <FaMinus size='10px'/> : <FaPlus size='10px'/>}</span></h3>
                <p className={`text-[#767676] text-base w-[780px] mb-5 ${ features == true ? 'static0_2' : 'hidden' }`}>{currentFetch.description}</p>
              </div>
              <div className='h-[1px] w-[780px] bg-[#F0F0F0] mb-5'></div>
              <div onClick={()=>(setShipping(!shipping))} className="shipping-&-returns w-[780px] min-h-[48px] ">
                <h3 className='font-bold text-base text-[#262626] flex justify-between mb-6'>SHIPPING & RETURNS <span>{shipping == true ? <FaMinus size='10px'/> : <FaPlus size='10px'/>}</span></h3>
                <p className={`text-[#767676] text-base w-[780px] mb-5 ${ shipping == true ? 'static0_2' : 'hidden' }`}>{currentFetch.description}</p>
              </div>
              <div className='h-[1px] w-[780px] bg-[#F0F0F0] mb-5'></div>
              <div className='description text-[#767676] text-base w-[780px]'>
                <p>{currentFetch.description}</p>
              </div>
            </div>
            <div className='review_&_description mt-32' >
              <ul className="nav nav-mb-3 main-tab flex gap-x-16" id="tab" role="tablist">
                <li className="nav-item text-lg text-black font-bold " id='desp_btn' role="presentation">
                    <button onClick={description} className="nav-link active" id="descripton-tab" data-bs-toggle="pill" data-bs-target="#descripton" type="button" role="tab" aria-controls="descripton" aria-selected="true">Description</button>
                </li>
                <li className="nav-item text-lg text-[#767676]" id='review_btn' role="presentation">
                    <button onClick={reviews} className="nav-link" id="Ratings-tab" data-bs-toggle="pill" data-bs-target="#Ratings" type="button" role="tab" aria-controls="Ratings" aria-selected="false">Reviews(1)</button>
                </li>
                </ul>
                <div className="tab-content mt-10">
                    <div className="tab-pane fade active show mb-[100px]" id="descripton" role="tabpanel" aria-labelledby="descripton-tab">
                        <div className="Descriptions-item">
                            <p className='text-[#767676]'>Amet consectetur proin diam cras egestas augue habitant integer turpis
                                egestas egestas. A lectus proin suscipit viverra venenatis eget eget
                                libero scelerisque. Lacinia parturient id eu vel justo cursus eu. Libero
                                cursus nisl sollicitudin commodo magnis quam ultrices morbi. Et vitae
                                eget bibendum quam sed velit. Eget ornare urna nibh ullamcorper sed.
                                Habitant adipiscing dignissim aliquet laoreet ultrices etiam nulla sed
                                ut. Lectus ut vitae dignissim in cum id id velit egestas. Magna vel leo
                                hac massa at.

                                <br/> <br/> Urna fermentum id eget turpis eleifend id vitae. Mauris
                                malesuada ac arcu adipiscing etiam velit at tortor cras. Lacus eget
                                mollis gravida vulputate sed habitasse enim tempor ullamcorper. Dictum
                                enim quis morbi tincidunt. Nibh congue massa et arcu viverra lobortis.
                                Lectus ullamcorper id ut dictumst odio elit. Tristique dapibus diam
                                velit pharetra quisque odio. </p>
                            <div className="Description-table mt-5 text-[#767676] ml-5">
                                <ul className='list-disc	'>
                                    <li>While thus cackled sheepishly rigid after due one assenting</li>
                                    <li>Et vitae eget bibendum quam sed velit. Eget ornare urna nibh ullamcorper sed.</li>
                                    <li>Habitant adipiscing dignissim aliquet laoreet ultrices etiam nulla sed ut.</li>
                                    <li>Lacinia parturient id eu vel justo cursus eu.</li>
                                    <li>Mauris malesuada ac arcu adipiscing etiam velit at tortor cras.</li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade mb-[341px] " id="Ratings" role="tabpanel" aria-labelledby="Ratings-tab">
                        <h4 className='text-[#767676] mb-4'>1 review for Product</h4>
                        <div className='h-[1px] w-full bg-[#F0F0F0] mb-6'></div>
                        <div className="reviews mb-4">
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-x-[37px]'>
                                    <h3 className='text-[20px] font-medium'>John Ford</h3>
                                    <div className="stars flex items-center">
                                    <FaStar color='#FFD881' size='12px'/>
                                    <FaStar color='#FFD881' size='12px'/>
                                    <FaStar color='#FFD881' size='12px'/>
                                    <FaStar color='#FFD881' size='12px'/>
                                    <FaStar color='#FFD881' size='12px'/>
                                    </div>
                                </div>
                                <span className='text-[#767676] text-base'>6 months ago</span>
                            </div>
                            <p className='text-[#767676] text-base mt-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className='h-[1px] w-full bg-[#F0F0F0] mb-[53px]'></div>
                        <form className="review">
                            <h3 className='text-[#262626] text-lg font-bold mb-12'>Add a Review</h3>
                            <div className="mb-6 flex flex-col">
                                <label htmlFor="" className='text-[#262626] text-base font-bold mb-2.5'>Name</label>
                                <input type="text" className='w-[780px] outline-none' placeholder='Your name here'/>
                                <div className='h-[1px] w-[780px] bg-[#F0F0F0] mt-4'></div>
                            </div>
                            <div className="mb-6 flex flex-col">
                                <label htmlFor="" className='text-[#262626] text-base font-bold mb-2.5'>Email</label>
                                <input type="text" className='w-[780px] outline-none' placeholder='Your email here'/>
                                <div className='h-[1px] w-[780px] bg-[#F0F0F0] mt-4'></div>
                            </div>
                            <div className="mb-7 flex flex-col">
                                <label htmlFor="" className='text-[#262626] text-base font-bold mb-2.5'>Review</label>
                                <textarea className='w-[780px] outline-none' rows="4" placeholder='Your review here'></textarea>
                                <div className='h-[1px] w-[780px] bg-[#F0F0F0] mt-4'></div>
                            </div>
                            <div>
                                <button className='w-[200px] h-[50px] border  bg-[#262626] text-white font-bold'>Post</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
    </>
  )
}

export default details