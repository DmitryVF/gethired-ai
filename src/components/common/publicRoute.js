import React from 'react';
import { Route } from 'react-router-dom';

function PublicRoute({ component: Component, ...restProps }) {
  return (
    <Route {...restProps}>
      <Component />
    </Route>
  )
}

export default PublicRoute;
