import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import Navbar from './../components/navbar';
import Search_bar from './../components/search_bar';
import Bradcums from './../components/layer/bradcums';
import Footer from './../components/footer';
import { useNavigate } from "react-router-dom";

const login = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    let [email , setEmail] = useState('');
    let [password , setPassword] = useState('');
    //errors
    let [emailerr , setEmailerr] = useState('');
    let [passerr , setPasserr] = useState('');

    const submit = ()=>{
        if (email && password) {
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                if (errorCode == 'auth/invalid-credential') {
                    setEmailerr('Email or Password is incorrect');
                    setEmail('');
                    setPassword('');
                    setPasserr('');
                }
            });
        }
        else{
            if (!email) {
                setEmailerr('Email filled is required');
            }
            if (!password) {
                setPasserr('Password filled is required');
            }
        }        
    }

  return (
    <>
        <Navbar/>
        <Search_bar/>
        <Bradcums/>
        <div className="container mb-[140px]">
            <p className='text-base text-[#767676] w-[644px] mb-[62px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
            </p>
            <div className='h-[1px] w-full bg-[#F0F0F0] mb-14'></div>
            <form className="form mb-[70px]">
                <h2 className='text-[39px] font-bold mb-10'>Returning Customer</h2>
                <div className="flex gap-x-10">
                    <div className="w-[507px] flex flex-col">
                        <label htmlFor="" className='text-base font-bold text-[#262626] mb-2.5'>Email address</label>
                        <input type="email" placeholder={emailerr ? emailerr : 'example@domain.com'} className={`mb-4 ${emailerr ? 'placeholder:text-red-500 placeholder:font-medium' : ''}`} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                        <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                    </div>
                    <div className="w-[507px] flex flex-col">
                        <label htmlFor="" className='text-base font-bold text-[#262626] mb-2.5'>Passwords</label>
                        <input type="password" placeholder={passerr ? passerr : '. . . . . . . . . . '} className={`mb-4 ${passerr ? 'placeholder:text-red-500 placeholder:font-medium' : 'placeholder:text-3xl'}`} onChange={(e)=>setPassword(e.target.value)} value={password}/>
                        <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                    </div>
                </div>
                <div className="mt-7">
                    <button type="button" onClick={submit} className='w-[200px] h-[50px] border border-[#262626] text-[#262626] hover:text-white hover:bg-[#262626] transition-all ease-in-out hover:text-base font-bold'>Log in</button>
                </div>
            </form>
            <div className='h-[1px] w-full bg-[#F0F0F0] mb-[58px]'></div>
            <div className="">
                <h2 className='text-[39px] font-bold mb-[38px]'>New Customer</h2>
                <p className='text-base text-[#767676] w-[644px] mb-[51px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
                </p>
                <button className='w-[200px] h-[50px] border border-[#262626] text-white bg-[#262626] font-bold'>Continue</button>
            </div>
        </div>
        <Footer/>
    
    </>
  )
}

export default login