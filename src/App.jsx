import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  function handleClick(colIndex, rowIndex) {
    setActivePlayer((player) => (player === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
      let currentPlayer = "X";

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { col: colIndex, row: rowIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <main>
        <div>
          <ol className="highlight-player">
            <Player
              user={"player 1"}
              symbol={activePlayer}
              isActive={activePlayer === "O"}
            />
            <Player
              user={"player 2"}
              symbol={activePlayer}
              isActive={activePlayer === "X"}
            />
            <GameBoard onSelect={handleClick} turns={gameTurns} />
          </ol>
        </div>
        <Log turns={gameTurns} />
      </main>
    </>
  );
}

export default App;

// 플레이어 컴포넌트 불러오기
//게임보드 컴포넌트 불러오기
