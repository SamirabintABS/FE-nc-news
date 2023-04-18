import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />} />
      </Routes>
    </div>
  );
}

export default App;
