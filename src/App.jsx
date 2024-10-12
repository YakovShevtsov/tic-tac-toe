import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";



function App() {
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleChangeTurn(rowIndex, colIndex) {
    setCurrentPlayerTurn((prevPlayerTurn) =>
      prevPlayerTurn === "X" ? "O" : "X"
    );

    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";

      if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
        currentPlayer = "O";
      }

      const newGameTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayerTurn,
        },
        ...prevGameTurns,
      ];

      return newGameTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol
          id="players"
          className="highlight-player"
        >
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
          gameTurns={gameTurns}
          symbol={currentPlayerTurn}
          onSelectSquare={handleChangeTurn}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
