import React, { Component } from 'react'
import List from './layer/list.jsx'
import ListItem from './layer/listItem.jsx'
import Image from './layer/picture.jsx'
import { FaBars } from 'react-icons/fa'
import { GiCrossedBones } from 'react-icons/gi'

class navbar extends Component {
  state={clicked: false};
  smIcon = ()=>{
    this.setState({clicked: !this.state.clicked})
  }
  render(){
  return (
    <div className='navbar h-20 max-w-[1920px] bg-white px-2 border-b border-[#e7e6e6]'>
      <div className="min-[1920px]:max-w-container container h-20 md:mx-auto flex items-center relative">
        <Image aclass='w-auto h-4 my-auto 2xl:ml-5' src='../public/image/Logo.png' href='/'/>          
            <List id={this.state.clicked ? 'active' : ''} className="md:items-center flex-col md:flex-row md:flex md:justify-between fixed md:static top-20 right-[-250px] h-screen md:h-auto w-[250px] md:w-auto bg-[#2a3239] md:bg-transparent pt-10 pl-5 md:pt-0 md:pl-0 mx-auto gap-x-10 text-[#767676] transition-all ease-in-out duration-300 z-10 md:z-0">
              <ListItem to='/' active={(window.location.pathname == "/" ?" md:text-black font-bold border-b-2 md:border-none border-lime-600" : "")} className='mb-6 md:mb-0 text-white md:text-inherit hover:border-b-2 md:hover:border-none hover:border-b-lime-600 w-fit' listInnerItem='Home'/>
              <ListItem to='/products' active={(window.location.pathname == "/products" ?" md:text-black font-bold border-b-2 md:border-none border-lime-600" : "")} className='mb-6 md:mb-0 text-white md:text-inherit hover:border-b-2 md:hover:border-none hover:border-b-lime-600 w-fit' listInnerItem='Shop'/>
              <ListItem to='/about' active={(window.location.pathname == "/about" ?" md:text-black font-bold border-b-2 md:border-none border-lime-600" : "")} className='mb-6 md:mb-0 text-white md:text-inherit hover:border-b-2 md:hover:border-none hover:border-b-lime-600 w-fit' listInnerItem='About'/>
              <ListItem to='/contacts' active={(window.location.pathname == "/contacts" ?" md:text-black font-bold border-b-2 md:border-none border-lime-600" : "")} className='mb-6 md:mb-0 text-white md:text-inherit hover:border-b-2 md:hover:border-none hover:border-b-lime-600 w-fit' listInnerItem='Contacts'/>
              <ListItem to='/' active={(window.location.pathname == "/shop" ?" md:text-black font-bold border-b-2 md:border-none border-lime-600" : "")} className='mb-6 md:mb-0 text-white md:text-inherit hover:border-b-2 md:hover:border-none hover:border-b-lime-600 w-fit' listInnerItem='Journal'/>
           </List>
           <div className="absolute right-0 md:hidden" onClick={this.smIcon}>
            {this.state.clicked ? <GiCrossedBones/>: <FaBars/>}
           </div>
      </div>
    </div>
  )
}
}
export default navbar