import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './../components/navbar';
import Search_bar from './../components/search_bar';
import Bradcums from './../components/layer/bradcums';
import Footer from './../components/footer';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const signup = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    let [name , setName] = useState('');
    let [email , setEmail] = useState('');
    let [number , setNumber] = useState('');
    let [password , setPassword] = useState('');
    let [registered , setRegistered] = useState('');
    //errors
    let [emailerr , setEmailerr] = useState('');
    let [nameerr , setNameerr] = useState('');
    let [passerr , setPasserr] = useState('');
    let [passValidatingTest , setPassValidatingTest] = useState('');

    const submit = ()=>{
        if (name && email && password) {
            if (!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{3,})[ ]*$/i.test(email)) {
                setEmailerr('Invalid email format');
                setEmail('');
                // console.log('email error');
            }
            else{
                createUserWithEmailAndPassword(auth, email, password)
                .then(async(res) => {
                    // Signed up
                    const user = res.user;
                    setRegistered('registration complete');
                    setEmail('');
                    setName('');
                    setPassword('');
                    await updateProfile(user,{
                        displayName: name,
                    });
                    navigate('/login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                        if (errorCode == 'auth/email-already-in-use') {
                            setEmailerr('This email already in use')
                            setEmail('');
                        }
                        if (errorCode == 'auth/invalid-email') {
                            setEmailerr('Email filled is required')
                            setEmail('');
                        }
                });    
                // console.log('registered');                        
            }
        }
        else{
            if (!email) {
                setEmailerr('Email filled is required');
            }
            if (!name) {
                setNameerr('Name filled is required');
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
            {registered && (
                <h3>{registered}</h3>
                )}
            <div className='h-[1px] w-full bg-[#F0F0F0] mb-14'></div>
            <form className="form">
                <h2 className='text-[39px] font-bold mb-10 text-[#262626]'>Your Personal Details</h2>
                <div className="flex flex-col gap-y-6 mb-[70px]">
                    <div className="flex gap-x-10">
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>First Name</label>
                            <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder={nameerr ? nameerr : 'First Name'} className={`mb-4 ${nameerr ? 'placeholder:text-red-500 placeholder:font-medium' : ''}`} value={name}/>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Last Name</label>
                            <input type="text" placeholder='Last Name' className='mb-4'/>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                    </div>
                    <div className="flex gap-x-10">
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Email address</label>
                            <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder={emailerr ? emailerr : 'example@domain.com'} className={`mb-4 ${emailerr ? 'placeholder:text-red-500 placeholder:font-medium' : ''}`} value={email}/>
                            <div className='h-[1px] w-[full] bg-[#F0F0F0]'></div>
                        </div>
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Telephone</label>
                            <input onChange={(e)=>{setNumber(e.target.value)}} type="number"  placeholder='Your phone number' className='mb-4' value={number}/>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                <h2 className='text-[39px] font-bold mb-10 text-[#262626] mt-14'>New Customer</h2>
                <div className="flex flex-col gap-y-6 mb-[69px]">
                    <div className="flex gap-x-10">
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Address 1</label>
                            <input type="text" placeholder='4279 Zboncak Port Suite 6212' className='mb-4'/>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Address 2</label>
                            <input type="text" placeholder='--' className='mb-4'/>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                    </div>
                    <div className="flex gap-x-10">
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>City</label>
                            <input type="number" placeholder='Your city' className='mb-4'/>
                            <div className='h-[1px] w-[full] bg-[#F0F0F0]'></div>
                        </div>
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Post Code</label>
                            <input type="number" placeholder='05228' className='mb-4'/>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                    </div>
                    <div className="flex gap-x-10">
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Country</label>
                                <select className="mb-[18px] text-[#767676]">
                                    <option value="NA">Please select</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                </select>
                            <div className='h-[1px] w-[full] bg-[#F0F0F0]'></div>
                        </div>
                        <div className="w-[507px] flex flex-col">
                            <label className='text-base font-bold text-[#262626] mb-2.5'>Region/State</label>
                                <select className="mb-[18px] text-[#767676]">
                                    <option value="NA">Please select</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="India">India</option>
                                    <option value="Pakistan">Pakistan</option>
                                </select>
                            <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                        </div>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#F0F0F0] mb-[57px]'></div>
                <h2 className='text-[39px] font-bold mb-10 text-[#262626]'>Your Personal Details</h2>
                <div className="flex gap-x-10">
                    <div className="w-[507px] flex flex-col">
                        <label className='text-base font-bold text-[#262626] mb-2.5'>Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder={passerr ? passerr : 'password'} className={`mb-4 ${passerr ? 'placeholder:text-red-500 placeholder:font-medium' : ''}`} value={password}/>
                        {passValidatingTest && (
                        <p>{passValidatingTest}</p>
                        )}
                        <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                    </div>
                    <div className="w-[507px] flex flex-col">
                        <label className='text-base font-bold text-[#262626] mb-2.5'>Repeat Password</label>
                        <input type="password" placeholder='Repeat Password' className='mb-4'/>
                        <div className='h-[1px] w-full bg-[#F0F0F0]'></div>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-[#F0F0F0] mb-[65px] mt-[70px]'></div>
                <div className="gap-x-4 flex">
                    <input className="" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="text-[#767676]"> I have read and agree to the Privacy Policy </label>
                </div>
                <div className="mt-6 flex">
                    <h5 className='text-[#767676] mr-8'>Subscribe Newsletter</h5>
                    <div className="flex gap-x-4 mr-10">
                    <input type="checkbox" value="1"  name="check" id='flexCheckDefault1'/>
                    <label className="text-[#767676]"> Yes</label>
                    </div>
                    <div className="flex gap-x-4">
                    <input type="checkbox" value="0" name="check" id='flexCheckDefault2'/>
                    <label className="text-[#767676]"> No</label>
                    </div>
                </div>
                <div className="mt-7">
                    <button type='button' onClick={submit} className='w-[200px] h-[50px] border border-[#262626] text-white bg-[#262626] font-bold'>Log in</button>
                </div>
            </form>
        </div>
        <Footer/>
    </>
  )
}
export default signup