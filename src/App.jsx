import "./App.css"
import Home from "./Pages/home"
import Contact from "./Pages/contact"
import About from "./Pages/about"
import Products from "./Pages/products"
import Details from './Pages/details';
import Signup from './Pages/signup';
import Login from "./Pages/login"
import MyAccount from './Pages/myaccount';


import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAuth } from "firebase/auth"

function App() {
  const [userName , setUserName] = useState("");
  useEffect(()=>{
    getAuth().onAuthStateChanged((user)=>{
      if (user) {
        setUserName(user.displayName);
      } else { setUserName('') }
    })
  },[])
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home name={userName}/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contacts" element={<Contact/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:pid" element={<Details />}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/myaccount" element={<MyAccount/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
