import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [photo, setPhoto] = useState('')
    const googleProvider = new GoogleAuthProvider()
    console.log('hello',photo)
 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            setPhoto(currentUser?.photoURL)
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
    const googleSign= () => {
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