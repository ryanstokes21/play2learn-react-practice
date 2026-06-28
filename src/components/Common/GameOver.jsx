function GameOver({ gameTitle, operation, score, scoreMessage, scoreUnit }) {
  return (
    <section>
      <h1>{gameTitle}</h1>
      {operation && <p>{operation}</p>}

      <div>
        <h2>Times Up!</h2>
        <p>{scoreMessage}</p>
        <p>{score}</p>

        {scoreUnit && <p>{scoreUnit}</p>}
      </div>
    </section>
  );
}

export default GameOver;
