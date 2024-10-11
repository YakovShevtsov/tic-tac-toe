import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleToggleEdit() {
    setIsEditing((prevState) => {
      return !prevState;
    });
  }

  function handleChangingName(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : null}>
      <span className="player">
        {isEditing ? (
          <input
            value={playerName}
            onChange={handleChangingName}
            type="text"
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleToggleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
