import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import logo from '../../assets/logo.png'
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const links = <div className='space-x-7 text-[15px] font-semibold'>
        <NavLink to='/' className={({isActive})=>isActive?'btn outline-2 font-bold outline-accent':''}>Home</NavLink>
        <NavLink to='/finalJob' className={({isActive})=>isActive?'btn outline-2 font-bold outline-accent':''}>Final Job</NavLink>
        <NavLink to='/recruiters' className={({isActive})=>isActive?'btn outline-2 font-bold outline-accent':''}>Recruiters</NavLink>
        <NavLink to='/contact' className={({isActive})=>isActive?'btn outline-2 font-bold outline-accent':''}>Contact</NavLink>
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
                    user ? <Link onClick={handleSignOUt}>
                        <button className='btn'>Sign Out</button>
                    </Link> : <div className='space-x-4'>
                        <Link to='/register' className='font-semibold'>Register</Link>
                        <Link to='/signIn'>
                            <button className='btn btn-accent'>Sign In</button>
                        </Link>
                    </div>
                }

            </div>
        </div>
    );
};

export default Navbar;