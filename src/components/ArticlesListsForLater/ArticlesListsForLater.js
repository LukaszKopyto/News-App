import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ArticlesListWrapper from 'components/ArticlesList/ArticlesListWrapper';
import Article from 'components/Article/Article';
import firebase from 'components/Firebase/firebase';

const ArticlesListsForLater = () => {
  const [articles, setArticles] = useState([]);
  const [dbId, setdbId] = useState([]);

  useEffect(() => {
    const articleRef = firebase.database().ref('articles');
    articleRef.on('value', (snapshot) => {
      const newState = snapshot.val();
      if (newState) {
        setdbId(Object.keys(newState));
        setArticles(Object.values(newState));
      }
    });
    return () => {
      articleRef.off();
    };
  }, []);

  return (
    <>
      <ArticlesListWrapper>
        <h2>Saved Articles</h2>
        {articles.map((article, index) => (
          <Article key={uuidv4()} article={article} forLater dbId={dbId[index]} />
        ))}
        {articles.length < 1 && <h3>No articles added</h3>}
      </ArticlesListWrapper>
    </>
  );
};

export default ArticlesListsForLater;
