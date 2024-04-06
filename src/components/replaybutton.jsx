import React from "react";
import './replaybutton.css'

export default function ReplayButton({handleClick}) {
    // handleClick = replay()
    return (
        <div className="replay-button">
            <button onClick={handleClick}>Replay</button>
        </div>
    )
}
