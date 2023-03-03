import axios from "axios";
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../components/TokenProvider";
import useCookie from "react-use-cookie"

const Login = () => {
    const {setToken, token} = useContext(TokenContext)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const [, setTokenCookie] = useCookie("trainer-token", "")
async function handleSubmit(e){
    e.preventDefault()
    try {
        setLoading(true)
        const res = await axios.post("http://localhost:4000/auth/token", {
        username: e.target.username.value,
        password: e.target.password.value
    })
    console.log(res.status)
    if(res.status === 200){
        
        if(e.target.remember.checked){
            const miliseconds = res.data.validUntil - Date.now()
            const validFor = miliseconds / (1000 * 60 * 60 * 24)
            setTokenCookie(JSON.stringify(res.data), {
                days: validFor,
                SameSite: "Strict"
            })
        }
            setToken(res.data)
            
        }
    } catch (error) {
        
    }
    finally{
        setLoading(false)
    }
}
useEffect(() => {
    
    if(token){
        navigate("/profile")
        
    }
}, [token, navigate]);

    return ( 
    <div>
        <h1>Login</h1>
    <motion.form 
    initial={{scale: 0}}
     animate={{ scale: 1 }}
     transition={{ delay: 0.2 }}
    onSubmit={handleSubmit} 
    className="bg-black mr-7 ml-7 rounded-xl gap-7 pb-5 flex flex-col items-center justify-center">
        <label className="flex text-white flex-col">
            Username
        <input type="text" name="username" className="rounded-xl text-black" />
        </label>
        <label className="text-white flex flex-col">
        Password
        <input type="password" className="text-black rounded-xl" name="password" />
        </label>

        <label className="text-white flex gap-2">
            Remember me
            <input type="checkbox" name="remember"/>
        </label>
        <button type="submit" className="text-white animate-spin" >Log ind</button>
        {loading && <div className="w-20 h-20 rounded-full animate-spin
        border-y-4 border-solid  border-blue-500 border-t-transparen">

        </div> }
    </motion.form> 
    </div>);
}
 
export default Login;