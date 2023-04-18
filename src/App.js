import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header';
import ArticleList from './components/ArticlesList';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
      </Routes>
    </div>
  );
}

export default App;
