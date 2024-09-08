import React, { useState } from 'react'
import { MdEditSquare } from "react-icons/md";

import "../index.css"
function LogOut() {
  const [toggle,setToggle]=useState(false)
  return (
    <>
    <div className='   shadow-gray-300 bg-gray-50 shadow-lg p-5 rounded-lg absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2'>
      <div className='flex mb-5 justify-center items-center flex-col'>
        <img className='w-1/2 md:w-36 rounded-full' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHnMRpLGP7It6a6OTGN7Oxq7Hro3LSUwuIrA&s'alt=''/>
        <div className='flex gap-4 mt-2'><h1>Sumit Sharma</h1> <button onClick={()=>setToggle(prev=>!prev)}><MdEditSquare /></button></div>
        <div><button  className='px-5 py-1 mt-2 bg-orange-500 text-white font-semibold rounded-lg w-full'>LogOut</button></div>
      </div>
      <div>
        <form className={toggle?"block":"hidden"}>
          <div  className='border-2 flex focus:outline-none rounded-lg border-gray-300 px-2 py-1 '>
          <input className='w-full' type='file'/>
          <input className='text-sm font-semibold bg-gray-400 text-white px-2 py-1 rounded-lg' type='button'value='Upload'/>
          </div>
          <div className='flex gap-1 flex-col mt-3'>
          <label>Edit Name : </label>
          <input className='border-2 focus:outline-none rounded-lg border-gray-300 px-5 py-1 '  type="text" placeholder='Full Name' name="userName" required/>
        </div>
        <div className='mt-5 '>
          <input  className='px-5  py-2 bg-orange-500 text-white font-semibold rounded-lg w-full' value={"Edit"} type='submit'/>
        </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default LogOut