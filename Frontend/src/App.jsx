import React from 'react'
import { Routes , Route, Navigate} from 'react-router-dom'
import Home from './pages/home.jsx'

import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'
export const serverUrl = "http://localhost:8000"
import {ToastContainer} from "react-toastify"

import getCurrentUser from './customHooks/getCurrentUser.js'
import { useSelector } from 'react-redux'
import ForgetPassword from './pages/ForgetPassword.jsx'


function App() {
  getCurrentUser();
  const {userData}= useSelector(state=>state.user)
  return (
    <>
    <ToastContainer />
    <Routes>
      <Route path ='/' element={<Home/>}/>
        <Route path ='/signup' element={!userData? <Signup/>:<Navigate to={"/"}/>}/>
          <Route path ='/login' element={<Login/>}/>
            <Route path ='/profile' element={userData?<Profile/>:<Navigate to={"/Signup"}/>}/>
               <Route path ='/forget' element={userData?<ForgetPassword/>:<Navigate to={"/Signup"}/>}/>
    </Routes>
    
    </>
  )
}

export default App