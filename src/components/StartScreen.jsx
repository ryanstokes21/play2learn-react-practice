import Button from './Common/Button';

function StartScreen() {
  return (
    <main>
      <h1>
        Play<span>2</span>Learn
      </h1>
      <div className="card">
        <h2>Anagram Hunt</h2>
        <p>
          Do you like scrabble? Words with friends? Improve how fast you can
          recognize anagrams in a word with this neat little game.
        </p>
        <div className="button-section">
          <Button to="/anagram-hunt" children="play" />
        </div>
      </div>
      <div className="card">
        <h2>Math Facts</h2>
        <p>Improve your mental math skills with this game.</p>
        <div className="button-section">
          <Button to="/math-facts" children="play" />
        </div>
      </div>
    </main>
  );
}

export default StartScreen;
