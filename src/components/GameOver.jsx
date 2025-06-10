export default function GameOver({ winner, draw, reStart }) {
  return (
    <ol>
      {winner && <div>{winner} is won</div>}
      {draw && <div>game is draw</div>}
      <button onClick={reStart}>Restart</button>
    </ol>
  );
}
