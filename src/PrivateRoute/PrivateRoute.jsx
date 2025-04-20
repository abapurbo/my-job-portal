import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center py-12 items-center'><span className="loading loading-spinner loading-xl"></span></div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/signIn' state={location?.pathname}></Navigate>

};

export default PrivateRoute;