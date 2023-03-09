import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as appConstants from '../../constants/appConstants';
import appConfig from '../../config/app';

const { GLOBAL, LOCAL } = appConstants;

const useStyles = makeStyles(theme => ({
  root: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: props.type === GLOBAL ? '100vh' : `calc(100vh - ${appConfig.headerHeight})`
  })
}));

function Progress(props) {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
}

const { oneOf } = PropTypes;

Progress.defaultProps = {
  type: LOCAL
};

Progress.propTypes = {
  type: oneOf([GLOBAL, LOCAL])
};

export default Progress;
