import Lottie from 'lottie-react';
import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import registerLottieData from './../assets/lottie/register.json'
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react'
import AuthContext from './../Context/AuthContext/AuthContext';
import google from '../assets/image/google.png'

const Register = () => {
    const [pass, setPass] = useState('')
    const [show, setShow] = useState(false)
    const [term,setTerms]=useState(null)
    const { createUser,googleSign } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms=e.target.terms.checked
        console.log(name, email, password,terms)
        // terms condition setup
        if(!term){
            return setTerms('Please allow terms condition')
        }
        setTerms('')
        setPass('')
        if (!/(?=.*[a-z])/.test(password)) {
            return setPass('Missing your password lowercase!')
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            return setPass("Missing your password uppercase")
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            return setPass('Missing your password one digit number')
        }
        else if (password.length < 6) {
            return setPass('Your password must be at least 6 characters long');
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/signIn')

            })
            .catch(error => console.log(error))
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content mt-26 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className='w-96'>
                        <Lottie animationData={registerLottieData}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div onClick={googleSign} className='flex cursor-pointer hover:bg-blue-50 rounded-[5px] p-1 justify-center items-center '>
                          <div className='flex items-center gap-2 '>
                          <img src={google} className='w-8' alt="" />
                          <p className='text-xl'>Sign up with Google </p>
                          </div>
                        </div>
                        <div className="divider text-xl font-semibold">OR</div>
                        <h1 className="text-4xl text-center  font-bold">Register now!</h1>
                        <form onSubmit={handleRegister} className="fieldset">
                            <div>
                                {
                                    term&&<p className='text-red-600 text-xl text-center'>{term}</p>
                                }
                            </div>
                            <div className='space-y-2'>
                                <label className="fieldset-label text-[18px] text-black semibold">Name</label>
                                <input type="text" className="input" name='name' placeholder="Name" />
                            </div>
                            <div className='space-y-2'>
                                <label className="fieldset-label text-[18px] text-black semibold">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />
                            </div>
                            <div className='space-y-2 relative'>
                                <label className="fieldset-label text-[18px] text-black semibold">Password</label>
                                <input type={show ? 'text' : 'password'} className="input" name='password' placeholder="Password" />
                                <p className='text-red-500 font-semibold'>{pass}</p>
                                <span onClick={() => setShow(!show)} className='absolute top-12 text-[16px] right-9'>
                                    {
                                        show ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>
                            <div className='mt-1'><a className="link link-hover text-[18px] text-black semibold">Forgot password?</a></div>
                            <div className='flex gap-2 mt-3'>
                                <input type="checkbox" name='terms' className="checkbox checkbox-success" /><p className='text-black text-[14px]'>I agree to the Terms of service and Privacy Policy</p>
                            </div>
                            
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p className='my-5 text-[15px]'>You have an already account? please <Link to='/signIn' className='text-blue-500'>Sign in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;