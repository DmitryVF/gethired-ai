import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Portal from '@material-ui/core/Portal';
import * as appActions from '../../../actions/appActions'
import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { SIGN_UP_STEP_3 } from '../../../routes';
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';
import SelectField from '../../../components/common/form-helpers/selectField';
import StepNavigator from '../../../components/common/stepNavigator';

const companySizeOptions = [
  { value: 'please select', label: 'Please select' }
];

function CompanyAgencyForm({defaultValues, setFormValues, bottomPanelRef }) {

  const {
    handleSubmit, errors, control // , watch
  } = useForm({
    defaultValues,
    validationSchema: formSchemas.companyAgencyInfoStep
  });

  let history = useHistory();

  const onNext = (data) => {
    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(SIGN_UP_STEP_3);
  };

  const onBack = () => {
    history.goBack()
  }

  return (
    <form>
      <Controller
        as={InputField}
        name="companyName"
        label="COMPANY NAME"
        required
        control={control}
        error={getIsError(errors, 'companyName')}
        helperText={getHelperText(errors, 'companyName')}
      />
      <Controller
        as={SelectField}
        id="companySize"
        name="companySize"
        label="COMPANY SIZE"
        required
        options={companySizeOptions}
        control={control}
        error={getIsError(errors, 'companySize')}
        helperText={getHelperText(errors, 'companySize')}
      />
      <Grid container spacing={2}>
        <Grid item xs sm={4}>
          <Controller
            as={InputField}
            name="postalCode"
            label="POSTAL CODE"
            required
            control={control}
            error={getIsError(errors, 'postalCode')}
            helperText={getHelperText(errors, 'postalCode')}
          />
        </Grid>
        <Grid item xs sm={5}>
          <Controller
            as={InputField}
            name="address"
            label="ADDRESS"
            required
            control={control}
            error={getIsError(errors, 'address')}
            helperText={getHelperText(errors, 'address')}
          />
        </Grid>
        <Grid item xs sm>
          <Box mt={3} mb="12px">
            <Button>Search</Button>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs>
          <Controller
            as={InputField}
            name="country"
            label="COUNTRY"
            required
            control={control}
            error={getIsError(errors, 'country')}
            helperText={getHelperText(errors, 'country')}
          />
        </Grid>
        <Grid item xs>
          <Controller
            as={InputField}
            name="city"
            label="CITY"
            required
            control={control}
            error={getIsError(errors, 'city')}
            helperText={getHelperText(errors, 'city')}
          />
        </Grid>
      </Grid>
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
  companyName: '',
  companySize: 'please select',
  postalCode: '',
  address: '',
  country: '',
  city: ''
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

export default connect(mapStateToProps, mapDispatchToProps)(CompanyAgencyForm)
