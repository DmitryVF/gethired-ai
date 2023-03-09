import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { useForm, Controller } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Portal from '@material-ui/core/Portal';
import * as appActions from '../../../actions/appActions'
import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { NEW_OPP_STEP_6 } from "../../../routes";
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';
import SelectField from '../../../components/common/form-helpers/selectField';
import SingleCheckboxField from '../../../components/common/form-helpers/singleCheckboxField';
import TextField from '@material-ui/core/TextField';
import Bulletin from "../../../components/common/form/bulletin";
import StepNavigator from '../../../components/common/stepNavigator';

const useStyles = makeStyles( theme => ({
  title: {
    fontSize: '24px',
    fontFamily: "Gilroy-Bold",
  },
  possible: {
    fontSize: '10px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
    textAlign: "center"
  },
  num: {
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
    textAlign: "center"
  },
  textli:{
    fontFamily: 'Roboto',
    fontSize: '16px',
    marginLeft: '0px',
    margin: '10px',
    listStyleType:"none",
    paddingBottom: "16px",

  },
  edit: {
    fontSize: '11px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
    cursor: "pointer"
  }
}));

function OppoInfoForm5({ defaultValues, setFormValues, bottomPanelRef }) {
  const classes = useStyles();
 const {handleSubmit, setValue, watch, register, errors, control, 
  } = useForm({
    defaultValues: {},
    validationSchema: formSchemas.oppoInfoStep5
  });

  let history = useHistory();

  
  const onNext = (data) => {
    setFormValues(formNames.SET_FORM_VALUES, data);
    history.push(NEW_OPP_STEP_6);
  };
  const onBack = () => {
    history.goBack()
  }
  const options ={};
  return (
    <React.Fragment>
      <Bulletin 
        values={defaultValues.offers}
        name="offers"  
        errors={errors}
        control={control}
        setValue={setValue}
        watch={watch}
        />
      <br/><br/><br/><br/><br/><br/>

      <Portal container={bottomPanelRef}>
        <StepNavigator
          onNext={handleSubmit(onNext)}
          onBack={onBack}
        />
      </Portal>
    </React.Fragment>
  )
}

const defaultValues = {
  offers: ["Awesome team buildings, dog-friendly office, in-office gym, rec room, and game room.",
                "Library filled with more industry-related books than you could ever read."
  ]
};

const mapStateToProps = (state) => {
  const { app: { forms } } = state;

  return {
    defaultValues: {
      ...defaultValues,
      ...forms[formNames.OPPORTUNITY_FORM_NAME]
    }
  }
};

const { setFormValues } = appActions;

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setFormValues
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(OppoInfoForm5)
