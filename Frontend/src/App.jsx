import React from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/home.jsx'

import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
export const serverUrl = "http://localhost:8000"
import {ToastContainer} from "react-toastify"

import getCurrentUser from './customHooks/getCurrentUser.js'

function App() {
  getCurrentUser();
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path ='/' element={<Home/>}/>
        <Route path ='/signup' element={<Signup/>}/>
          <Route path ='/login' element={<Login/>}/>
    </Routes>
    
    </>
  )
}

export default App