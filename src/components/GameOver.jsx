export default function GameOver({ winnerPlayer, onRestartGame }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winnerPlayer && <p>{winnerPlayer} won</p>}
      {!winnerPlayer && <p>Draw!</p>}
      <button onClick={onRestartGame}>Restart</button>
    </div>
  );
}
