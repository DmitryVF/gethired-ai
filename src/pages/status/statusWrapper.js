import React from 'react';
// import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import appConfig from '../../config/app';

function StatusWrapper({ children, photo='' }) {
  return (
    <Box height={`calc(100vh - ${appConfig.headerHeight})`} display="flex" flexDirection="column">
      <Grid container style={{ height: '100%' }}>
        <Grid item xs={12} sm={6} md={8}>
          <Box py={5} px={3} display="flex" justifyContent="center">
            <Box maxWidth={430}>{children}</Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box bgcolor="#C4C4C4" height="100%">
              <img src={photo? require(photo) : require("../../assets/greyphoto.jpg")} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default StatusWrapper;
