import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onChangePlayer, symbol}) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);


  function handleRegisterTurn(rowIndex, colIndex, playerSymbol) {
    setGameBoard((prevTurns) => {
      let newTurns = [...prevTurns];
      newTurns[rowIndex][colIndex] = playerSymbol;
      return newTurns;
    });
    onChangePlayer();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {        
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                
                return (
                  <li key={colIndex}>
                    <button
                      onClick={() =>
                        handleRegisterTurn(rowIndex, colIndex, symbol)
                      }
                    >
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
