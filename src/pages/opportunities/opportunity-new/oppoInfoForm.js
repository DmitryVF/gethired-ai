import React, {useEffect} from 'react';
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
import { NEW_OPP_STEP_2 } from "../../../routes";
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';

// import SelectInput from '../../../components/common/form-helpers/selectInput';
import SelectField from '../../../components/common/form-helpers/selectField';
import SingleCheckboxField from '../../../components/common/form-helpers/singleCheckboxField';
import StepNavigator from '../../../components/common/stepNavigator';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( theme => ({
  pixel: {
    fontSize: '14px',
    fontWeight: 'normal',
    fontFamily: "Roboto",
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
}));







function OppoInfoForm({ defaultValues, setFormValues, bottomPanelRef }) {
  const classes = useStyles();
  const {
    handleSubmit, errors, control, register // , watch
  } = useForm({
    defaultValues,
    validationSchema: formSchemas.oppoInfoStep
  });

  let history = useHistory();
      

  const onNext = (data) => {

    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(NEW_OPP_STEP_2);
  };
  const onBack = () => {
    history.goBack()
  }
  const options ={};
  return (
    <form>
      <Box width="428px" display="flex">
        <Box width="280px">
          <Controller
            as={InputField}
            name="oppTitle"
            label="OPPORTUNITY TITLE"
            required
            control={control}
            error={getIsError(errors, 'oppTitle')}
            helperText={getHelperText(errors, 'oppTitle')}
          /> 
        </Box>
        <Box pl={1} paddingTop="38px" height="52px"> 
          <Typography className={classes.pixel}> @ Pixels & Graphs Inc.</Typography>
        </Box>
      </Box>
      <Box width="428px">

      <SelectField
        ///inputStyle={{ fontSize: "50px" }}
        name="oppDuration"
        label="OPPORTUNITY DURATION"
        required
        //error={getIsError(errors, 'oppDuration')}
        defaultValue="default"
        helperText={getHelperText(errors, 'oppDuration')}
        options={defaultValues.oppDuration}
      /> 




     
      </Box>
      <Box width="428px">
      <SelectField
        type="country"
        name="country"
        label="COUNTRY"
        options={defaultValues.country}
        required
        defaultValue="default"
        control={control}
        //error={getIsError(errors, 'country')}
        helperText={getHelperText(errors, 'country')}
      /> 
      </Box>
      <Box width="428px" display="flex">
      <Box width="316px">
      <SelectField
        type="city"
        name="city"
        label="CITY"
        required
        defaultValue="Berlin"
        options={defaultValues.city}
        control={control}
        //error={getIsError(errors, 'city')}
        helperText={getHelperText(errors, 'city')}
      /> 
      </Box>
      <Box width="90px" pl={1} paddingTop="20px" height="52px"> 
          <Typography className={classes.num}> {defaultValues.candidates.from}-{defaultValues.candidates.to} </Typography>
          <Typography className={classes.possible}> POSSIBLE CANDIDATES</Typography>
      </Box>
      </Box>

      
      <Box width="428px" display="flex">
      <Box width="204px" mr="20px">
      <SelectField
        type="salaryFrom"
        id="salaryFrom"
        name="salaryFrom"
        label="SALARY FROM"
        required
        defaultValue="default"
        options={defaultValues.salaryFrom}
        control={control}
        //error={getIsError(errors, 'salaryFrom')}
        helperText={getHelperText(errors, 'salaryFrom')}
      />
      </Box>
      <Box width="204px">
      <SelectField
        id="salaryTo"
        name="salaryTo"
        label="SALARY TO"
        required
        defaultValue="default"
        options={defaultValues.salaryTo}
        control={control}
        //error={getIsError(errors, 'salaryTo')}
        helperText={getHelperText(errors, 'salaryTo')}
      />
      </Box>
      </Box>
      <Box mt="12px">
        
      </Box>
      <Portal container={bottomPanelRef}>
        <StepNavigator
          // onNext={handleSubmit(onNext)}
          onNext={handleSubmit(onNext)}
          // onNext={onSubmit}
          onBack={onBack}
        />
      </Portal>
    </form>
  )
}

const defaultValues = {
  oppTitle: '',
  oppDuration: [{ value: 'default', label: 'Please Select' }, { value: 'value1', label: 'value1' }],
 
  country: [{ value: 'default', label: 'Please Select' }, { value: 'Germany', label: 'Germany' }], 
  city: [{ value: 'default', label: ' ' }, { value: 'Berlin', label: 'Berlin' }],
  //employmentType: [{ value: 'default', label: ' ' }, { value: 'value1', label: 'value1' }],
  salaryFrom: [{ value: 'default', label: 'Please Select' }, 
              { value: 'value1', label: 'value1' }],



  salaryTo: [{ value: 'default', label: 'Please Select' }, { value: 'value1', label: 'value1' }],
  //experience: [{ value: 'default', label: ' ' }, { value: 'value1', label: 'value1' }],
  candidates: {from: 400, to:600}
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

export default connect(mapStateToProps, mapDispatchToProps)(OppoInfoForm)
