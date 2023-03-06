import { useState } from "react";

export default function useSelect(options){

    const [selected, setSelected] = useState("Vælg noget");

const selectHandler = (e) => {
    setSelected(e.target.value)
}

const selection = (<select onChange={selectHandler}> 
        <option defaultValue>vælg selv</option> 
        {options.map((item, index) => ( <option key={index} >{item}</option> ))}
        </select>)
return {selected, selection}

}