import Button from '../Common/Button';
import GameInstructions from '../Common/GameInstructions';
import SelectInput from '../Common/SelectInput';

function AnagramHuntScreen({ wordLength, setWordLength }) {
  const instructions = [
    'Choose Word Length.',
    'Press Play!',
    'Press <strong>Play!',
  ];

  const wordLengths = [
    ['5 Letters', '5'],
    ['6 Letters', '6'],
    ['7 Letters', '7'],
    ['8 Letters', '8'],
  ];

  return (
    <main>
      <h1>Anagram Hunt</h1>
      <SelectInput
        label="Word Length"
        id="wLength"
        currentValue={wordLength}
        setCurrentValue={setWordLength}
        values={wordLengths}
      />
      <GameInstructions instructions={instructions} />
      <Button to="/anagram-hunt-game" children="Play" />
    </main>
  );
}

export default AnagramHuntScreen;
