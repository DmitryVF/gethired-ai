import React from 'react';
// import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import ErrorBoundary from '../components/common/errorBoundary';
import { signUpRoutes } from '../routes';
import PublicRoute from '../components/common/publicRoute';
import SignUpHeader from '../pages/auth/signup/signUpHeader';

// const useStyles = makeStyles(theme => ({
//   root: {}
// }));

function SignUpLayout() {
  // const classes = useStyles();
  return (
    <div>
      <ErrorBoundary>
        <SignUpHeader />
      </ErrorBoundary>
      <ErrorBoundary>
        <div>
          {
            signUpRoutes.map(({ path, exact, component }) => (
              <PublicRoute key={path} path={path} exact={exact} component={component} />
            ))
          }
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default SignUpLayout;
