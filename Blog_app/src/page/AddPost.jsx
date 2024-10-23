import React from 'react'

function AddPost() {
  return (
    <div className='w-1/2 mt-28 flex flex-col justify-center shadow-lg bg-gray-50 p-8 rounded-lg  mb-28'>
      <form>
        <caption className='flex text-2xl font-semibold justify-center'>Create Blog</caption>
      <div className='flex gap-1 flex-col mt-3'>
          <label className='font-medium text-gray-700'>Title : </label>
          <input  className='border-2 focus:outline-none rounded-lg border-gray-300 px-5 py-1 '  type="text" placeholder='Title' name="userName" required/>
        </div>
        <div className='flex gap-1 flex-col mt-3'>
          <label className='font-medium text-gray-700'>Image : </label>
          <label htmlFor='fileImage' className='border-2 focus:outline-none rounded-lg border-gray-300 px-1 py-1 flex font-semibold text-gray-100'><span className='bg-orange-500 px-2 py-0.5 rounded'>Choose Image</span>  </label>
          <input id='fileImage'hidden className='border-2 focus:outline-none rounded-lg border-gray-300 px-1 py-1 '  type="file" placeholder='Title' name="userName" required/>
        </div>
        <div className=' mt-5 flex justify-between'>
          <div className='flex items-center gap-2'>
          <label className='font-medium text-gray-700'>Type : </label>
          <select className='text-lg border-2 focus:outline-none rounded-lg border-gray-300 px-2 py-1 ' required>
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
          <input id='fileImage' className='border-2 focus:outline-none rounded-lg border-gray-300 px-1 py-1 '  type='datetime-local' placeholder='Title' name="userName" required/>
          </div>
        </div>
        <div className='flex gap-1 flex-col mt-3'>
          <label className='font-medium text-gray-700'>Content : </label>
          <textarea  placeholder='Write Blog' className='border-2 focus:outline-none rounded-lg border-gray-300 px-5 py-2' rows={10}>
          </textarea>
        </div>
        <div className='flex gap-1 flex-col mt-5'>
        <input  className='px-5 hover:bg-orange-600 py-2 bg-orange-500 text-white font-semibold rounded-lg w-full' value={"Create Blog"} type='submit'/>
        </div>
      </form>
    </div>
  )
}

export default AddPost