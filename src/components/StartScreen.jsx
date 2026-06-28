function StartScreen() {
  return (
    <main>
      <div className="card">
        <h2>Anagram Hunt</h2>
        <p>
          Do you like scrabble? Words with friends? Improve how fast you can
          recognize anagrams in a word with this neat little game.
        </p>
        <div className="button-section">
          <button>play</button>
        </div>
      </div>
      <div className="card">
        <h2>Math Facts</h2>
        <p>Improve your mental math skills with this game.</p>
        <div className="button-section">
          <button>play</button>
        </div>
      </div>
    </main>
  );
}

export default StartScreen;
