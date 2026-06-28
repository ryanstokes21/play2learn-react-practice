import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartScreen from './components/StartScreen';
import AnagramHuntScreen from './components/AnagramHunt/AnagramHuntScreen';
import MathFactsScreen from './components/MathFacts/MathFactsScreen';
import MathFactsGame from './components/MathFacts/MathFactsGame';
import AnagramHuntGame from './components/AnagramHunt/AnagramHuntGame';

function App() {
  const [operation, setOperation] = useState('x');
  const [maxNumber, setMaxNumber] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/anagram-hunt" element={<AnagramHuntScreen />} />
      <Route path="/anagram-hunt-game" element={<AnagramHuntGame />} />
      <Route
        path="/math-facts"
        element={
          <MathFactsScreen
            operation={operation}
            setOperation={setOperation}
            maxNumber={maxNumber}
            setMaxNumber={setMaxNumber}
          />
        }
      />
      <Route path="/math-facts-game" element={<MathFactsGame />} />
    </Routes>
  );
}

export default App;
