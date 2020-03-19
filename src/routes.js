import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
