import React from 'react'
import logo from "../assets/image.jpg"
import google from "../assets/google.jpg"
import { IoEyeOutline } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { serverUrl } from '../App';
import { toast } from 'react-toastify';
import {ClipLoader} from 'react-spinners'
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';


function Signup() {
    const[show,setShow]=useState(false)
    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [role,setRole] = useState("learner")
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch();

    const handleSignup = async () => {
      setLoading(true)
      try {
        const result = await axios.post(serverUrl + "/api/auth/signup", {name , password , email} , {withCredentials:true})
        dispatch(setUserData(result.data))
        setLoading(false)
        navigate("/")
        toast.success("Signup Successfully")
      } catch (error) {
        console.log(error)
        setLoading(false)
        toast.error(error.response.data.message)
      }
    }

  return (
    <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center'>
        <form className='w-[90%] md:w-200 h-150 bg-[white] shadow-xl rounded-2xl flex' onSubmit={(e)=>e.preventDefault()} action="">
            {/*left*/}
     

        <div className='md:w-[50%] h-[100%] w-[100%]  rounded-2xl flex flex-col items-center
        justify-center gap-3'>

            <div>
                <h1 className='font-semibold text-[black] text-2xl flex justify-center'> Start your journey</h1>
                <h2 className='text-[grey] text-[18px] flex justify-center'>create your account</h2>
            </div>

            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                <label htmlFor="name" className='font-semibold'>Name</label>
             <input id='name' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] tect-[15px] px-[20px]' placeholder='Your Name' onChange={(e)=>setName(e.target.value)} value={name}/>

            </div>
             <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3'>
                <label htmlFor="Email" className='font-semibold'>Email</label>
             <input id='Email' type="text" className='border-1 w-[100%] h-[35px] border-[#e7e6e6] tect-[15px] px-[20px]' placeholder='Your Email'  onChange={(e)=>setEmail(e.target.value)} value={email}/>

            </div>

            <div className='flex flex-col gap-1 w-[80%] items-start justify-center px-3 relative'>
                <label htmlFor="Password" className='font-semibold'>Password</label>
             <input id='Password' type={show? "text" : "password"} className='border-[1px] w-[100%] h-[35px] border-[#e7e6e6] text-[15px] px-[20px]' placeholder='Your Password'  onChange={(e)=>setPassword(e.target.value)} value={password}/>
              { !show? <IoEyeOutline className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)} />:
              <IoEye  className='absolute w-[20px] h-[20px] cursor-pointer right-[5%] bottom-[10%]' onClick={()=>setShow(prev=>!prev)}  />}
            </div>

            <button className='w-[80%] h-[40px] bg-[gold] text-black flex items-center justify-center rounded-[5px] cursor-pointer' onClick={handleSignup} disabled={loading}>{loading ? <ClipLoader size={30} color='white'/>: "SignUp"}</button>
              
                <div className='w-[80%] flex items-center justify-center'>
                <div className='w-[50%] text-[slateGrey] text-[15px] flex items-center justify-center'> Or Continue</div>
              </div>
              <div className='w-[80%] h-[40px] border-1 border-[black] rounded-[7px]  flex items-center justify-center'>
                <img className='w-[80px] h-[30px] ' src={google} /></div>
              <div className='text-[#6f6f6f]'>already have an account?
                <span className='underline underline-offset-1 text-[black]' onClick={()=>navigate("/login")}> Login</span>
              </div>

        </div>
        
        {/*right*/}
         <div className='w-[50%] h-[100%] rounded-r-2xl bg-[gold]  md:flex items-center
        justify-center flex-col hidden'>
            <img src={logo} alt="logo"  className='w-[40%] h-[30%] shadow-2xl rounded-2xl border-[4px]'/>
             
        </div>

        </form>

    </div>
  )
}

export default Signup