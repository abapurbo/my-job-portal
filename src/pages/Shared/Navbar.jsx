import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const { user, signOutUser, photo } = useContext(AuthContext)
    console.log('nav',photo)
    const links = <div className='space-x-7 text-[15px] font-semibold'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'btn outline-2 font-bold outline-accent' : ''}>Home</NavLink>
        <NavLink to='/myApplication' className={({ isActive }) => isActive ? 'btn outline-2 font-bold outline-accent' : ''}>My Application</NavLink>
        <NavLink to='/addJob' className={({ isActive }) => isActive ? 'btn outline-2 font-bold outline-accent' : ''}>Add Jobs</NavLink>
        <NavLink to='/postJob' className={({ isActive }) => isActive ? 'btn outline-2 font-bold outline-accent' : ''}>Post Job</NavLink>
   
    </div>
    const handleSignOUt = () => {
        signOutUser()
    }
    return (
        <div className="navbar px-10 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <img src={logo} className='w-10' alt="job application image" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                {
                    user ? <div className='flex items-center'>
                        <img src={photo} className='w-7 mr-6 object-center rounded-full' alt="user photo" />
                        <Link onClick={handleSignOUt}><button className='btn btn-primary font-bold'>Sign Out</button></Link>
                    </div> : <div className='space-x-4'>
                        <NavLink to='/register' className={({isActive})=>isActive?'underline underline-offset-4 decoration-blue-400 font-semibold':'font-semibold'}>Register</NavLink>
                        <Link to='/signIn'>
                            <button className='btn btn-primary text-white font-bold'>Sign In</button>
                        </Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;