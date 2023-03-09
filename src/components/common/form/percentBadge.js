import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: 48,
    width: 48,
    borderRadius: '50%',
    background: '#CCC',
    position: 'absolute',
    left: -64,
    top: -8,
    fontSize: '1rem',
    textAlign: 'center',
    lineHeight: '48px',
  }
}));

export const PercentBadge = ({
  children,
  hidden,
}) => {

  const classes = useStyles();

  if(hidden) {
    return null;
  }

  return(
    <div className={classes.root}>
      {children}%
    </div>
  )

};

export default PercentBadge;
