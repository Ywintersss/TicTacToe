import React, { useEffect, useState } from "react";
import Square from './square'
import GamePrompt from './gamePrompt'
import './game.css'

export default function Game({playerTurn, setPlayerTurn}) {
    const boardInit = [
        [null, null, null], 
        [null, null, null], 
        [null, null, null]
    ];

    const [board, setBoard] = useState(boardInit);
    const [win, setWin] = useState(false);
    const [moves, setMoves] = useState(0);
    const [reset, setReset] = useState(false);

    const checkWin = () => {
        for (let i = 0; i < board.length; i++) {
            // check rows
            if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== null) {
                return true;
            }
            // check columns
            if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== null) {
                return true;
            }
            // check diagonals
            if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== null) {
                return true;
            }
            if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== null) {
                return true;
            }
        }
        if (moves === 9) {
            return false;
        }

        return;
    }
    const handleClick = (value, col, row, setSquareValue) => {
        // sets the value of the square (X or O)
        setSquareValue(value)

        // increments the number of moves
        setMoves(moves + 1);

        // updates the board
        const newBoard = board;
        newBoard[col][row] = playerTurn;
        setBoard(newBoard);

        // checks if the game has been won
        if (checkWin()) {
            setWin(true);
            return;
        }

        // changes the players turn
        setPlayerTurn(playerTurn === "X" ? "O" : "X");
    }

    const replay = () => {
        setBoard(boardInit);
        setWin(false);
        setMoves(0);
        setPlayerTurn("X");
        setReset(true);
    }   

    return (
        <div className="container">
            <div className="tic-tac-toe">
                {Array.from({length: 9}).map((_,i) => 
                <Square 
                key={i} 
                playerTurn={playerTurn} 
                handleClick={handleClick}
                index={i}
                reset={reset}
                setReset={setReset}
                ></Square>)}
            </div>
            {(win || moves === 9) && <GamePrompt gameOver={win} playerTurn={playerTurn} handleClick={replay}></GamePrompt>}
        </div>
    )
}