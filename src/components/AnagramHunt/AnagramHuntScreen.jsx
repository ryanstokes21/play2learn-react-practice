import { Link } from 'react-router-dom';

function AnagramHuntScreen() {
  return (
    <main>
      <h1>Anagram Hunt</h1>
      <div>
        <label htmlFor="wLength">Word Length</label>
        <select id="wLength">
          <option value="5">5</option>
          <option value="7">7</option>
          <option value="9">9</option>
        </select>
      </div>
      <div>
        <ol>
          <li>Choose Word Length.</li>
          <li>
            Press <strong>Play!</strong>
          </li>
          <li>How many anagrams can you find in a minute?</li>
        </ol>
      </div>
      <Link to="/AnagramHuntGame">Play</Link>
    </main>
  );
}

export default AnagramHuntScreen;
