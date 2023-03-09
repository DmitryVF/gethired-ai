import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Logo from '../../components/common/logo';

const useStyles = makeStyles( {
  root: {
    boxShadow: 'none',
    borderBottom: '1px solid #C4C4C4',
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  }
});

function Header({ rightLink }) {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit" className={classes.root}>
      <React.Fragment>
        <Toolbar>
          <Grid container spacing={2} justify={rightLink ? 'space-between' : 'flex-start'} alignItems="center">
            <Grid item xs={2}><Logo variant="h6" /></Grid>
            {
              rightLink && (
                <Grid item xs={4}>
                  <Box textAlign="right">
                    <Typography variant="subtitle2" noWrap>
                      <Link to={rightLink.link} className={classes.link}>{rightLink.label}</Link>
                    </Typography>
                  </Box>
                </Grid>
              )
            }
          </Grid>
        </Toolbar>
      </React.Fragment>
    </AppBar>
  )
}

const { shape, string } = PropTypes;

Header.defaultProps = {
  rightLink: null
};

Header.propTypes = {
  rightLink: shape({
    link: string,
    label: string
  })
};

export default Header;
