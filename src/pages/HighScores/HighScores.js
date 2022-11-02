import useAllHighScores from "../../hooks/useAllHighScores";

export default function HighScores() {
  const { allScores } = useAllHighScores();

  return (
    <div>
      {allScores.map((score) => (
        <p>{score.userName || score.username}</p>
      ))}
    </div>
  );
}
