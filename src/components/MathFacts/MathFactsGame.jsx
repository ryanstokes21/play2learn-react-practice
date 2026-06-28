import Button from '../Common/Button';
import GameOver from '../Common/GameOver';

function MathFactsGame() {
  let operation = 'Addition';
  let score = 0;
  let timeLeft = 0;
  if (timeLeft === 0) {
    return (
      <main>
        <GameOver
          gameTitle="Math Facts"
          operation={operation}
          scoreMessage="Your final score is:"
          score={score}
        />
        <Button to="/math-facts" children="Play Again" />
        <Button to="/" children="Back to Start Screen" />
      </main>
    );
  }

  return (
    <main>
      <h1>Math Facts</h1>
      <p>Operation</p>
      <p>2 + 2</p>
      <input type="text" readOnly />
      <div className="keyboard">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
        <button>Clear</button>
      </div>
      <p>score: 0</p>
      <p>Time Left: {timeLeft}</p>
    </main>
  );
}

export default MathFactsGame;
