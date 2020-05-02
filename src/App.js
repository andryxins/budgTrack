import React from 'react';
import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import TransactionsHistoryPage from './Pages/TransactionsHistoryPage/TransactionsHistoryPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import AuthorisationPage from './Pages/AuthorisationPage/AuthorisationPage';
import { Route, Redirect, Switch } from 'react-router-dom';

const App = () => (
  <div className="container">
    <Header />
    <Switch>
      <Route path="/" exact component={AuthorisationPage} />
      <Route path="/homePage" component={HomePage} />
      <Route path="/transactionsHistory" component={TransactionsHistoryPage} />
      <Route path="/about" component={AboutPage} />
      <Redirect to="/homePage" />
    </Switch>
  </div>
);

export default App;
