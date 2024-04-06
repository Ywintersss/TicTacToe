import React from "react";
import ReplayButton from './replaybutton'
import './gamePrompt.css'

export default function GamePrompt({gameOver, playerTurn, handleClick}) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-text">
                    <h1>Game Over</h1>
                    {gameOver ? <h2>{playerTurn} wins</h2> : <h2>Draw</h2>}
                </div>
                <ReplayButton handleClick={handleClick} />
            </div>
        </div>
    )
}
