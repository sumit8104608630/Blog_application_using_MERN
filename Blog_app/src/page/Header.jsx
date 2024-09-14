import React from 'react'
import "../index.css"
import { IoClose } from "react-icons/io5";
import { useState,useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { fetchUser } from '../app/actionFetch';
import { logout } from '../app/blog_app_redux';
function Header() {
   const [menu,setMenu]=useState(false);
   const dispatch=useDispatch()
   const {isLogIn, userInfo, isLoading }=useSelector((state)=>state.authenticate);
   useEffect( ()=>{
    dispatch(fetchUser())
    return () => {
      // Cleanup code (optional)
      console.log("Cleanup function called");
    };
  }, [isLogIn])
  console.log(isLogIn) 
  return (
    <>
    {
        isLoading ?
        <div><img className='w-1/2 md:1/2' src="https://i.gifer.com/ZNeT.gif" alt='GIF' /></div>:
    <div className='w-full z-1  md:flex md:justify-between  sticky top-0 bg-gray-500 shadow-lg shadow-gray-200/50 bg-white px-5 py-5 items-center'>
            <div className='flex justify-between'>
                <li className='list-none'>
                    <Link className='hover:text-orange-500' to="/"><img className='w-8' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8m_ChqQRj5dtA8S5qrHve4ZnwCKo5aoEUlg&s'></img></Link>
                </li>
                <button  onClick={()=>setMenu(prev=>!prev)}  className=' block md:hidden '>
                {menu?<FaBars/>:< IoClose/>}
            </button>
            </div>
        <nav className='flex justify-center  items-center'> 
        
            <ul className='hidden md:block md:flex  gap-5 text-xl font-semibold text-gray-700  px-5 py-2 items-center'>
                <li >
                     <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/">Home</NavLink>
                </li>
                {
                    userInfo?<>
                <li>
                    <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/author">Authors</NavLink>
                </li>
                <li>
                <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/addPost">Add Post</NavLink>
                </li>
                <li>
                <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/profile">Ernest Achiever</NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/logout" >LogOut</NavLink>
                 </li>
                 </>:<>
                 <li>
                <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/register">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/login" >Login</NavLink>
                 </li>
                 </>
                }
            </ul>
            <div className='flex flex-col items-center'>
        

            <nav className='flex  items-center'> 
            <ul className={` ${menu?"hidden":"block"} md:hidden flex flex-col   gap-5 text-xl font-semibold text-gray-700  px-5 py-2 items-center`}>
                
                       {
                        userInfo?<>
                <li>
                     <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/author">NAuthors</NavLink>
                </li>
                <li>
                <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/addPost">Add Post</NavLink>
                </li>
                <li>
                <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/profile">Ernest Achiever</NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/logout" >LogOut</NavLink>
                </li></>:<>
                 <li>
                <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/register">Sign Up</NavLink>
                </li>
                <li>
                    <NavLink  className={({isActive})=>`${isActive?"text-orange-500":"text-700"} hover:text-orange-500`} to="/login" >Login</NavLink>
                 </li>
                 </>
}
            </ul>
            </nav>
            </div>
        </nav>
    </div>
    
}
</>
  )
}

export default Header