import Button from '../Common/Button';
import SelectInput from '../Common/SelectInput';

function MathFactsScreen(props) {
  const operations = [
    ['Addition', '+'],
    ['Subtraction', '-'],
    ['Multiplication', 'x'],
    ['Division', '÷'],
  ];

  const numbers = [];
  for (let number = 1; number <= 50; number++) {
    numbers.push([number, number]);
  }

  return (
    <main>
      <h1>Math Facts</h1>
      <SelectInput
        label="Operation"
        id="operation"
        currentValue={props.operation}
        setCurrentValue={props.setOperation}
        values={operations}
      />

      <SelectInput
        label="Maximum Number"
        id="max-number"
        currentValue={props.maxNumber}
        setCurrentValue={props.setMaxNumber}
        values={numbers}
      />
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
