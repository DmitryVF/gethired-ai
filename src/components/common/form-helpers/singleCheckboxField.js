import React from 'react';
// import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function SingleCheckboxField({
  register = () => {},
  label = '',
  color = 'primary',
  size = 'small',
  ...restCheckboxProps
}) {
  return (
    <FormControlLabel
      control={<Checkbox inputRef={register} color={color} {...restCheckboxProps} />}
      size={size}
      label={label}
    />
  )
}

export default SingleCheckboxField;
