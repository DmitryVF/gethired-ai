import React from 'react';
// import PropTypes from 'prop-types';
// import { useLocation } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import { Container } from '@material-ui/core';
import ErrorBoundary from '../components/common/errorBoundary';
import { newOportunityRoutes } from '../routes';
import PrivateRoute from '../components/common/privateRoute';
import NewOppHeader from '../pages/opportunities/opportunity-new/newOppHeader';
import { connect } from 'react-redux';

// const useStyles = makeStyles(theme => ({
//   root: {}
// }));

function NewOppLayout({
  auth: { isAuthenticated }
}) {
  // const classes = useStyles();
  return (
    <div>
      <ErrorBoundary>
        <NewOppHeader />
      </ErrorBoundary>
      <ErrorBoundary>
        <div> 
          {
            newOportunityRoutes.map(({ path, exact, component }) => (
              <PrivateRoute key={path} path={path} 
                            isAuthenticated={isAuthenticated}
                            exact={exact} component={component} />
            ))
          }
        </div>
      </ErrorBoundary>
    </div>
  )
}

// export default NewOppLayout;


const mapStateToProps = (state) => {
  const { auth } = state;

  return {
    auth
  }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewOppLayout);