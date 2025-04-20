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
import Recruiters from './Recruiters.jsx'
import Contact from './Contact.jsx'
import JobsDetails from './pages/JobsDetails.jsx'
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx'
import JobApply from './pages/JobApply.jsx'
import MyApplication from './pages/MyApplication.jsx'
import AddJobs from './pages/AddJobs.jsx'
import PostJob from './pages/PostJob.jsx'
import ViewJobApplication from './pages/ViewJobApplication.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <p>Not found routing</p>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      }, {
        path: '/recruiters',
        element: <Recruiters></Recruiters>
      }, {
        path: '/contact',
        element: <Contact></Contact>
      }, {
        path: '/jobs/details/:id',
        loader: ({ params }) => fetch(`http://localhost:4000/jobs/details/${params.id}`),
        element: <PrivateRoute><JobsDetails></JobsDetails></PrivateRoute>
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      }, {
        path: '/myApplication',
        element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
      }, {
        path: '/addJob',
        element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
      }, {
        path: '/postJob',
        element: <PrivateRoute><PostJob></PostJob></PrivateRoute>
      },{
        path:'/viewJobApplication/:id',
        loader:({params})=>fetch(`http://localhost:4000/job-application/jobs/${params.id}`),
        element:<PrivateRoute><ViewJobApplication></ViewJobApplication></PrivateRoute>
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
