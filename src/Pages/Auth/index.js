
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// auth pages...
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
export default function Index() {
    return (
        <>
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgotPassword' element={<ForgotPassword />} />
                <Route path='/resetPassword' element={<ResetPassword />} />
            </Routes>

        </>
    )
}
