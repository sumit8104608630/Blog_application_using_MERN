import React from 'react'
import PostItem from './PostItem'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from "react-redux"
import {fetchBlogs} from "../app/actionFetch"

function Post() {
  const {all_blog,user_bog,categories,authors,isLoading,error }=useSelector(state=>state.blogs);
  console.log(isLoading);
  const dispatch = useDispatch();
  useEffect(()=>{
  const b=  dispatch(fetchBlogs());
  console.log(b)
  },[dispatch])
  console.log(all_blog)


useEffect(()=>{
  const all_blogs= fetch("http://localhost:9000/blog/all_blog",{
    method:"GET",
    credentials: 'include'
  }).then(dat=>dat.json());
  console.log(all_blogs);
},[])



    const post=[
        {
          "id": 1,
          "title": "Introduction to Web Development",
          "description": "A comprehensive guide to getting started with web development, covering HTML, CSS, and JavaScript.",
          "authorId": 101,
          "category": "Web Development",
          "thumbnail": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        },
        {
          "id": 2,
          "title": "Mastering React",
          "description": "An in-depth tutorial on React, exploring hooks, state management, and advanced patterns.A comprehensive guide to getting started",
          "authorId": 102,
          "category": "Frontend Development",
          "thumbnail": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        },
        {
          "id": 3,
          "title": "Node.js for Beginners",
          "description": "A beginner's guide to server-side development with Node.js, focusing on building RESTful APIs.A com ",
          "authorId": 103,
          "category": "Backend Development",
          "thumbnail": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        },
        {
          "id": 4,
          "title": "Understanding Databases",
          "description": "Learn about SQL and NoSQL databases, their differences, and when to use them.",
          "authorId": 104,
          "category": "Databases",
          "thumbnail": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        },
        {
          "id": 5,
          "title": "JavaScript ES6 Features",
          "description": "Explore the new features introduced in ES6, including arrow functions, template literals, and destructuring.",
          "authorId": 105,
          "category": "JavaScript",
          "thumbnail": "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        }
      ]
      
      
  return (
    <>{isLoading?
<div className='flex flex-wrap justify-center gap-5n px-5 py-5'>
    {post?.map(({id,title,description,authorId,category,thumbnail})=><PostItem key={id} thumbnail={thumbnail} title={title} description={description} authorId={authorId} category={category} />)}
</div>:console.log(all_blog)}</>
)
}

export default Post