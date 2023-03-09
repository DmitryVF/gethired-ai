import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Logo from '../../components/common/logo';
import MainImg from './mainImg';

const useStyles = makeStyles({
  root: {
    height: '100%'
  }
});

function MainWrapper({ children, mainImgSrc }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} md={4}>
        <Box height="100%" display="flex" justifyContent="center" alignItems="center">
          <Box padding={3} width="100%" textAlign="center">
            <Logo />
            {children}
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <MainImg mainImgSrc={mainImgSrc} />
      </Grid>
    </Grid>
  )
}

const { oneOfType, element, array, string } = PropTypes;

MainWrapper.propTypes = {
  children: oneOfType([element, array]),
  mainImgSrc: string
};

export default MainWrapper;
