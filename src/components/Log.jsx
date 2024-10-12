export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn, turnIndex) => (
        <li key={turnIndex}>{`${turn.player} placed [${turn.square.row + 1}, ${turn.square.col + 1}]`}</li>
      ))}
    </ol>
  );
}
