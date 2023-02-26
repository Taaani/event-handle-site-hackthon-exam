import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import About from "./About";
import Contect from "./Contect";
import Header from '../../Commponents/Header';
import Footer from '../../Commponents/Footer';

const Index = () => {
    return (
        <>
            <Header />
            <main>
                <Routes>

                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contect' element={<Contect />} />


                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Index