# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


// logout button
   <div>
              <button onClick={handleLogOut} className='px-5 py-1 mt-2 bg-orange-500 text-white font-semibold rounded-lg w-full'>LogOut</button>
    </div>


// edit form to edit profile image and name form 
   <div>
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

        

        // edit button for profile
         <div className='flex gap-4 mt-2'>
              <h1>{userInfo.userName}</h1>
              <button onClick={() => setToggle(prev => !prev)}><MdEditSquare /></button>
            </div>
        
        