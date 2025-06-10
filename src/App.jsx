import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning.js";
import GameOver from "./components/GameOver.jsx";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}
const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState({
    O: "Player 1",
    X: "Player 2",
  });

  function handleNameChange(symbol, user) {
    setPlayerName((prevValue) => {
      return {
        ...prevValue,
        [symbol]: user,
      };
    });
  }

  const gameBoard = [...initialBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { col, row } = square;

    gameBoard[col][row] = player;
  }

  let activePlayer = deriveActivePlayer(gameTurns);

  function handleReStart() {
    setGameTurns([]);
  }

  function handleClick(colIndex, rowIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { col: colIndex, row: rowIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const fSymbol = gameBoard[combination[0].row][combination[0].column];
    const sSymbol = gameBoard[combination[1].row][combination[1].column];
    const tSymbol = gameBoard[combination[2].row][combination[2].column];

    if (fSymbol && fSymbol == sSymbol && fSymbol == tSymbol) {
      winner = playerName[fSymbol];
    }
  }
  const draw = gameTurns.length === 9 && !winner;
  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <main>
        <div>
          <ol className="highlight-player">
            <Player
              user={playerName.O}
              symbol={"O"}
              isActive={activePlayer === "O"}
              playerName={handleNameChange}
            />
            <Player
              user={playerName.X}
              symbol={"X"}
              isActive={activePlayer === "X"}
              playerName={handleNameChange}
            />{" "}
          </ol>
          {(winner || draw) && (
            <GameOver winner={winner} draw={draw} reStart={handleReStart} />
          )}
          <GameBoard
            onSelect={handleClick}
            turns={gameTurns}
            gameBoard={gameBoard}
          />
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;

// 플레이어 컴포넌트 불러오기
//게임보드 컴포넌트 불러오기
