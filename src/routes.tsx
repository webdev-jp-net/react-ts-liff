import { FC } from 'react';

// router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import { Home } from './pages/home';
import { Sub } from './pages/sub';

// layout
import { Dialog } from './layout/dialog';

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sub/:id" component={Sub} />
      </Switch>
      <Dialog />
    </BrowserRouter>
  );
};
