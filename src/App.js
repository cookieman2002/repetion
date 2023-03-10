import axios from "axios";
import { useState, useEffect } from "react";
function App() {
const [data, setData] = useState();
// const [showModal, setShowModal] = useState("none");
// const [deleteId, setDeleteId] = useState();
// const [showForm, setShowForm] = useState(false);

useEffect(() => {
  (async function(){
    try {
      
      const res = await axios.get("https://fitness-verden-api.onrender.com/api/v1/classes")
      const data = res.data
      setData(data)
      const trainers = data.map(item => item.trainer.id)
      
      const promises = trainers.map(async trainerId => {
        const response = await axios.get(`https://fitness-verden-api.onrender.com/api/v1/trainers/${trainerId}`)
        console.log(response.data)
      })
      
      await Promise.all(promises)
    } catch (error) {
      console.log(error) 
    }
    
  
  }())

}, []);

console.log(data)

// async function confirmDelete(id){
// if(showModal === "flex" && deleteId){
// await axios.delete("http://localhost:4000/posts/"+ deleteId)
// setDeleteId(undefined)
// setShowModal("none")
// }


//   setShowModal("flex")
// }
// async function submitHandler(e){
// e.preventDefault()
// console.log(e.target.title.value)
// }
  return (
    <ul className="flex flex-col">

    {/* <button onClick={() => setShowForm(true)}>Create post</button>

    {showForm ? <div> <button onClick={() => setShowForm(!showForm)} className="bg-white">close</button> <form className="rounded-xl bg-black flex flex-col items-center mr-4 ml-4 " onSubmit={submitHandler}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="content" name="content" />
      <input type="text" placeholder="author" name="author" />
      <div className="flex gap-5">
      
      <button className="bg-white">Submit</button>
      </div>
    </form> </div> : null} */}

      {/* {data ? data.map(item => ( */}
      {/* //  <li  key={item.id}>  */}
        {/* <p className="text-xl font-extrabold" >{item.className}</p> */}
        {/* <p>{item.trainer.trainerName} - {new Date(item.createdAt).toLocaleDateString()}</p> */}
        {/* <button className="border bg-red-500 ml-5 border-blue-400" onClick={() => {confirmDelete(); setDeleteId(item.id)}}>Slet</button> */}
      
    
      {/* </li>)) : null} */}
      {/* <div className="gap-5 flex" style={{display: showModal}}>
        <button className="bg-red-600" onClick={() => confirmDelete()}>ja</button>
        <button className="bg-green-700" onClick={() => setShowModal("none")}>nej</button>
      </div> */}
    </ul>
  );
}

export default App;
