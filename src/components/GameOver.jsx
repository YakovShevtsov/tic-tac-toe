export default function GameOver({ winnerPlayer }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winnerPlayer && <p>Player "{winnerPlayer}" won</p>}
      {!winnerPlayer && <p>Draw!</p>}
      <button>Restart</button>
    </div>
  );
}
