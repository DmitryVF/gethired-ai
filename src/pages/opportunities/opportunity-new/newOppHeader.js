import React, { useMemo } from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { OPPORTUNITIES, newOportunityRoutes } from '../../../routes';
import Logo from '../../../components/common/logo';
import Bread from '../../../components/common/bread';

const useStyles = makeStyles( {
  root: {
    boxShadow: 'none',
    borderBottom: '1px solid #C4C4C4',
  },
  linearProgress: {
    backgroundColor: '#fff'
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  }
});

function NewOppHeader() {
  const classes = useStyles();

  const location = useLocation();

  const currentStepIndex = useMemo(() => (
    newOportunityRoutes.findIndex(({ path }) => path === location.pathname)
  ), [location.pathname]);

  const progressValue = ((currentStepIndex || 0) + 1) * (100 / newOportunityRoutes.length);

  return (
    <AppBar position="sticky" color="inherit" className={classes.root}>
      <React.Fragment>
        <LinearProgress variant="determinate" value={progressValue} className={classes.linearProgress} />
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={2}><Logo variant="h6" /></Grid>
            <Grid item xs={8}><Bread routes={newOportunityRoutes} /></Grid>
            <Grid item xs={2}>
              <Box textAlign="right">
                <Typography variant="subtitle2">
                  <Link to={OPPORTUNITIES} className={classes.link}>Save & Continue Later</Link>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </React.Fragment>
    </AppBar>
  )
}

// const { bool } = PropTypes;

// SignUpHeader.defaultProps = {};

// SignUpHeader.propTypes = {};

export default NewOppHeader;
