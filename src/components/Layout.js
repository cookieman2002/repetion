import { Outlet } from "react-router-dom";

const Layout = () => {
    return ( <>
    <header>
        Layout
        <nav>
    
        </nav>
    </header>
    <main>
        <Outlet/>
    </main>
    </> );
}
 
export default Layout;