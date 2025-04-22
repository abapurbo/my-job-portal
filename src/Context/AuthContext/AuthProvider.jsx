import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from 'axios';
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [photo, setPhoto] = useState('')
    const googleProvider = new GoogleAuthProvider()
    console.log('hello', photo)

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            setPhoto(currentUser?.photoURL)
            const user = {
                email: currentUser?.email
            }
            if (currentUser?.email) {
                axios.post('http://localhost:4000/jwt', user, {
                    withCredentials: true
                })
                    .then(data => {
                        console.log(data)
                        setLoading(false)
                     
                    })
            }
            else {
                axios.post('http://localhost:4000/logout', {}, {
                    withCredentials: true
                })
                    .then(data => {
                        console.log(data)
                        setLoading(false)
                    })
            }

        })
        return (() => {
            unSubscribe()
        })
    }, [])
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)

        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    // google provider
    const googleSign = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    const userInfo = {
        user,
        photo,
        loading,
        createUser,
        signInUser,
        googleSign,
        signOutUser,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;