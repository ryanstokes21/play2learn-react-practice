import Button from '../Common/Button';
import GameOver from '../Common/GameOver';
import ScoreDisplay from '../Common/ScoreDisplay';
import TimeLeft from '../Common/TimeLeft';
import NumberKeypad from './NumberKeypad';

function MathFactsGame() {
  let operation = 'Addition';
  let score = 0;
  let timeLeft = 30;
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
      <NumberKeypad />
      <ScoreDisplay score={score} />
      <TimeLeft timeLeft={timeLeft} />
    </main>
  );
}

export default MathFactsGame;
