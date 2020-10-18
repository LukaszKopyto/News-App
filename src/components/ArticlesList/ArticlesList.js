import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticles, source } from 'utils/helpers';
import { API } from 'utils/api';
import ArticlesListWrapper from 'components/ArticlesList/ArticlesListWrapper';
import Article from 'components/Article/Article';

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [errors, setErrors] = useState(false);
  const { section } = useParams();

  useEffect(() => {
    fetchArticles(API, setArticles, setErrors, section);
    return () => {
      source.cancel();
    };
  }, [section]);

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
