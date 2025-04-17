import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import signInLottieData from '../assets/lottie/login.json'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const navigate=useNavigate()
    const {signInUser}=useContext(AuthContext)
    const[show,setShow]=useState(false)
    const[pass,setPass]=useState('')
    const handleSignIn=e=>{
        e.preventDefault();
        const email=e.target.name.value;
        const password=e.target.password.value;
        console.log(email,password)

        // sign in user;
        signInUser(email,password)
        .then(result=>{
            console.log(result.user);
            navigate('/')
        })
        .catch(error=>console.log(error.message))

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
    }
    return (
        <div className="hero bg-base-200  min-h-screen">
        <div className="hero-content mt-18 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <div className='w-86 mx-10'>
                    <Lottie animationData={signInLottieData}></Lottie>
                </div>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-4xl text-center  font-bold">Sign In Now!</h1>
                    <form onSubmit={handleSignIn} className="fieldset">
                        
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
                        <p className='my-5 text-[15px]'>Don't have an account? please <Link className='text-blue-500'>register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignIn;