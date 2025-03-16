import axios from 'axios';
import React, { useState } from 'react'
import { server_url } from '../utils/constant.js';

const Login = () => {
    const [email,setEmail] = useState();
    const [password, setPassword] = useState();
    const handleLoginHook = async()=>{
        try {
            const res = await axios.post(`${server_url}/login`,{email,password})
            console.log(res)
            
        } catch (error) {
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
            <button className="btn btn-primary" onClick={()=>handleLoginHook()}>Login</button>
        </div>

    </div>
  )
}

export default Login