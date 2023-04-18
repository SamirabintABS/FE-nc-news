import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Header />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
