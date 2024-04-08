import { useState } from 'react'
import './App.css'
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
    <>

<BrowserRouter>
      <Routes>

        <Route path="/" element={<Home/> }></Route>
        <Route path="/Register" element={<Register/> }></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>


    </>
  )
}

export default App
