import StartScreen from './StartScreen';
import AnagramHuntScreen from './AnagramHunt/AnagramHuntScreen';
import AnagramHuntGame from './AnagramHunt/AnagramHuntGame';
import MathFactsScreen from './MathFacts/MathFactsScreen';
import MathFactsGame from './MathFacts/MathFactsGame';

function Main() {
  return (
    <>
      <h1>
        Play<span>2</span>Learn
      </h1>
      <StartScreen />
      <AnagramHuntScreen />
      <AnagramHuntGame />
      <MathFactsScreen />
      <MathFactsGame />
    </>
  );
}

export default Main;
