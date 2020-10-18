import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArticleWrapper from 'components/Article/ArticleWrapper';
import Button from 'components/Button/Button';
import firebase from 'components/Firebase/firebase';

const Article = ({ article, forLater, dbId }) => {
  const [addForLater, setAddForLater] = useState(false);

  const addToDatabase = () => {
    const articleRef = firebase.database().ref('articles');
    articleRef.push(article);
    setAddForLater(true);
  };

  const removeFromDatabase = () => {
    const articleRef = firebase.database().ref(`articles/${dbId}`);
    articleRef.remove();
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
        {addForLater && <p data-value="added">added for reading later</p>}
        <div>
          {forLater ? (
            <Button onClick={removeFromDatabase}>Remove</Button>
          ) : (
            <Button onClick={addToDatabase}>Read later</Button>
          )}
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
  forLater: PropTypes.bool,
  dbId: PropTypes.string,
};

export default Article;
