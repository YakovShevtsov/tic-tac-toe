import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function getCurrentPlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const currentPlayer = getCurrentPlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  let winner;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const hasDraw = !winner && gameTurns.length === 9;

  function handleMakeTurn(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = getCurrentPlayer(prevGameTurns);

      const newGameTurns = [
        {
          square: { row: rowIndex, col: colIndex },
          player: currentPlayer,
        },
        ...prevGameTurns,
      ];

      return newGameTurns;
    });
  }

  function handleRestartGame() {
    setGameTurns(() => []);
  }

  return (
    <main>
      <div id="game-container">
        {(winner || hasDraw) && (
          <GameOver
            winnerPlayer={winner}
            hasDraw
            onRestartGame={handleRestartGame}
          />
        )}
        <ol
          id="players"
          className="highlight-player"
        >
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={currentPlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={currentPlayer === "O"}
          />
        </ol>
        <GameBoard
          board={gameBoard}
          onSelectSquare={handleMakeTurn}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
