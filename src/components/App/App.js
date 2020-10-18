import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import ArticlesList from 'components/ArticlesList/ArticlesList';
import ArticlesListsForLater from 'components/ArticlesListsForLater/ArticlesListsForLater';

const App = () => {
  return (
    <>
      <Router>
        <Route component={Header} />
        <Switch>
          <Route path="/articles/for-later" component={ArticlesListsForLater} />
          <Route path="/:section?/:pageNum?" component={ArticlesList} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
