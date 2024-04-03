import React from "react";
import Square from './square'
import './game.css'

export default function Game(){

    return (
        <div className="container">
            {Array.from({length: 9}).map((_,i) => <Square key={i}></Square>)}
        </div>
    )
}