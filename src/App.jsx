import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";

function App() {
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState("X");

  function handleChangeTurn() {
    setCurrentPlayerTurn((prevPlayerTurn) => prevPlayerTurn === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayerTurn === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayerTurn === "O"}
          />
        </ol>
        <GameBoard
          onChangePlayer={handleChangeTurn}
          symbol={currentPlayerTurn}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
