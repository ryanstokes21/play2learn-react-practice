import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartScreen from './components/StartScreen';
import AnagramHuntScreen from './components/AnagramHunt/AnagramHuntScreen';
import MathFactsScreen from './components/MathFacts/MathFactsScreen';
import MathFactsGame from './components/MathFacts/MathFactsGame';
import AnagramHuntGame from './components/AnagramHunt/AnagramHuntGame';

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/AnagramHunt" element={<AnagramHuntScreen />} />
      <Route path="/AnagramHuntGame" element={<AnagramHuntGame />} />
      <Route path="/MathFacts" element={<MathFactsScreen />} />
      <Route path="/MathFactsGame" element={<MathFactsGame />} />
    </Routes>
  );
}

export default App;
