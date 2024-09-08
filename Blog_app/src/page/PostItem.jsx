import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

function PostItem({id,title,description,authorId,category,thumbnail}) {
  return (
    <div className='w-64 p-4 h-96 shadow-xl hover:shadow-2xl flex flex-col gap-4 mx-5 rounded-xl'>
        <div>
            <img className='h-40 rounded-xl object-cover' src={thumbnail} alt={title}/>
        </div>
        <Link to={`/post/${id}`}>
        <h1 className='text-lg font-bold my-2'>{title}</h1>
        <div className='text-sm h-10 overflow-auto'>
          
            <p>{description}</p>
           
        </div>
        </Link>
        <div className='mt-auto'>
            <PostAuthor/>
            <Link to={`/post/categories/${category}`}>
            <span className='text-xs'>{category}</span>
            </Link>
        </div>
    </div>
  )
}

export default PostItem