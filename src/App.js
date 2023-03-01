import axios from "axios";
import { useState, useEffect } from "react";
function App() {
  const [rating, setRating] = useState([]);
const [refreshState, setRefreshState] = useState();


  const userID = 27
  const classID = 1

  var ratingArray = [1,2,3,4,5]

  async function handleRating(e){
    try {
      const idQuery = await axios.get(`http://localhost:4000/ratings?classID=${classID}&userID=${userID}`)
      console.log(idQuery.data);

      if(idQuery.data.length){
        setRefreshState(await axios.patch(`http://localhost:4000/ratings/${idQuery.data[0].id}`, {rating: parseInt(e.target.value)}))
      }
      else{
      setRefreshState(await axios.post(`http://localhost:4000/ratings`,
      {rating: parseInt(e.target.value), classID, userID, }
      )
      
      )}

      
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    (async function() {
    try {
      const res = await axios.get("http://localhost:4000/ratings?classID=" + classID)
     const result = res.data.reduce(function(sum, item) {
      console.log(sum)
    return sum + item.rating
    }, 0)
    setRating(result / res.data.length)
    for(var  x=result; x<rating.length; x++) {
    
    }
    } catch (error) {
      
    }
    })()
  }, [refreshState]);

  


  return (
    <div className="flex">
      {ratingArray.map(item =>(<label key={item} className="w-16 h-16 border-l-2" style={{backgroundColor: item <= rating ? "orange" : "grey"}}>
        <input onChange={handleRating} type="radio" value={item} name="rating" className="hidden"  />
      </label>))}



   <p>{rating}</p>

    </div>
  );
}

export default App;
