const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, turns }) {
  const gameBoard = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { col, row } = square;

    gameBoard[col][row] = player;
  }

  // const [gameBoard, setGameBoard] = useState(initialBoard);

  // function handleClick(rowIndex, colIndex) {
  //   setGameBoard((prevBoard) => {
  //     const playBoard = [...prevBoard.map((innerArr) => [...innerArr])];
  //     playBoard[rowIndex][colIndex] = currentSymbol;
  //     return playBoard;
  //   });
  //   onSelect();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelect(rowIndex, colIndex)}>
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
