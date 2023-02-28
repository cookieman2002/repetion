import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [detailsData, setDetailsData] = useState([]);

  useEffect(() => {
   (async function() {
    try {
      const res = await axios.get("http://localhost:4000/posts")
      setData(res.data)
    } catch (error) {
      
    }
   })()
  }, []);
  async function detail(id){
    try {
      const res = await axios.get(`http://localhost:4000/posts/${id}`)
      setDetailsData(res.data)
    } catch (error) {
      
    }

  }

  


  return (
    <div className="flex flex-col">
    {data.map(item => (
      <div>
      <button onClick={() => detail(item.id)}>{item.title}</button>
      </div>
    ))}
    <h1 className="text-blue-600" >{detailsData.title}</h1>
      <p className="text-red-600">{detailsData.desc}</p>


    </div>
  );
}

export default App;
