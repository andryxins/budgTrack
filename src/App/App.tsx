import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePageContainer';
import TransactionsHistoryPage from '../Pages/TransactionsHistoryPage/TransactionsHistoryPage';
import AboutPage from '../Pages/AboutPage/AboutPage';
import AuthorisationPage from '../Pages/AuthorisationPage/AuthorisationPageContainer';
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';

const App = () => (
  <div>
    <Switch>
      <Route path="/authorisation" component={AuthorisationPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/transactionsHistory" component={TransactionsHistoryPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/" exact strict component={HomePage} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
