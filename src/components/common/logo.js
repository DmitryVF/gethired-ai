import React from 'react';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import { HOME } from '../../routes';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles( {
  
  link: {
    color: '#000',
    textDecoration: 'none'
  }
});

function Logo({ variant })  {
	const classes = useStyles();

  return (
  	<Link to={HOME} className={classes.link}>
    	<Typography variant={variant}>GetHired.ai</Typography>
    </Link>
  )
}

Logo.defaultProps = {
  variant: 'h5'
};

Logo.propTypes = {
  variant: PropTypes.string
};

export default Logo
