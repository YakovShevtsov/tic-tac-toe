import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState('X');

  function handleChangeTurn() {
    setCurrentPlayerTurn(prevPlayerTurn => {
      if(prevPlayerTurn === 'O') {
        return 'X';
      } else {
        return 'O';
      }
    });    
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"/>
          <Player initialName="Player 2" symbol="O"/>
        </ol>
        <GameBoard onChangePlayer={handleChangeTurn} symbol={currentPlayerTurn}/>
      </div>
      LOG
    </main>
  );
}

export default App;
