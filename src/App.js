import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, About } from './routes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
