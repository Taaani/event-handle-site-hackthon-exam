import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Frontend from '../Pages/Frontend';
import Auth from './Auth';
import Event from "../Events"
const CostomRouter = () => {
    return (
        <BrowserRouter>


            <Routes>
                <Route path="/*" element={<Frontend />} />
                <Route path="/auth*" element={<Auth />} />
                <Route path='/event*' element={<Event />} />
            </Routes>



        </BrowserRouter>
    )
}

export default CostomRouter;