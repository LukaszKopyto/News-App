import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import ArticlesList from 'components/ArticlesList/ArticlesList';

const App = () => {
  return (
    <>
      <Router>
        <Route component={Header} />
        <Switch>
          <Route path="/:section?" component={ArticlesList} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
