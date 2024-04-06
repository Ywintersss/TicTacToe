import React, { useState } from 'react';
import './App.css';
import './components/square'
import Game from './components/game';

function App() {
  const [playerTurn, setPlayerTurn] = useState("X");

  return (
    <div className="App">
      <span className='title'>Tic Tac Toe</span>
      <Game playerTurn={playerTurn} setPlayerTurn={setPlayerTurn}></Game>
      <div className='bottom'>
        <span>Player "{ playerTurn }"s turn</span>

      </div>
    </div>
  );
}

export default App;
