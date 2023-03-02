import { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { TokenContext } from "./TokenProvider";

const ProtectedLayout = () => {

const {token} = useContext(TokenContext)
const navigate = useNavigate()

if(!token){
    navigate("/login")
}

    return ( <>
        <header>
            <nav className="flex gap-5">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
        </> );
}
 
export default ProtectedLayout;