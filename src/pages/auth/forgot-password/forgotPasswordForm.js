import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import formSchemas from '../../../config/formSchemas';
import { SET_NEW_PASSWORD } from '../../../routes';
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';

const defaultValues = {
  email: ''
};

function ForgotPasswordForm() {
  const {
    handleSubmit, errors, register // , watch
  } = useForm({
    defaultValues,
    validationSchema: formSchemas.forgotPassword
  });

  let history = useHistory();

  const onNext = (data) => {
    console.log('onNext', data);
    history.push(SET_NEW_PASSWORD);
  };

  return (
    <form>
      <InputField
        name="email"
        label="YOUR E-MAIL"
        required
        register={register}
        error={getIsError(errors, 'email')}
        helperText={getHelperText(errors, 'email')}
      />
      <Box mt="20px"><Button onClick={handleSubmit(onNext)}>Next</Button></Box>
    </form>
  )
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordForm)
