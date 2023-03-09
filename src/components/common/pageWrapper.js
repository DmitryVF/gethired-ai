import React from 'react';
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import PageTitle from './pageTitle';

function PageWrapper({ title, leftPanel, rightPanel, bottomPanel, badge }) {

  return (
    <Box px={3} py={5}>
      <Grid container spacing={2}>
        <Grid container item sm={12} md={6} justify="center">
          <Grid item xs={12} sm={12} md={10} lg={8}>
            <Box mb="12px"><PageTitle title={title} badge={badge} /></Box>
            {leftPanel}
          </Grid>
        </Grid>
        <Grid container item sm={12} md={6} justify="flex-end">
          <Grid item xs={12} sm={12} md={10} lg={8}>
            <Grid container>
              <Grid item xs={12} sm={12} md={10} lg={10}>{rightPanel}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {bottomPanel}
    </Box>
  )
}

PageWrapper.defaultProps = {
  title: ''
};

const { string, element } = PropTypes;

PageWrapper.propTypes = {
  title: string,
  leftPanel: element,
  rightPanel: element,
  bottomPanel: element,
};

export default PageWrapper;
