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
  const all_user_id=all_like
  const all_blog_id=all_user_id?.map(i=>i.postId);
  const all_id=all_user_id?.map(i=>i.userId);

useEffect(()=>{
if(userInfo){

if(all_id.includes(userInfo?._id) && all_blog_id?.includes(post_id)){
  setToggle(true)
}
else{
  setToggle(false)
}
}
},[all_like,userInfo,post_id])


  const handel_like_function=async()=>{
    setToggle((prev)=>!prev)
    console.log("like button clicked")
    console.log(post_id)
    console.log(_id)
    const response=await fetch(`http://localhost:9000/blog_like/like/${post_id}`,{
      method: "POST",
      body: "",
      credentials: "include",
    })
    dispatch(fetch_like())
    dispatch(fetchBlogs())
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