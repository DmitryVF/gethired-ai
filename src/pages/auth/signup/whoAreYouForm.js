import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm, useFieldArray } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import * as appActions from '../../../actions/appActions'
// import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { SIGN_UP_STEP_4 } from '../../../routes';
import ControlWhoAreYouForm from '../../../components/common/form/controlWhoAreYouForm';
import Portal from '@material-ui/core/Portal';
import StepNavigator from '../../../components/common/stepNavigator';

// const useStyles = makeStyles(() => ({}));

function WhoAreYouForm({ defaultValues, setFormValues, bottomPanelRef }) {
  // const classes = useStyles()
  const {
    handleSubmit, register, control, setValue, watch //, errors
  } = useForm({
    defaultValues,
    // validationSchema: formSchemas.
  });

  const bulletinFieldArray = useFieldArray({ control, name: 'bulletin' });
  const addressFieldArray = useFieldArray({ control, name: 'location' });

  const skills = watch('skills');

  let history = useHistory();

  const onSkip = () => {
    history.push(SIGN_UP_STEP_4);
  };

  const onFinish = (data) => {
    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(SIGN_UP_STEP_4);
  };

  const onBack = () => {
    history.goBack()
  }

  return (
    <form>
      <Box mb={15}>
        <ControlWhoAreYouForm
          control={control}
          register={register}
          bulletinFieldArray={bulletinFieldArray}
          addressFieldArray={addressFieldArray}
          skills={skills}
          setValue={setValue}
          watch={watch}
        />
      </Box>
      <Portal container={bottomPanelRef}>
        <StepNavigator
          onNext={handleSubmit(onFinish)}
          onBack={onBack}
        />
      </Portal>
    </form>
  )
}

const skills = [
  'Desktop Software Development',
  'Ecommerce Development',
  'Mobile Development',
  'Q/A & Testing',
  'Java Script',
  'React.js',
  'Angular'
];

const bulletin = [
  { id: '1', name: '' }
];

const location = [
  { id: '2', name: '' }
];

const defaultValues = {
  bio: '',
  description: '',
  skills,
  bulletin,
  location,
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

export default connect(mapStateToProps, mapDispatchToProps)(WhoAreYouForm)
