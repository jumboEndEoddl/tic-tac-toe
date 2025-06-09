export default function Log({ turns }) {
  return (
    <ol>
      {turns.map((turn) => (
        <li key={`${turn.square.col}${turn.square.row}`}>
          {turn.player} selected {turn.square.col}, {turn.square.row}
        </li>
      ))}
    </ol>
  );
}
