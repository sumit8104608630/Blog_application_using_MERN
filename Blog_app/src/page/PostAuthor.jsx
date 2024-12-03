import React from 'react'
import { BiLike } from "react-icons/bi";
import { useEffect,useState } from 'react';
import { BiSolidLike } from "react-icons/bi";
import Post from './Post';
import { useSelector,useDispatch } from 'react-redux';
import {fetchBlogs,fetch_like} from "../app/actionFetch"



function PostAuthor({author,likeCount,post_id,all_like}) {
  const {like_isLoading}=useSelector(state=>state.like);
  const { userInfo }=useSelector((state)=>state.authenticate);
  const {all_blog,isLoading }=useSelector(state=>state.blogs);



  const [toggle,setToggle]=useState(false);
  const{_id,userName,profileImage}=author;
  const dispatch=useDispatch()
  const all_likes=all_like


useEffect(()=>{
if(userInfo){
const  boolean_value=all_like?.some((like)=> like?.userId===userInfo?._id&&like?.postId===post_id);
  setToggle(boolean_value)
}
},[all_like,userInfo,post_id])


  const handel_like_function=async()=>{

 try {
  
     const response=await fetch(`http://localhost:9000/blog_like/like/${post_id}`,{
       method: "POST",
       body: "",
       headers: {
        "Content-Type": "application/json",
      },
       credentials: "include",
     })
     if(response.ok){
     dispatch(fetch_like())
     dispatch(fetchBlogs())
     }
 } catch (error) {
  console.log(error)
 }
  }
  


  return (<>{!isLoading||!like_isLoading?
    <div className='flex items-center justify-between' >
      <div className='flex items-center'>
        <img className='h-8 w-8 rounded-full' src={profileImage}/>
        <h2 className='ml-2'>{userName}</h2>
        </div>
        <div className='flex gap-1'>
        <button onClick={handel_like_function}>{toggle?<BiSolidLike />:<BiLike></BiLike>}</button>
        <span>{likeCount}</span>
        </div>
    </div>:null}
  </>)
}

export default PostAuthor