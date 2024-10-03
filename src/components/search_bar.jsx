import React, { Component } from 'react'
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { BiSearchAlt2, BiSolidUser, BiCaretDown, BiCaretUp } from "react-icons/bi";
import { PiShoppingCartFill} from "react-icons/pi";
import { GiCrossedBones } from 'react-icons/gi'
import List from './layer/list';
import ListItem from './layer/listItem';
import Subcategory from './layer/sub_categories';
import Cart_popup from './layer/cart_popup';

class search_bar extends Component {
  constructor(props) {
    super(props);
    this.state = { user: false,  clicked: false};
  }
  Cat_btn = ()=>{
    this.setState({clicked: !this.state.clicked})
  };
  user_btn = ()=>{
    this.setState({user: !this.state.user})
  };
  cart_btn = ()=>{
    let cart_popup = document.querySelector('.cart_popup');
    cart_popup.classList.toggle('show');
  };
  render(){
  return (
    <div className="search_bar max-w-[1920px] bg-[#F5F5F3] block border-b border-[#D8D8D8]">
    <div className="min-[1920px]:max-w-container container mx-auto h-20 flex flex-wrap justify-between">
      <div className='flex items-center gap-x-3 relative order-2 sm:order-1'>

        {/* .............category section................ */}

    <div className='categorie_btn flex gap-x-3 ml-1 2xl:ml-5 xl:ml-0 items-center cursor-pointer' onClick={this.Cat_btn}>
      {this.state.clicked ? <GiCrossedBones size='18px'/> : <RiBarChartHorizontalFill size='20px'/>}
        <p className='text-[#262626] font-sans'>Shop by Category</p>
    </div>
      <div id={this.state.clicked ? 'popup' : ''} className="Categories_menu bg-[#262626] md:h-[300px] h-screen -left-72 md:left-0 invisible transition-all duration-500 md:transition-none md:w-[263px] w-44 absolute sm:top-[100px] top-10 z-10">
          <List className='text-[#ffffffb3] flex-col'>
                <ListItem className='group w-full h-[50px] border-b border-[#2D2D2D] ' active='py-4 hover:text-white hover:font-bold relative pl-5 hover:pl-8 inline-block' listInnerItem='Accesories'>
                  <Subcategory className='group-hover:visible transition-all group-hover:opacity-100 opacity-0 invisible absolute left-full top-0'/>
                </ListItem>
                <ListItem className='group w-full h-[50px] border-b border-[#2D2D2D] ' active='py-4 hover:text-white hover:font-bold relative pl-5 hover:pl-8 inline-block' listInnerItem='Furniture'>
                  <Subcategory className='group-hover:visible transition-all group-hover:opacity-100 opacity-0 invisible absolute left-full top-0'/>
                </ListItem>
                <ListItem className='group w-full h-[50px] border-b border-[#2D2D2D] ' active='py-4 hover:text-white hover:font-bold relative pl-5 hover:pl-8 inline-block' listInnerItem='Electronics'>
                  <Subcategory className='group-hover:visible transition-all group-hover:opacity-100 opacity-0 invisible absolute left-full top-0'/>
                </ListItem>
                <ListItem className='group w-full h-[50px] border-b border-[#2D2D2D] ' active='py-4 hover:text-white hover:font-bold relative pl-5 hover:pl-8 inline-block' listInnerItem='Clothes'>
                  <Subcategory className='group-hover:visible transition-all group-hover:opacity-100 opacity-0 invisible absolute left-full top-0'/>
                </ListItem>
                <ListItem className='group w-full h-[50px] border-b border-[#2D2D2D] ' active='py-4 hover:text-white hover:font-bold relative pl-5 hover:pl-8 inline-block' listInnerItem='Bags'>
                  <Subcategory className='group-hover:visible transition-all group-hover:opacity-100 opacity-0 invisible absolute left-full top-0'/>
                </ListItem>
                <ListItem className='group w-full h-[50px] border-b border-[#2D2D2D] ' active='py-4 hover:text-white hover:font-bold relative pl-5 hover:pl-8 inline-block' listInnerItem='Home appliances'>
                  <Subcategory className='group-hover:visible transition-all group-hover:opacity-100 opacity-0 invisible absolute left-full top-0'/>
                </ListItem>                
          </List>
        </div>
      </div>

      {/* .............Search bar section................ */}

      <div className='relative md:my-auto mx-auto m-auto order-1 sm:order-2'>
        <input type="text" placeholder='Search Products' className='h-12 md:w-[460px] lg:w-[600px] w-[350px] outline-none placeholder:pl-5 placeholder:text-[#C4C4C4] border md:border-none border-slate-400'/>
        <button className='absolute right-[17px] top-[17px]'><BiSearchAlt2 size='18px'/></button>
      </div>
      
      {/* .............User logIn section................ */}

      <div className='flex md:gap-x-10 lg:gap-x-5 xl:gap-x-10 gap-x-4 items-center order-3'>
        <div className="relative">
        <div className='flex md:gap-x-2 gap-x-1 user cursor-pointer' onClick={this.user_btn}>
      <BiSolidUser size='18px'/>
      {this.state.user ? <BiCaretUp size='18px'/> : <BiCaretDown size='18px'/>}      
        </div>
        <div id={this.state.user ? 'show' : ''} className="log_in absolute border md:border-[#F0F0F0] border-stone-200 invisible w-[200px] top-8 right-0 z-10">
            <List className='flex-col'>
                <ListItem to='/myaccount' className='text-center hover:bg-[#2B2B2B] bg-white py-4 hover:font-bold hover:text-white text-[#262626]' listInnerItem='My Account'/>
                <ListItem to='/signup' className='text-center hover:bg-[#2B2B2B] bg-white py-4 hover:font-bold hover:text-white text-[#262626]' listInnerItem='Log Out'/>
            </List>
        </div>
        </div>

        {/* .............cart_popup section................ */}

        <div className="relative mr-3 lg:mr-5 xl:mr-0" onClick={this.cart_btn}>
        <PiShoppingCartFill size='18px' className='cart cursor-pointer' />
        <div className="absolute md:top-7 top-9 md:right-0 -right-[5px] z-10 invisible cart_popup border border-slate-200">
          <Cart_popup/>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}
}
export default search_bar