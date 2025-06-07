import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, currentSymbol }) {
  const [gameBoard, setGameBoard] = useState(initialBoard);

  function handleClick(rowIndex, colIndex) {
    setGameBoard((prevBoard) => {
      const playBoard = [...prevBoard.map((innerArr) => [...innerArr])];
      playBoard[rowIndex][colIndex] = currentSymbol;
      return playBoard;
    });
    onSelect();
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleClick(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
