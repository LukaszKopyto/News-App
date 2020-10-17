import React from 'react';
import GlobalStyle from 'theme/GlobalStyle';
import Header from 'components/Header/Header';
import ArticlesList from 'components/ArticlesList/ArticlesList';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ArticlesList />
    </>
  );
};

export default App;
