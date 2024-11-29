import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { all_user } from '../app/actionFetch';


function Author() {
  const { isLogIn, userInfo,all_users, isLoading } = useSelector((state) => state.authenticate);
const [count,setCount]=useState(0)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(all_user())
    if(isLoading){
      console.log("sumit")
    }
    else{
      console.log(all_users)
    }

  },[count])

  useEffect(() => {
    // Fetch users when component mounts
    dispatch(all_user());
  }, [dispatch]);


  
const handleClick=()=>{
  setCount(count+1)
}

  return (<>
    {isLoading?<>Loading</>:(<div>Author
      <button className='mt-96' onClick={handleClick}>click to get info{all_users.allUser?.map(i=>i.userName)}</button>
    </div>)}</>
  )
}

export default Author