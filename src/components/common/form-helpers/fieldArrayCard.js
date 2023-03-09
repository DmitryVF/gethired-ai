import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import InputField from './inputField';
import PageTitle from '../pageTitle'

function FieldArrayCard({
  cardTitle, name, fieldArray, control, label, placeholder, addBtnName
}) {
  return (
    <div>
      <Box mb="12px">
        <PageTitle title={cardTitle} />
      </Box>
      {
        fieldArray.fields.map((item, index) => (
          <Controller
            key={item.id}
            name={`${name}[${index}].name`}
            control={control}
            defaultValue=""
            as={InputField}
            label={label}
            placeholder={placeholder}
          />
        ))
      }
      <Box mt={1}>
        <Button onClick={() => fieldArray.append({ name })}>{addBtnName}</Button>
      </Box>
    </div>
  )
}

const { string, object } = PropTypes;

FieldArrayCard.defaultProps = {
  addBtnName: 'Add',
};

FieldArrayCard.propTypes = {
  cardTitle: string.isRequired,
  name: string.isRequired,
  control: object.isRequired,
  fieldArray: object.isRequired,
  addBtnName: string
};

export default FieldArrayCard
