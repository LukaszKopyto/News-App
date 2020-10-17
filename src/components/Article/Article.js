import React from 'react';
import PropTypes from 'prop-types';
import ArticleWrapper from 'components/Article/ArticleWrapper';

const Article = ({ article }) => {
  return (
    <ArticleWrapper>
      <div>
        <img src={article.fields.thumbnail} alt={article.webTitle} />
      </div>
      <div>
        <h3>{article.webTitle}</h3>
        <p>
          <span>{article.sectionName}</span>
          <span>{article.webPublicationDate.substring(0, 10)}</span>
        </p>
        <p>{article.fields.trailText}</p>
      </div>
    </ArticleWrapper>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
