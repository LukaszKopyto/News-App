import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => {
  console.log(article);
  return (
    <div>
      <h3>{article.webTitle}</h3>
      <span>{article.sectionName}</span>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
