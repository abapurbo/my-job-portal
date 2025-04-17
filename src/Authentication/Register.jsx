import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import registerLottieData from './../assets/lottie/register.json'
import { Link, useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import AuthContext from './../Context/AuthContext/AuthContext';

const Register = () => {
    const [pass,setPass]=useState('')
    const [show,setShow]=useState(false)
    const {createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleRegister=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(name,email,password)
        setPass('')
       if(!/(?=.*[a-z])/.test(password)){
        return setPass('Missing your password lowercase!')
       }
       else if(!/(?=.*[A-Z])/.test(password)){
        return setPass("Missing your password uppercase")
       }
       else if(!/(?=.*[0-9])/.test(password)){
        return setPass('Missing your password one digit number')
       }
       else if (password.length < 6) {
        return setPass('Your password must be at least 6 characters long');
    }
       createUser(email,password)
       .then(result=>{
        console.log(result.user)
        navigate('/signIn')

       })
       .catch(error=>console.log(error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='w-96'>
                        <Lottie animationData={registerLottieData}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <h1 className="text-4xl text-center  font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <div className='space-y-2'>
                            <label className="fieldset-label">Name</label>
                            <input type="text" className="input" name='name' placeholder="Name" />
                            </div>
                            <div className='space-y-2'>
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            </div>
                            <div className='space-y-2 relative'>
                            <label className="fieldset-label">Password</label>
                            <input type={show?'text':'password'} className="input" name='password' placeholder="Password" />
                            <p className='text-red-500 font-semibold'>{pass}</p>
                             <span onClick={()=>setShow(!show)} className='absolute top-10 right-9'>
                                {
                                    show? <FaEye/>:<FaEyeSlash />
                                }
                             </span>
                            </div>
                            <div className='mt-1'><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='my-5 text-[15px]'>You have an already account? please <Link className='text-blue-500'>Sign in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;