function AnagramHuntGame() {
  let timeLeft = 60;
  if (timeLeft === 0) {
    return (
      <main>
        <h2>Anagram Hunt</h2>
        <div>
          <p>Times Up!</p>
          <p>you got</p>
          <p>score</p>
          <p>Anagrams</p>
        </div>
        <button>Play Again</button>
        <button>Start Screen</button>
      </main>
    );
  }

  return (
    <main>
      <h2>Anagram Hunt</h2>
      <div>
        <p>Score: 1</p>
        <p>Time Left: 60</p>
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
