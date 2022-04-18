import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Pokemon from './pages/Pokemon';
import Error from './pages/Error';
import Header from "./components/Header";

export default function Router({setTheme, theme}) {
    return(
        <BrowserRouter>
            <Header setTheme={setTheme} theme={theme}/>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/pokemon/:id' element={<Pokemon />}/>
                <Route path='*' element={<Error />}/>
            </Routes>
        </BrowserRouter>
    )
}