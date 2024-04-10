import React, {useEffect, useState} from "react";
import './square.css';

export default function Square({ playerTurn, handleClick, index, reset, setReset }) {
    const [value, setValue] = useState(null);
    const setSquareValue = () => {
        if (value) return true;
        setValue(playerTurn);
    }

    // Watch for changes in the reset prop and reset the square value
    useEffect(() => {
        setValue(null);
        if (reset) {
            setReset(false);
        }
    }, [reset]);

    return(
        <div className="square" onClick={() => handleClick(playerTurn, Math.floor(index / 3), index % 3, setSquareValue)}>
            <span>{value}</span>
        </div>
    )
}