import React, { useState, useEffect } from 'react';
import { fetchArticles, source } from 'utils/helpers';
import { API } from 'utils/api';
import GlobalStyle from 'theme/GlobalStyle';

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
      <GlobalStyle />
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
