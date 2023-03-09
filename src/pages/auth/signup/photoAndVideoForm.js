import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form';
// import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Portal from '@material-ui/core/Portal';
import * as appActions from '../../../actions/appActions'
// import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { SIGN_UP_SUCCESS } from '../../../routes';
import ControlPhotoAndVideoForm from '../../../components/common/form/controlPhotoVideoForm';
import StepNavigator from '../../../components/common/stepNavigator';

// const useStyles = makeStyles(() => ({}));

function PhotoAndVideoForm({ defaultValues, setFormValues, bottomPanelRef }) {
  // const classes = useStyles()
  const {
    handleSubmit, control, // , errors, watch
  } = useForm({
    defaultValues,
    // validationSchema: formSchemas.
  });
  // console.log('form state', watch());

  const history = useHistory();

  const onSkip = () => {
    history.push(SIGN_UP_SUCCESS);
  };

  const onFinish = (data) => {
    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(SIGN_UP_SUCCESS);
  };

  const onBack = () => {
    history.goBack()
  }

  return (
    <form>
      <ControlPhotoAndVideoForm control={control} />
      <Portal container={bottomPanelRef}>
        <StepNavigator
          onNext={handleSubmit(onFinish)}
          onBack={onBack}
        />
      </Portal>
    </form>
  )
}

const defaultValues = {
  photo: '',
  videoUrl: '',
  video: ''
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

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAndVideoForm)
