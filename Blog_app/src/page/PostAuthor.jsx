import React from 'react'
import { BiLike } from "react-icons/bi";
import { useEffect,useState } from 'react';
import { BiSolidLike } from "react-icons/bi";



function PostAuthor() {
  const [toggle,setToggle]=useState(false);


  const handel_like_function=()=>{
    setToggle(prev=>!prev)
    console.log("like button clicked")
  }
  




  return (
    <div className='flex items-center justify-between' >
      <div className='flex items-center'>
        <img className='h-8 rounded-full' src='	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWUem1ykMgZrm7P2GNRhID1fnipTWf1kQ1dA&s'/>
        <h2 className='ml-2'>Author Name</h2>
        </div>
        <div className='flex gap-1'>
        <button onClick={handel_like_function}>{toggle?<BiSolidLike />:<BiLike></BiLike>}</button>
        <span>0</span>
        </div>
    </div>
  )
}

export default PostAuthor