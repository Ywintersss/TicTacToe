import React, {useState} from "react";
import './square.css';

export default function Square({ turn }){
    const [value, setValue] = useState(null);

    function handleClick(){
        setValue({ turn });
    }

    return(
        <div className="square">{ value ? value : <button onClick={handleClick}></button>}</div>
    )
}