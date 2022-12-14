import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import GameBoard from './container/GameBoard'
import FlappyBirds from './container/FlappyBirds';
import NavBar from './components/NavBar';
import ChessBoard from './container/Chess';
import { HomePage } from './container/HomePage';
import CandyCrush from './container/CandyCrush';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/checkers" element={<GameBoard/>}/>
          <Route path="/bird" element={<FlappyBirds/>}/>
          <Route path="/chess" element={<ChessBoard/>}/>
          <Route path="/candycrush" element={<CandyCrush/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
