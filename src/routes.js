import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Error from './pages/Error';

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/pokemon/:id' element={<Pokemon />}/>
                <Route element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}