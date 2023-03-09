import React from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import { LOGIN } from '../../routes';

function PrivateRoute({
  isAuthenticated, component: Component, ...restProps
}) {
  const location = useLocation();

  return isAuthenticated ? (
    <Route {...restProps}>
      <Component />
    </Route>
  ) : (
    <Redirect
      path={LOGIN}
      to={{
        pathname: LOGIN,
        state: { from: location }
      }}
    />
  )
}

export default PrivateRoute;
