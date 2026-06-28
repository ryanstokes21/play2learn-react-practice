import Button from '../Common/Button';

function MathFactsScreen() {
  return (
    <main>
      <h1>Math Facts</h1>
      <div>
        <label htmlFor="operation">Operation</label>
        <select name="operation" id="operation">
          <option value="addition">Addition</option>
          <option value="Subtraction">Subtraction</option>
          <option value="Multiplication">Multiplication</option>
        </select>
      </div>
      <div>
        <label htmlFor="maxNumber">Maximum Number</label>
        <select name="maxNumber" id="maxNumber">
          <option value="1">loop to get numbers</option>
        </select>
      </div>
      <Button to="/math-facts-game" children="go" />
      <div>
        <ol>
          <li>Choose Operation</li>
          <li>Choose Max Number</li>
          <li>
            Press <strong>Go</strong>
          </li>
          <li>How many problems can you solve in 30 seconds?</li>
        </ol>
      </div>
    </main>
  );
}

export default MathFactsScreen;
