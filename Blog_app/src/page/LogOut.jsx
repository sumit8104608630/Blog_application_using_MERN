import React, { useEffect, useState } from 'react';
import { MdEditSquare } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";
import { fetchUser } from "../app/actionFetch.js";
import {useNavigate} from "react-router"
import Cookies from 'js-cookie';
import "../index.css";
import { logout } from '../app/blog_app_redux.js';

function LogOut() {
  const navigate=useNavigate()
  const [toggle, setToggle] = useState(false);
  const [update, setUpdate] = useState({
    status: ""
  });
  const dispatch = useDispatch();
  const { isLogIn, userInfo, isLoading } = useSelector((state) => state.authenticate);

  useEffect(() => {
    console.log("Fetching user data...");
    dispatch(fetchUser());
  }, [update, dispatch]);

  //console.log(isLoading);
 // console.log(userInfo);

  const [formData, setFormData] = useState({
    userName: "",
    profilePhoto: null,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData, profilePhoto: e.target.files[0]
    });
  };

  const handleLogOut = () => {
    axios.get('http://localhost:9000/user/logout',{withCredentials:true}).then((data)=>{
      Cookies.remove('token')
      dispatch(logout())
    })
   navigate("/login")
  };
  if(!userInfo&&!isLogIn){
    navigate('/')
  }
console.log(isLogIn)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('userName', formData.userName);
    data.append('profilePhoto', formData.profilePhoto);
//    dispatch(logout())

    try {
      await axios.post('http://localhost:9000/user/upload', data, {
        headers: {
          "Content-Type": 'multipart/form-data'
        },
        withCredentials: true
      })
      setUpdate({ ...update, status: "successful" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='my-20 mt-28 flex flex-col  w-full'>
      {isLoading ? (
        <div className='absolute left-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2'>
          <img className='w-10 ' src="https://i.gifer.com/ZNeT.gif" alt='Loading' />
        </div>
      ) : (
        <>
         <div className=' flex flex-col items-center justify-center'>
            <img className='w-20 h-20 rounded-full mb-2' src={userInfo.profileImage} alt='User' />
            <div className='flex gap-4 mt-2'>
              <span className='font-semibold'>{userInfo.userName}</span>
              <button onClick={() => setToggle(prev => !prev)}><MdEditSquare /></button>
            </div>
            <div className=' absolute  bg-white shadow-2xl rounded p-5  bottom-1/2  translate-y-3/4 z-10'>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className={toggle ? "block" : "hidden"}>
              <div className='border-2 flex focus:outline-none rounded-lg border-gray-300 px-2 py-1'>
                <input onChange={handleFileChange} className='w-full' name='profilePhoto' type='file' />
                <input className='text-sm font-semibold bg-gray-400 text-white px-2 py-1 rounded-lg' type='button' value='Upload' />
              </div>
              <div className='flex gap-1 flex-col mt-3'>
                <label>Edit Name:</label>
                <input value={formData.userName} onChange={handleInput} className='border-2 focus:outline-none rounded-lg border-gray-300 px-5 py-1' type="text" placeholder='Full Name' name="userName" />
              </div>
              <div className='mt-5 '>
                <input className='px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg w-full' value={"Edit"} type='submit' />
              </div>
            </form>
          </div>
          </div>
        <div className='  w-full px-5 mt-4'>
        <div className="w-full">
            <hr className='bg-gray-400 h-0.5 w-full' />
          </div>
        
        </div>
        <div className=''>
          <div className=' border-r-2 border-gray-400   fixed h-full py-5 px-6'>
          <nav  className=' w-max'>
          <ul className='flex flex-col gap-5 w-full px-5 py-1 custom-scrollbar lg:justify-center justify-start overflow-x-auto'>
          <li><button className='"text-gray-700 bg-white  px-5 py-1 '>Favorite</button></li>
          <li><button className='"text-gray-700 bg-white  px-5 py-1 '>History</button></li>
          <li>
          <div>
              <button onClick={handleLogOut} className='px-5 py-1 mt-2 bg-orange-500 text-white font-semibold rounded-lg w-full'>LogOut</button>
          </div>
          </li>
        </ul>
          </nav>
          </div>
          </div>
      

          </>
      )}
    </div>
  );
}

export default LogOut;
