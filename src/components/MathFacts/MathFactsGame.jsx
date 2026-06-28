function MathFactsGame() {
  let timeLeft = 30;
  if (timeLeft === 0) {
    return (
      <main>
        <h2>Math Facts</h2>
        <p>Operation</p>
        <p>Times Up!</p>
        <p>Your final score is:</p>
        <p>7</p>
        <button>Play Again</button>
        <button>Start Screen</button>
      </main>
    );
  }

  return (
    <main>
      <h2>Math Facts</h2>
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
      <p>Time Left: 60</p>
    </main>
  );
}

export default MathFactsGame;
