import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';

const PageRouter = () => {
  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/student',
      component: Student,
    },
    {
      path: '/teacher',
      component: Teacher,
    },
  ];

  return (
    <Router>
        <div className="router__content">
          <Switch>
            { routes.map((routeFromMap) => (
              <Route
                exact
                key={routeFromMap.path}
                path={routeFromMap.path}
                component={routeFromMap.component}
              />
            ))}
            <Redirect from="*" to="/" />
          </Switch>
        </div>
    </Router>
  );
};

export default PageRouter;