import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
  <>
  <footer className='w-full bg-orange-500 py-5  fixed bottom-0  text-xl font-semibold  items-center'>
    <ul className='flex flex-wrap gap-5 w-full justify-center'>
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:business"} >Business</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:agriculture"} >Agriculture</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:art"} >Art</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:Eduction"} >Eduction</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:weather"} >Weather</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:nature"} >Nature</NavLink></li>      
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:friend"} >Friend</NavLink></li>      
        <li><NavLink className={({isActive})=>`${isActive?"text-gray-700 bg-white shadow-lg ":"text-white"} px-5 py-2 rounded-lg `} to={"/categoryPost/:other"} >Other</NavLink></li>      
      
    </ul>
  </footer>
  </>
  )
}

export default Footer