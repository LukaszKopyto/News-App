import React, { useState, useEffect } from 'react';
import { API } from '../../api';
import { fetchArticles } from '../../helpers';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles(API, setArticles);
    return () => {};
  }, []);

  return (
    <>
      <h1>News App</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.webTitle}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
