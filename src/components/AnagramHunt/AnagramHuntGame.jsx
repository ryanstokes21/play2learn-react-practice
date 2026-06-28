import Button from '../Common/Button';
import GameOver from '../Common/GameOver';

function AnagramHuntGame() {
  let score = 0;
  let timeLeft = 0;
  if (timeLeft === 0) {
    return (
      <main>
        <GameOver
          gameTitle="Anagram Hunt"
          scoreMessage="You Got:"
          score={score}
          scoreUnit="Anagrams"
        />
        <Button to="/anagram-hunt" children="Play Again" />
        <Button to="/" children="Back to Start Screen" />
      </main>
    );
  }

  return (
    <main>
      <h1>Anagram Hunt</h1>
      <div>
        <p>Score: 1</p>
        <p>Time Left: {timeLeft}</p>
      </div>
      <div>
        <p>Anagram(# of anagrams left)</p>
        <input type="text" />
      </div>
      <div>
        <ol>
          <li>Add correct anagrams in list</li>
        </ol>
      </div>
    </main>
  );
}

export default AnagramHuntGame;
