import React from 'react';
// import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

function InputField({
  register = () => {},
  required = false,
  label = '',
  placeholder = '',
  autoComplete = '',
  error = false,
  helperText = '',
  fullWidth = true,
  margin = 'normal',
  InputLabelProps = { shrink: true },
  variant = 'outlined',
  ...restInputProps
}) {
  return (
    <TextField
      inputRef={register}
      label={label}
      required={required}
      placeholder={placeholder}
      autoComplete={autoComplete}
      error={error}
      helperText={helperText}
      fullWidth={fullWidth}
      margin={margin}
      InputLabelProps={InputLabelProps}
      variant={variant}
      {...restInputProps}
    />
  )
}

export default InputField
