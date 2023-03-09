import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import Chip from '@material-ui/core/Chip';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete/Autocomplete';
import CustomHelperText from './customHelperText';

const chipsLimit = 10;

function AutocompleteWithChips({
  register, name, value, setValue, watch, label, placeholder
}) {
  useEffect(() => {
    register({ name })
  }, [register, name]);

  return (
    <Autocomplete
      id="autocomplete-with-chips"
      value={value}
      freeSolo
      multiple
      disableClearable={true}
      // onInputChange={(event, value, reason) => {
      //   if (reason === 'clear') {
      //     setValue('skills', [])
      //   }
      // }}
      renderTags={(value, getTagProps) => (
        value.map((option, index) => (
          <Chip
            variant="outlined"
            label={option}
            {...getTagProps({ index })}
            onDelete={() => {
              setValue(name, watch(name).filter((skill, idx) => idx !== index))
            }}
            deleteIcon={<CloseIcon />}
          />
        ))
      )}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"
          label={label}
          placeholder={placeholder}
          fullWidth
          margin="normal"
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              const { value } = params.inputProps;
              const prevSkills = watch(name);

              if (!value || prevSkills.includes(value) || prevSkills.length === chipsLimit) {
                return
              }

              setValue(name, prevSkills.concat(value))
            }
          }}
          helperText={<CustomHelperText text={`${watch(name).length} / ${chipsLimit}`} />}
        />
      )}
    />
  )
}

const { func, string, array } = PropTypes;

AutocompleteWithChips.propTypes = {
  register: func.isRequired,
  name: string.isRequired,
  value: array.isRequired,
  setValue: func.isRequired,
  watch: func.isRequired,
  label: string,
  placeholder: string
};

export default AutocompleteWithChips;
