import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className='w-full overflow-y-hidden bg-orange-500 m-0 py-5 fixed bottom-0 text-xl font-semibold items-center'>
        <ul className='flex gap-5 w-full px-5 py-1 custom-scrollbar lg:justify-center justify-start overflow-x-auto'>
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/business"}>Business</NavLink></li>
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/agriculture"}>Agriculture</NavLink></li>
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/art"}>Art</NavLink></li>
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/education"}>Education</NavLink></li>
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/weather"}>Weather</NavLink></li>
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/nature"}>Nature</NavLink></li>      
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/friend"}>Friend</NavLink></li>      
          <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-1 rounded-lg `} to={"/categoryPost/other"}>Other</NavLink></li>      
        </ul>
      </footer>
    </>
  )
}

export default Footer
