import axios from 'axios';
import React, { useEffect } from 'react';
import UseAuth from './UseHooks';
import { useNavigate } from 'react-router-dom';
// this is a custom hooks
const instance = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
})

const UseAxiosSecure = () => {
    const {signOutUser}=UseAuth()
    const navigate=useNavigate()
    useEffect(() => {
        instance.interceptors.response.use(response => {
            return response
        }, error => {
            console.log('interceptor capture ',error)
            if(error.status===401 || error.status===403){
                signOutUser()
                .then(()=>{
                    navigate('/signIn')
                })
                .catch(error=>console.log(error))
            }
            return Promise.reject(error)
        }
        )
    }, [navigate,signOutUser])
    return instance;
};

export default UseAxiosSecure;