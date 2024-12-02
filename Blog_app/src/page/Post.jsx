import React from 'react'
import PostItem from './PostItem'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import {fetchBlogs,fetch_like} from "../app/actionFetch"

function Post() {
  const {like_isLoading,all_like}=useSelector(state=>state.like);
  const {all_blog,user_bog,categories,authors,isLoading,error }=useSelector(state=>state.blogs);
  const dispatch = useDispatch();
  useEffect(()=>{
 dispatch(fetchBlogs());
 dispatch(fetch_like());
  },[dispatch])
  console.log(all_blog.all_blogs)
console.log(all_like)

  return (
    <>{!isLoading||!like_isLoading?<div className='flex flex-wrap justify-center gap-5n px-5 py-5'>{all_blog?.map(({_id,title,blogImage,type,createdAt,Content,author,likeCount,})=><PostItem key={_id} id={_id} title={title} blogImage={blogImage} type={type} date={createdAt} Content={Content} author={author} likeCount={likeCount} all_like={all_like}></PostItem>)}</div>:null}</>
)
}

export default Post