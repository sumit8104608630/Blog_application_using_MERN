import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

function PostItem({id,title,Content,author,type,blogImage,likeCount,all_like}) {

  return (
    <div className='w-64 p-4 h-96 shadow-xl hover:shadow-2xl flex flex-col gap-4 mx-5 rounded-xl'>
        <div>
            <img className='h-40 rounded-xl object-cover' src={blogImage} alt={title}/>
        </div>
        <Link to={`/post/${id}`}>
        <h1 className='text-lg font-bold my-2'>{title}</h1>
        <div className='text-sm h-10 overflow-auto'>
          
        <div dangerouslySetInnerHTML={{ __html: Content }}></div>
           
        </div>
        </Link>
        <div className='mt-auto flex flex-col items-'>
            <PostAuthor author={author} post_id={id} likeCount={likeCount} all_like={all_like} />
            <Link to={`/post/categories/${type}`}>
            <span className='text-xs'>{type}</span>
            </Link>
        </div>
    </div>
  )
}

export default PostItem