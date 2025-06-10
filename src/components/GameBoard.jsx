export default function GameBoard({ onSelect, gameBoard }) {
  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     const playBoard = [...prevBoard.map((innerArr) => [...innerArr])];
  //     playBoard[rowIndex][colIndex] = currentSymbol;
  //     return playBoard;
  //   });
  //   onSelect();
  // } 상태 병합

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelect(rowIndex, colIndex)}
                  disabled={playerSymbol ? true : false}
                >
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
