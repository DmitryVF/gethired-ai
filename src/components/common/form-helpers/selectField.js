import React from 'react';
// import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function SelectField({
  register = () => {},
  id = 'outlined-select',
  variant = 'outlined',
  required = false,
  label = '',
  autoComplete = '',
  error = false,
  helperText = '',
  fullWidth = true,
  margin = 'normal',
  InputLabelProps = { shrink: true },
  options = [],
  ...restInputProps
}) {
  return (
    <TextField
      id={id}
      select
      label={label}
      variant={variant}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
      error={error}
      helperText={helperText}
      InputLabelProps={InputLabelProps}
      {...restInputProps}
    >
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>{label}</MenuItem>
      ))}
    </TextField>
  );
}

export default SelectField
