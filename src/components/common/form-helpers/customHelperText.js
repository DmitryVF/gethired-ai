import React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";

function CustomHelperText({ text }) {
  return (
    <Box component="span" display="flex" justifyContent="flex-end" color="#000">{text}</Box>
  )
}

CustomHelperText.propTypes = {
  text: PropTypes.string
};

export default CustomHelperText
