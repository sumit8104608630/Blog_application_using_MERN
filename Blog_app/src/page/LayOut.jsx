import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import "../index.css"
import Footer from './Footer'
import { useSelector } from 'react-redux';

function LayOut() {
  const {isLogIn, userInfo, isLoading }=useSelector((state)=>state.authenticate);

  return (
    <>

      
    <div>
        <Header />
       <div className='flex justify-center items-center z-1 ' > < Outlet /></div>
        <Footer />
    </div>
    </>
  )
  
}

export default LayOut