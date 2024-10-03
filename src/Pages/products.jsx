import React, { Component, useState } from 'react'
import Navbar from '../components/navbar'
import Search_bar from '../components/search_bar'
import Footer from '../components/footer'
import {BiSolidGridAlt} from 'react-icons/bi'
import {FaBars} from 'react-icons/fa'
import Aside from './../components/layer/aside';
import Bradcums from './../components/layer/bradcums';
import Pagination from '../components/layer/pagination'

class products extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false, items: 12};
      }
      icon_btn = ()=>{
        this.setState({clicked: !this.state.clicked})
      };  
      icon_btn2 = ()=>{
        this.setState({clicked: !this.state.clicked})
      };
      productPerPage = (e)=> {
        let item = Math.ceil(e.target.value)
        this.setState({items: item})
      }
  render(){   
  return (
    <>
    <Navbar/>
    <Search_bar/>
    <Bradcums/>
    <main className='flex gap-x-10 max-w-container mx-auto mb-36'>
    <Aside/>
      <div className=''>
        <div className="filter-2 w-[1190px] flex justify-between mb-[60px]">
            <div className="icon flex gap-x-5">
                <div className='p-2 icon_active border border-[F0F0F0]' id={this.state.clicked ? '' : 'icon_active' } onClick={this.icon_btn2}>
                <BiSolidGridAlt size='20px' color={this.state.clicked ? '#737373' : 'white' }/>
                </div>
                <div className='p-2 border border-[#F0F0F0] z-10' id={this.state.clicked ? 'icon_active' : '' } onClick={this.icon_btn}>
                <FaBars size='20px' color={this.state.clicked ? 'white' : '#737373' } />
                </div>
            </div>
            <div className="dropdown flex gap-x-10 items-center">
                <div className="flex items-center gap-x-[14px]">
                    <label htmlFor="" className='text-base text-[#767676]'>Sort by:</label>
                <select name="" id="" className='w-[240px] h-9 outline-none text-base text-[#767676] border border-[#F0F0F0]'>
                    <option value="">Featured</option>
                    <option value="">Phone</option>
                    <option value="">Watch</option>
                </select>
                </div>
                <div className="flex items-center gap-x-[14px]">
                    <label htmlFor="" className='text-base text-[#767676]'>Show:</label>
                <select onChange={this.productPerPage} className='w-[140px] h-9 outline-none text-base text-[#767676] border border-[#F0F0F0]'>
                    <option value="12">12</option>
                    <option value="18">18</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                </select>
                </div>
                
            </div>
        </div>        
          <Pagination itemsPerPage={this.state.items}/> 
      </div>    
    </main>
    
    <Footer/>
    </>
  )
}
}
export default products