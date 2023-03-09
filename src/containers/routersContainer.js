import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from "@material-ui/core/Box";
import ErrorBoundary from '../components/common/errorBoundary';
import Progress from '../components/common/progress';
import * as appConstants from '../constants/appConstants'
import { publicRoutes, privateStatusRoutes, privateOportunityRoutes,newOportunityRoutes, ASK_DAVID } from '../routes';
import { SIGN_UP, NEW_OPP } from '../routes';
import PublicRoute from '../components/common/publicRoute';
import PrivateRoute from '../components/common/privateRoute';
import ProfileAskDavid from '../pages/profile/askDavid'
import SignUpLayout from '../layouts/signUpLayout';
import NewOppLayout from '../layouts/newOppLayout';

import MainLayout from '../layouts/mainLayout';

function RoutersContainer({
  auth: { isAuthenticated }
}) {
  return (
    <ErrorBoundary>
      <Box height="100vh" /* maxWidth={1366} m="0 auto" */>
        <Suspense fallback={<Progress type={appConstants.GLOBAL}/>}>
          <Router>
            <Switch>
              {
                publicRoutes.map(({path, exact, component}) => (
                  <PublicRoute
                    key={path}
                    isAuthenticated={isAuthenticated}
                    path={path}
                    exact={exact}
                    component={component}
                  />
                ))
              }
              {
                privateStatusRoutes.map(({ path, component }) => (
                  <PrivateRoute
                    key={path}
                    path={path}
                    isAuthenticated={isAuthenticated}
                    component={component}
                  />
                ))
              }
              {
                privateOportunityRoutes.map(({ path, exact, component }) => (
                  <PrivateRoute
                    key={path}
                    path={path}
                    exact={exact}
                    isAuthenticated={isAuthenticated}
                    component={component}
                  />
                ))
              }
              <PrivateRoute
                path={ASK_DAVID}
                isAuthenticated={isAuthenticated}
                component={ProfileAskDavid}
              />
              <Route path={SIGN_UP}>
                <SignUpLayout />
              </Route>

              <PrivateRoute path={NEW_OPP} component={NewOppLayout} isAuthenticated={isAuthenticated}>
               
              </PrivateRoute>
              <PrivateRoute
                path="/"
                isAuthenticated={isAuthenticated}
                component={MainLayout}
              />
            </Switch>
          </Router>
        </Suspense>
      </Box>
    </ErrorBoundary>
  )
}

const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    auth
  }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RoutersContainer);
