import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import * as appActions from '../../actions/appActions';
// import formSchemas from '../../../config/formSchemas';
import formNames from '../../config/formNames';
import { PROFILE_SUCCESS } from "../../routes";
import ControlWhoAreYouForm from '../../components/common/form/controlWhoAreYouForm';
import ControlPhotoAndVideoForm from '../../components/common/form/controlPhotoVideoForm';
import { Controller } from 'react-hook-form';

// const useStyles = makeStyles(() => ({}));

function ProfileForm({ defaultValues, setFormValues }) {
  // const classes = useStyles()
  const {
    handleSubmit, register, control, setValue, watch //, errors
  } = useForm({
    defaultValues,
    // validationSchema: formSchemas.profile
  });

  const bulletinFieldArray = useFieldArray({ control, name: 'bulletin' });
  const addressFieldArray = useFieldArray({ control, name: 'location' });

  const skills = watch('skills');

  let history = useHistory();

  const onFinish = (data) => {
    setFormValues(formNames.PROFILE_FORM_NAME, data);
    history.push(PROFILE_SUCCESS);
  };

  return (
    <form>
      <ControlWhoAreYouForm
        addressFieldArray={addressFieldArray}
        bulletinFieldArray={bulletinFieldArray}
        control={control}
        isProfile
        register={register}
        setValue={setValue}
        skills={skills}
        watch={watch}
      />
      <ControlPhotoAndVideoForm
        control={control}
        isProfile
        showPageTitle 
      />
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
  photo: '',
  videoUrl: '',
  video: ''
};

const mapStateToProps = (state) => {
  const { app: { forms } } = state;

  return {
    defaultValues: {
      ...defaultValues,
      ...forms[formNames.PROFILE_FORM_NAME]
    }
  }
};

const { setFormValues } = appActions;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setFormValues
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm)
