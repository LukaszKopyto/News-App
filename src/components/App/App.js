import React, { useState, useEffect } from 'react';
import { API } from '../../api';
import { fetchArticles, source } from '../../helpers';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetchArticles(API, setArticles, setErrors);
    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <h1>News App</h1>
      {errors && <p>There is error with the server, please come back later</p>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.webTitle}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
