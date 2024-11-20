import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Posts from "./components/Posts/Posts"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home'
import Users from './components/Users/Users'
import UserDetails from './components/UserDetails/UserDetails'
// import SimpleForm from './components/SimpleForm/SimpleForm'
import HookForm from './components/HookForm/HookForm'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>,
    children:[
      {
        path:"/users",
        element: <Users></Users>
      },
      {
        path:"/posts",
        loader: ()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:"/users",
        element:<Users></Users>
      },
      {
        path:'/users/:userId',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/login',
        element:<HookForm></HookForm>
        // element:<SimpleForm></SimpleForm>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
