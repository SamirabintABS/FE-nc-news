import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation/Navigation.jsx';
import Header from './components/Header';
import ArticleList from './components/ArticlesList';
import { useState } from 'react';

function App() {

  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <Navigation />
            <Header />
            <ArticleList articles={articles} setArticles={setArticles} />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
