import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { FormPage } from './pages/FormPage';

export const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={FormPage} />
    </Switch>
  </>
);
