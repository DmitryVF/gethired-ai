import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel({ children, value, index, ...otherProps }) {
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...otherProps}
    >
      {value === index && <Box py={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default TabPanel
