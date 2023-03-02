import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
    return ( <>
    <header>
        <nav className="flex gap-5">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login" >Login</NavLink>
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </> );
}
 
export default Layout;