import React from 'react';
import PropTypes from 'prop-types';
import ArticleWrapper from 'components/Article/ArticleWrapper';
import Button from 'components/Button/Button';
import firebase from 'components/Firebase/firebase';

const Article = ({ article }) => {
  const handleOnClick = () => {
    const articleRef = firebase.database().ref('articles');
    articleRef.push(article);
  };

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
        <div>
          <Button onClick={handleOnClick}>Read later</Button>
          <Button href={article.webUrl} target="_blank" rel="noopener noreferrer">
            Read more...
          </Button>
        </div>
      </div>
    </ArticleWrapper>
  );
};

Article.propTypes = {
  article: PropTypes.object.isRequired,
};

export default Article;
