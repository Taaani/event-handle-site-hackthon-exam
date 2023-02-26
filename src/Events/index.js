import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import CreateEvent from './CreateEvent';
import ShowEvent from './ShowEvent';
import Header from '../Commponents/Header/Header';
import Footer from '../Commponents/Footer/Footer';
import JoinEvent from './JoinEvent';

// dflsk
import { AuthContext } from '../context/AuthContext';
export default function Index() {
    const { state } = useContext(AuthContext);
    const { isAuthanticated } = state;
    console.log("isAuthenticatid22 =>", isAuthanticated)
    return (
        <>
            <Header />
            <main>

                <Routes>

                    <Route path='/' element={<ShowEvent />} />
                    <Route path='/createEvent' element={isAuthanticated ? <CreateEvent /> : <Navigate to='/auth/login' />} />
                    <Route path='/joinEvent' element={isAuthanticated ? <JoinEvent /> : <Navigate to='/auth/login' />} />

                </Routes>

            </main>
            <Footer />

        </>
    )
}
