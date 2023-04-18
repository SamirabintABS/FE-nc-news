import { Routes, Route } from 'react-router-dom';
import './styles/App.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header';
import ArticleList from './components/ArticlesList';
import ArticleCard from './components/ArticleCard';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path='/:article_id' element={<ArticleCard />} />
      </Routes>
    </div>
  );
}

export default App;
