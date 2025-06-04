import Player from "./components/Player";

function App() {
  return (
    <>
      <h1>React Tic-Tac-Toe</h1>
      <ol>
        <div>
          <Player user={"player 1"} symbol={"O"} />
          <Player user={"player 2"} symbol={"X"} />
          Game Board
        </div>
      </ol>
    </>
  );
}

export default App;

// 플레이어 컴포넌트 불러오기
//게임보드 컴포넌트 불러오기
