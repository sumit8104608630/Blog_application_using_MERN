import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LogOut from './page/LogOut.jsx'
import Home from './page/Home.jsx'
import LayOut from './page/LayOut.jsx'
import Edit from './page/Edit.jsx'
import PostDetails from './page/PostDetails.jsx'
import Rejister from './page/Rejister.jsx'
import Login from './page/Login.jsx'
import UserProfile from './page/UserProfile.jsx'
import DashBoard from './page/DashBoard.jsx'
import DeletePost from './page/DeletePost.jsx'
import Author from './page/Author.jsx'
import CategoryPost from './page/CategoryPost.jsx'
import AuthorPost from './page/AuthorPost.jsx'
import AddPost from './page/AddPost.jsx'
import Error from "./page/Error.jsx"
import {Provider} from "react-redux"
import store from "./app/Store.js"


const router=createBrowserRouter([
  {
    path:"*",
    element:<Error/>
  },
  {
    path:'/',
    element:<LayOut/>,
    children:[{
      path:'',
      element:<Home/>
    },
  {
    path:'logOut',
    element:<LogOut/>
  },{
    path:'edit/:id',
    element:<Edit/>
  },{
    path:'postDetail/:id',
    element:<PostDetails/>
  },{
    path:"register",
    element:<Rejister/>
  },{
    path:"login",
    element:<Login/>
  },{
    path:"profile/:id",
    element:<UserProfile/>
  },{
    path:"dashBoard",
    element:<DashBoard/>
  },{
    path:"delete/:id",
    element:<DeletePost/>
  },{
    path:"author",
    element:<Author/>
  },{
    path:"categoryPost/:category",
    element :<CategoryPost/>
  },{
    path:"authorPost/:id",
    element:<AuthorPost/>
  },{
    path:"addPost",
    element:<AddPost/>
  },

  ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
   <RouterProvider router={router}>
   </RouterProvider>
</Provider>
  </StrictMode>
)
