import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Portal from '@material-ui/core/Portal';
import * as appActions from '../../../actions/appActions'
import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { SIGN_UP_STEP_2 } from "../../../routes";
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';
import SingleCheckboxField from '../../../components/common/form-helpers/singleCheckboxField';
import StepNavigator from '../../../components/common/stepNavigator';

function YourInfoForm({ defaultValues, setFormValues, bottomPanelRef }) {
  const {
    handleSubmit, errors, control // , watch
  } = useForm({
    defaultValues,
    validationSchema: formSchemas.yourInfoStep
  });

  let history = useHistory();

  const onNext = (data) => {
    console.log('onNext', data);
    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(SIGN_UP_STEP_2);
  };

  const onBack = () => {
    history.goBack()
  }

  return (
    <form>
      <Controller
        as={InputField}
        name="fullName"
        label="YOUR FULL NAME"
        required
        control={control}
        error={getIsError(errors, 'fullName')}
        helperText={getHelperText(errors, 'fullName')}
      />
      <Controller
        as={InputField}
        name="email"
        label="YOUR E-MAIL"
        required
        control={control}
        error={getIsError(errors, 'email')}
        helperText={getHelperText(errors, 'email')}
      />
      <Controller
        as={InputField}
        type="password"
        name="password"
        label="YOUR PASSWORD"
        required
        control={control}
        error={getIsError(errors, 'password')}
        helperText={getHelperText(errors, 'password')}
      />
      <Controller
        as={InputField}
        type="password"
        name="confirmPassword"
        label="YOUR PASSWORD AGAIN"
        required
        control={control}
        error={getIsError(errors, 'confirmPassword')}
        helperText={getHelperText(errors, 'confirmPassword')}
      />
      <Box mt="12px">
        <Controller
          as={SingleCheckboxField}
          control={control}
          name="acceptTerms"
          label={(
            <span>
              I Accept{' '}
              <Link href="#" target="_blank" rel="noopener" color="textPrimary" underline="always">
                Terms & Services
              </Link>{' '}and{' '}
              <Link href="#" target="_blank" rel="noopener" color="textPrimary" underline="always">
                Privacy Policy.
              </Link>
            </span>
          )}
        />
      </Box>
      <Portal container={bottomPanelRef}>
        <StepNavigator
          onNext={handleSubmit(onNext)}
          onBack={onBack}
        />
      </Portal>
    </form>
  )
}

const defaultValues = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false
};

const mapStateToProps = (state) => {
  const { app: { forms } } = state;

  return {
    defaultValues: {
      ...defaultValues,
      ...forms[formNames.SIGN_UP_FORM_NAME]
    }
  }
};

const { setFormValues } = appActions;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setFormValues
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(YourInfoForm)
