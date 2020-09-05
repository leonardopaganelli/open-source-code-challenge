import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import BaseLayout from '../components/BaseLayout'

import Home from './Home';
import Student from './Student';
import Teacher from './Teacher';

const PageRouter = () => {
  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/student',
      name: 'Student',
      component: Student,
    },
    {
      path: '/teacher',
      name: 'Teacher',
      component: Teacher,
    },
  ];

  return (
    <Router>
      <BaseLayout
        title='Open Source Code Challenge'
        pages={routes.map(({path,name}) => ({path, name}))}
      >
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
      </BaseLayout>
    </Router>
  );
};

export default PageRouter;