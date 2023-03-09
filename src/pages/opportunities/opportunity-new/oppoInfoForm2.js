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
import { NEW_OPP_STEP_3 } from "../../../routes";
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import SelectField from '../../../components/common/form-helpers/selectField';
import AutocompleteWithChips from '../../../components/common/form-helpers/autocompleteWithChips';
import SkillBox from '../../../components/common/form-helpers/skillBox';
import StepNavigator from '../../../components/common/stepNavigator';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import './oppoInfoForm2.css';
const useStyles = makeStyles( theme => ({
  input: {
    fontSize: '10px',
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
  'MuiOutlinedInput-input': {
    fontSize: '10px'
  },
  note: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    color: "#C4C4C4",
  },
  autocomplete: {
    '&::placeholder': {
        fontSize: "24px",
        color: "black",
    },    
    cursor:"pointer",
    '& > div ': {
      margin: "3px",

      padding: "14px 3px ",
      borderRadius: "8px",
       display:"inlineBlock"
    },
    
    
  },
  autoinput:{
       cursor:"pointer",
       color: "black",
       
       "&::placeholder": {
        // fontSize: "24px",
        color: "black",
        },
    },
}));

function OppoInfoForm2({ defaultValues, setFormValues, bottomPanelRef }) {

  const onClick = () => {
    console.log("click");
  }
  const classes = useStyles();
  const {
    handleSubmit,setValue, getValues, watch , register, errors, control, triggerValidation, // , watch
  } = useForm({
    defaultValues: {},
    validationSchema: formSchemas.oppoInfoStep2
  });
  const skills = watch('skills');
  let history = useHistory();

  const onNext = (data) => {
    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(NEW_OPP_STEP_3);
  };
  const onBack = () => {
    history.goBack()
  }
  const options ={};
  return (
    <form>
      <Box width="428px" display="flex">
      <Box width="330px">
      <SelectField
        //inputStyle={{ fontSize: "50px" }}
        className={classes.input}
        name="oppCategory"
        label="CATEGORY"
        required
        error={getIsError(errors, 'oppCategory')}
        defaultValue="default"
        helperText={getHelperText(errors, 'oppCategory')}
        options={defaultValues.oppCategory}
      /> 
      </Box>
      <Box width="90px" pl={1} paddingTop="20px" height="52px"> 
          <Typography className={classes.num}> {defaultValues.candidates.from}-{defaultValues.candidates.to} </Typography>
          <Typography className={classes.possible}> POSSIBLE CANDIDATES</Typography>
      </Box>
      </Box>

      <Box   width="428px" mt={2}  display="flex">
      
        <SkillBox
         skills={defaultValues.skills}
          //skills={[]}
         required
         name="skills"
         control={control}
         error={getIsError(errors, 'skills')}
         helperText={getHelperText(errors, 'skills')}
         getValues={getValues}
         setValue={setValue}
         triggerValidation={triggerValidation}
         />
   
      </Box>
      <Box width="428px" mt="12px" mb="18px">
        <Typography className={classes.note}>
          This part is hidden to Candidate and it reflects on his options from Profile. Same skills from Candidate reflect higher Matching Profile.
        </Typography>
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
const skills = [
  'HTML (+5 years)',
  'CSS (+5 years)',
  'Python (+2 years)',
  'Javascript: Angular (+3 years)',
  'PHP (+3 years)',
  'Javascript: React (+3 years)',
  'Ruby (+2 years)',
  'Javascript: Node.js (+3 years)'
];
const defaultValues = {
  oppCategory: [{ value: 'default', label: 'Web, Mobile & Software Development' }, { value: 'value1', label: 'value1' }],
  candidates: {from: 60, to:80},
  skills
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

export default connect(mapStateToProps, mapDispatchToProps)(OppoInfoForm2)
