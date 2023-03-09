import React, {useState} from 'react';
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
import { NEW_OPP_STEP_4 } from "../../../routes";
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

function OppoInfoForm3({ defaultValues, setFormValues, bottomPanelRef }) {
  const classes = useStyles();
  const {handleSubmit, setValue, watch, register, errors, control, 
  } = useForm({
    defaultValues: {},
    validationSchema: formSchemas.oppoInfoStep3
  });

  let history = useHistory();

  // const [disabled1, set1Disabled] = useState(false);
  // const [disabled2, set2Disabled] = useState(false);

  const onNext = (data, e) => {
    // console.log('onNext', e);
    setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    history.push(NEW_OPP_STEP_4);
  };

  

  const onBack = () => {
    history.goBack()
  }
  const options ={};

  
  // const extraPointsEdit = (editedList)=> {
  //   console.log('editedList= ', editedList);
  //   if (editedList.length === 0){
  //     setError("extraPoints", "empty", "please add extra points requirments ")
  //     set2Disabled(true);
  //   }else{
  //     clearError("extraPoints");
  //     set2Disabled(false);
  //   }
  // }

  return (
    <React.Fragment>


    <form>

      <Bulletin 
        values={defaultValues.requirments}
        name="requirments"  
        errors={errors}
        control={control}
        setValue={setValue}
        watch={watch}
        />
      <Bulletin 
        title={'Candidate get extra points for'} 
        values={defaultValues.extraPoints}  
        name="extraPoints"  
        errors={errors}
        control={control}
        setValue={setValue}
        watch={watch}
        />
     

      <Portal container={bottomPanelRef}>
        <StepNavigator
           onNext={handleSubmit(onNext)}
          // onNext={(data,e)=>{return(handleSubmit(onNext))}}
          onBack={onBack}
          //disabled={disabled1 || disabled2}
        />
      </Portal>
     </form>
    </React.Fragment>
  )
}

const defaultValues = {
  requirments: ["At least 2 years of work experience in the field of web development.",
                "Excellent knowledge of German (C1) and English language (B2), both written and spoken."
  ],
  extraPoints: ["Experience with the Symfony framework.",
                "Experience with testing your code."
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

export default connect(mapStateToProps, mapDispatchToProps)(OppoInfoForm3)
