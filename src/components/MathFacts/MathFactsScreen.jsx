import Button from '../Common/Button';
import SelectInput from '../Common/SelectInput';
import GameInstructions from '../Common/GameInstructions';

function MathFactsScreen(props) {
  const instructions = [
    'Choose Operation',
    'Choose Max Number',
    'Press Go',
    'How many problems can you solve in 30 seconds?',
  ];

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
      <GameInstructions instructions={instructions} />
    </main>
  );
}

export default MathFactsScreen;
