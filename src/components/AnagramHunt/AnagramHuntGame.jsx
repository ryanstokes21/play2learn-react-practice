import { Link } from 'react-router-dom';

function AnagramHuntGame() {
  let timeLeft = 60;
  if (timeLeft === 0) {
    return (
      <main>
        <h1>Anagram Hunt</h1>
        <div>
          <p>Times Up!</p>
          <p>you got</p>
          <p>score</p>
          <p>Anagrams</p>
        </div>
        <Link to="/AnagramHunt">Play Again</Link>
        <Link to="/">Start Screen</Link>
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
