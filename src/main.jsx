import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Register from './Authentication/Register.jsx'
import AuthProvider from './Context/AuthContext/AuthProvider.jsx'
import SignIn from './Authentication/SignIn.jsx'
import FinalJob from './pages/FinalJob.jsx'
import Recruiters from './Recruiters.jsx'
import Contact from './Contact.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <p>Not found routing</p>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/signIn',
        element:<SignIn></SignIn>
      },{
        path:'/finalJob',
        element:<FinalJob></FinalJob>
      },{
        path:'/recruiters',
        element:<Recruiters></Recruiters>
      },{
        path:'/contact',
        element:<Contact></Contact>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
