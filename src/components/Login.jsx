import axios from 'axios';
import React, { useState } from 'react'
import { server_url } from '../utils/constant.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/userSlice.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error,setError] = useState("");
    const handleLoginHook = async()=>{
        try {
            const res = await axios.post(`${server_url}/login`,{email,password},{withCredentials:true});
            dispatch(addUser(res?.data?.user));
            return navigate("/");
            
        } catch (error) {
            setError(error?.response?.data?.message);
            console.log(error)    
        }
    }
  return (
    <div className='flex justify-center items-center m-auto max-h-screen flex-col'>
        <p className='p-10 text-3xl'>Login </p>
        <div className='flex flex-col gap-4 justify-center w-80 '>
            <input type="email" placeholder="Email Id" className="input input-secondary" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Password" className="input input-accent" value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            {error && <p className='text-red-500'> {error} !!!</p>}
            <button className="btn btn-primary" onClick={()=>handleLoginHook()}>Login</button>
        </div>

    </div>
  )
}

export default Login



// "email": "nandinid@gmail.com",
    // "password": "Swarn1@11"