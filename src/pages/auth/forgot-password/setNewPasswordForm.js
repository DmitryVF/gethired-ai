import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import formSchemas from '../../../config/formSchemas';
import { PASSWORD_CHANGED } from '../../../routes';
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';

const defaultValues = {
  password: '',
  confirmPassword: ''
};

function SetNewPasswordForm() {
  const {
    handleSubmit, errors, register // , watch
  } = useForm({
    defaultValues,
    validationSchema: formSchemas.setNewPassword
  });

  let history = useHistory();

  const onSubmit = (data) => {
    console.log('onSubmit', data);
    history.push(PASSWORD_CHANGED);
  };

  return (
    <form>
      <InputField
        type="password"
        name="password"
        label="YOUR PASSWORD"
        required
        register={register}
        error={getIsError(errors, 'password')}
        helperText={getHelperText(errors, 'password')}
      />
      <InputField
        type="password"
        name="confirmPassword"
        label="CONFIRM YOUR PASSWORD"
        required
        register={register}
        error={getIsError(errors, 'confirmPassword')}
        helperText={getHelperText(errors, 'confirmPassword')}
      />
      <Box mt="20px"><Button onClick={handleSubmit(onSubmit)}>Submit</Button></Box>
    </form>
  )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SetNewPasswordForm)
