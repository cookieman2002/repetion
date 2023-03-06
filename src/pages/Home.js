import useAxios from "../hooks/useAxios";
import useSelect from "../hooks/useSelect";

const Home = () => {

    const {data, loading, error} = useAxios(
        {
            url: "http://localhost:4000/api/v1/classes"
        }
        )
    const {selection} = useSelect(data?.map(item => item.className) ?? [])



    console.log(data)
    return ( <div>
        <h1>Home</h1>
        {loading ?  <div className="absolute top-52 left-40  w-20 h-20 rounded-full animate-spin
        border-y border-solid  border-black border-t-transparent">
        </div> : selection }
        <pre>{error}</pre>
    </div> );
}
 
export default Home;