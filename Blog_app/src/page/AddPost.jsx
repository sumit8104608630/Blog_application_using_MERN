import React, { useState,useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {fetchBlogs} from "../app/actionFetch"


function AddPost() {
//setting navigate to navigate to blog which is currently added
const navigate=useNavigate();
// creating a boolean for addition of blog
  const [add_post_success,set_bool]=useState(false)
  //first creating a object to stor all the form data in one object
  const [postData ,setPostData]=useState({
    title:"",
    image:null,
    type:"",
    date:"",
    content:"",
  });


const dispatch=useDispatch();


  // handling all information
const handelChange=(e)=>{
const {name,value}=e.target;
setPostData((prevData)=>({
...prevData,[name]:value
}))
}

const handleFileChange = (e) => {
  setPostData((prevData) => ({
    ...prevData,
    image: e.target.files[0],
  }));
};
  

const handleEditorChange = (content) => {
  setPostData((prevData) => ({
    ...prevData,
    content,
  }));
};

//gathering all information in one object


const handelSubmit=async (e)=>{ 
try{
  e.preventDefault();
const form_data=new FormData();
form_data.append('title',postData.title);
form_data.append('image',postData.image);
form_data.append('type',postData.type);
form_data.append('date',postData.date);
form_data.append('content',postData.content);


// check all the data has been came 
if(postData.title==="" || postData.image===null || postData.type==="" || postData.date=="" || postData.content==""){
  alert("Please fill all the fields");
  return
}
// sending data to server
const response_from_server=await fetch(`http://localhost:9000/blog/add_post`,{
  method: "POST",
  body: form_data,
  credentials: "include",
})
console.log(response_from_server)
// if response is 200 then it means data has been sent successfully
if(response_from_server.ok){
  set_bool(prev=>!prev)
}
if(add_post_success){
  const blog_detail= await response_from_server.json()
  const blog_data=blog_detail.blog_data
  const blog_id=blog_data["_id"];
  console.log(blog_id)
  navigate(`/postDetail/${blog_id}`)
  dispatch(fetchBlogs())
}
}
catch(error){
  console.error(error);
}
}


  return (
    <div className='w-1/2 mt-28 flex flex-col justify-center shadow-lg bg-gray-50 p-8 rounded-lg  mb-28'>
      <form onSubmit={handelSubmit}>
        <caption className='flex text-2xl font-semibold justify-center'>Create Blog</caption>
        <div className='flex gap-1 flex-col mt-3'>
          <label className='font-medium text-gray-700'>Title : </label>
          <input  onChange={handelChange} value={postData.title} className='border-2 focus:outline-none rounded-lg border-gray-300 px-5 py-1' type="text" placeholder='Title' name="title" required />
        </div>
        <div className='flex gap-1 flex-col mt-3'>
          <label className='font-medium text-gray-700'>Image : </label>
          <label htmlFor='fileImage' className='border-2 focus:outline-none rounded-lg border-gray-300 px-1 py-1 flex font-semibold text-gray-100'>
            <span className='bg-orange-500 px-2 py-0.5 rounded'>Choose Image</span>  
          </label>
          <input   id='fileImage' onChange={handleFileChange} hidden className='border-2 focus:outline-none rounded-lg border-gray-300 px-1 py-1 ' type="file"  name="image" required />
        </div>
        <div className='mt-5 flex justify-between'>
          <div className='flex items-center gap-2'>
            <label className='font-medium text-gray-700'>Type : </label>
            <select value={postData.type} name='type' onChange={handelChange} className='text-lg border-2 focus:outline-none rounded-lg border-gray-300 px-2 py-1 ' required>
              <option className='text-lg text-gray-600 font-medium' value="Business">Business</option>
              <option className='text-lg text-gray-600 font-medium' value="Agriculture">Agriculture</option>
              <option className='text-lg text-gray-600 font-medium' value="Art">Art</option>
              <option className='text-lg text-gray-600 font-medium' value="Eduction">Eduction</option>
              <option className='text-lg text-gray-600 font-medium' value="Weather">Weather</option>
              <option className='text-lg text-gray-600 font-medium' value="Nature">Nature</option>
              <option className='text-lg text-gray-600 font-medium' value="Friend">Friend</option>
              <option className='text-lg text-gray-600 font-medium' value="Other">Other</option>
            </select>
          </div>
          <div className='flex items-center gap-2'>
            <label className='font-medium text-gray-700'>Date : </label>
            <input value={postData.date} id='fileImage' onChange={handelChange} className='border-2 focus:outline-none rounded-lg border-gray-300 px-1 py-1 ' type='datetime-local' name="date" required />
          </div>
        </div>
        <div className='flex gap-1 flex-col mt-3'>
          <label className='font-medium text-gray-700'>Content : </label>
          {/* TinyMCE editor */}
          <Editor
            apiKey="ewwpf79i4r2crjb8rhsgu6qua02u0jxwewypmlrx8e0vwv59"  // Your API key here
            value={postData.content}
            init={{
              height: 300,
              menubar: false,
              plugins: ['lists', 'link', 'table', 'emoticons', 'image'],
              toolbar: 'undo redo | bold italic underline | bullist numlist | alignleft aligncenter alignright | link image',
            }}
            onEditorChange={handleEditorChange}  // Capture the editor content on change
          />
        </div>
        <div className='flex gap-1 flex-col mt-5'>
          <input  className='px-5 hover:bg-orange-600 py-2 bg-orange-500 text-white font-semibold rounded-lg w-full' value={"Create Blog"} type='submit' />
        </div>
      </form>
    </div>
  );
}

export default AddPost;
