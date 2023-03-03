import { createContext, useState, useEffect } from "react";
import { getCookie } from "react-use-cookie";
export const TokenContext = createContext(null) 

export default function TokenProvider({children}){

    const [token, setToken] = useState(null)
    
    useEffect(() => {
        if(!token){
            const cookieToken = getCookie("trainer-token")
            if(cookieToken){
                setToken(JSON.parse(cookieToken))
            }    
        }
    
}, [token]);


    return <TokenContext.Provider value={{token, setToken}}>{children}</TokenContext.Provider>
 }