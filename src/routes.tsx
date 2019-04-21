import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Menu from './components/Menu';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: #edeef0;
`;

const Routes = () => (
  <BrowserRouter>
    <Body>
      <Menu />

      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </Body>
  </BrowserRouter>
);

export default Routes;
