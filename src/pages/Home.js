import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../components/TokenProvider";


const Home = () => {
    const [classes, setClasses] = useState([]);
    const { token} = useContext(TokenContext)
    console.log(token)
useEffect(() => {
    (async function(){
        try {
            const res = await axios.get("http://localhost:4000/api/v1/classes")
            setClasses(res.data)
            
        } catch (error) {
            
        }
    })()
}, []);

async function subscribeHandler(e){
    console.log(e)
    try {
        const res = await axios.post(`http://localhost:4000/api/v1/users/${token.userId}/classes/${e.target.dataset.id}`, undefined, {
            headers: {
                authorization: "Bearer " + token.token
            }
        })
        console.log(res)
        
    } catch (error) {
        console.log(error)
    }
}

    return ( <div>
        {classes.map(item => <div>  
            <p>{item.className}</p>
            <button onClick={subscribeHandler} data-id={item.id} className="bg-gray-500">Tilmeld</button>
            </div>)}
    </div> );
}
 
export default Home;