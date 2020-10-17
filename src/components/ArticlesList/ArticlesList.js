import React, { useState, useEffect } from 'react';
import { fetchArticles, source } from 'utils/helpers';
import { API } from 'utils/api';
import ArticlesListWrapper from 'components/ArticlesList/ArticlesListWrapper';
import Article from 'components/Article/Article';

const ArticlesList = () => {
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
      <ArticlesListWrapper>
        {errors && <p>There is error with the server, please come back later</p>}
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </ArticlesListWrapper>
    </>
  );
};

export default ArticlesList;