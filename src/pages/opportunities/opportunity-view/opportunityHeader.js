import React, { useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {OPPORTUNITIES } from '../../../routes';
import Logo from '../../../components/common/logo';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import { ReactComponent as AlarmSvg } from '../../../assets/icons/alarm.svg';
import { Link} from 'react-router-dom';
const useStyles = makeStyles( {
  root: {
    boxShadow: 'none',
    borderBottom: '1px solid #C4C4C4',
  },
  gridContainer: {
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
 
});

function OpportunityHeader() {
  const classes = useStyles();

 
  return (
    <AppBar position="sticky" color="inherit" className={classes.root}>
      <Grid container alignItems="center" className={classes.gridContainer}>
        <Grid item xs>
          <Box px={3}><Logo variant="h6" /></Box>
        </Grid>
        
        <Grid item xs>
          <Box p="23px 38px 23px 1px" display="flex" justifyContent="flex-end" alignItems="flex-end">
            <Link to={OPPORTUNITIES} className={classes.link}>
            	<Typography variant="subtitle2">Return to Opportunities</Typography>
            </Link>
             
           
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  )
}

// const { bool } = PropTypes;

// MainHeader.defaultProps = {};

// MainHeader.propTypes = {};

export default OpportunityHeader;
