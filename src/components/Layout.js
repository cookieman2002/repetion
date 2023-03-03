import { useContext, useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate} from "react-router-dom";
import { setCookie } from "react-use-cookie";
import { TokenContext } from "./TokenProvider";

const Layout = () => {
const {token, setToken} = useContext(TokenContext)
const [showModal, setShowModal] = useState("none");
const navigate = useNavigate()


function confirmDelete(){
    if(showModal === "flex" && token){
    setToken(null)
    setCookie("trainer-token", "", {
    days: 0
    })

navigate("/")

    }
    
    
      setShowModal("flex")
    }
    useEffect(() => {
        setShowModal("none")
    }, [token]);

    return ( <>
    <header>
        <nav className="flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            {token ? <button onClick={confirmDelete} >Log Out</button> : <NavLink to="/login" >Login</NavLink> }
        </nav>
        <div className="gap-5 flex" style={{display: showModal}}>
        <button className="bg-red-600" onClick={() => confirmDelete()}>ja</button>
        <button className="bg-green-700" onClick={() => setShowModal("none")}>nej</button>
      </div>
    </header>
    <main>
        <Outlet/>
    </main>
    </> );
}
 
export default Layout;