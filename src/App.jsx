import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleClick() {
    return setActivePlayer((player) => (player === "X" ? "O" : "X"));
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
            <GameBoard onSelect={handleClick} currentSymbol={activePlayer} />
          </ol>
        </div>
        LOG
      </main>
    </>
  );
}

export default App;

// 플레이어 컴포넌트 불러오기
//게임보드 컴포넌트 불러오기
