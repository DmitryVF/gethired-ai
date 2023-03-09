import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import * as appActions from '../../actions/appActions';
// import formSchemas from '../../../config/formSchemas';
import formNames from '../../config/formNames';
import { PROFILE_SUCCESS } from "../../routes";
import ControlWhoAreYouForm from '../../components/common/form/controlWhoAreYouForm';
import ControlPhotoAndVideoForm from '../../components/common/form/controlPhotoVideoForm';
import proIcon from '../../assets/profile.jpg';
import Typography from '@material-ui/core/Typography';
import { borders,sizing  } from '@material-ui/system';
import InputField from '../../components/common/form-helpers/inputField';
import { Controller } from 'react-hook-form';
import SelectField from '../../components/common/form-helpers/selectField';
import TextField from '@material-ui/core/TextField';
// import Uploader from '../../components/common/form-helpers/uploader';
// import { Controller } from 'react-hook-form';

const useStyles = makeStyles( {
  profile: {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
     fontFamily: "Gilroy-Bold",
  },
  subtitle: {
    fontSize: '10px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  subtitleName: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  inline:{
    fontWeight: 'normal'
  },
  skillbox:{
    backgroundColor: '#C4C4C4',
    
    height: 'auto',
    display: 'inline-box',
    borderRadius: '10px',
    marginRight: '4px',
    marginTop: '4px',
    fontFamily: 'Gilroy-Bold',
    fontSize: '12px',
    padding: '7px 12px '
  },
  hidden:{
    color: '#C4C4C4',
    fontSize: '14px',
    width: '600px'
  },
  textblock:{
    fontFamily: 'Roboto',
    fontSize: '16px',

  },
  textli:{
    fontFamily: 'Roboto',
    fontSize: '16px',
    marginLeft: '0px',
    margin: '10px',
    listStyleType:"none",

  },
  field:{
    width:"428px"
  },
  plus:{
    cursor: "pointer",
    left: "-27px",
    top: "104px",
    width: "20px",
    height: "20px",
    position: "relative"
  },
  box:{
    cursor: "pointer",
    width: "20px",
    height: "20px",
    position: "relative"
  },
  inputfile:{
    width: "100%",
    height: "100%", 
    opacity: "0",
    overflow: "hidden",
    position: "absolute",
    cursor: "pointer",
    // pointerEvents: "none",
    zIndex: "-1",
  },
});




function EditProfileCard( {onSave, title,name, size  , website, country, city, adress, 
  postalCode, whoWeAre }) {
  const classes = useStyles()
  // onEdit();
  //const bulletinFieldArray = useFieldArray({ control, name: 'bulletin' });
  //const addressFieldArray = useFieldArray({ control, name: 'location' });
  //const skills = watch('skills');

 // console.log("information - "+JSON.stringify(information.tytle) );
const defaultValues = {onSave, title, name, size, country , website, city, adress, 
  postalCode, whoWeAre };
console.log(onSave);
console.log("onSave= ", onSave);

// onSave();

const onNext = (data) => {
    console.log('onNext', data);
    onSave();
    //setFormValues(formNames.SIGN_UP_FORM_NAME, data);
    //history.push(NEW_OPP_STEP_2);
};

const {
    handleSubmit, control, // , errors, watch
  } = useForm({
    defaultValues,
    // validationSchema: formSchemas.
  });


  return (

    <React.Fragment>
      
      <Box ml={10} mt={2.5} mb={0}>
        
      
      <Box mt={0.5} mb={4}>

        <Typography variant="body2" className={classes.profile} >
          {title}
        </Typography>
      </Box>
      <Box mt={5} mb={0}>
        <Typography variant="body2" className={classes.subtitle}>
          
        </Typography>
      </Box>
      <form>
      <Box mt={0.5} mb={4}>
        
            <Box width="428px" display="flex">
              <Controller 
              //placeholder = 'fullName'
                as={InputField}
                type="name"
                name="name"
                label="AGENCY/COMPANY NAME"
                //required
                control={control}
                //error={getIsError(errors, 'oppTitle')}
                //helperText={getHelperText(errors, 'oppTitle')}
              /> 
            </Box>
        <Typography variant="body2" className={classes.subtitleName} >
          
          
        </Typography>
      </Box>
      <Box mt={2} mb={1.5}>
          <Typography variant="body2" className={classes.subtitle}>
            PROFILE PICTURE
          </Typography>
          
      </Box>
      <Box display="flex">
        <img display="box" src={proIcon} className="ico" alt="" />
        <Box  className={classes.plus}>
          <label >
            <Box className={classes.box}></Box>
            
            <input className={classes.inputfile} type="file"/>
          </label>
          
        </Box>    

      </Box>
      <Box mt={2} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            
          </Typography>
          <Box width="428px" display="flex">
          <Controller 
              //placeholder = 'fullName'
                as={InputField}
                type="website"
                name="website"
                label="WEBSITE"
                control={control}
              />
           </Box>   
          
      </Box>
      <Box mt={2} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            
          </Typography>
          <Box width="428px" display="flex">
          <SelectField
                //inputStyle={{ fontSize: "50px" }}
                //className={classes.input}
                label="COMPANY SIZE"
                name="size"
                //required
                //error={getIsError(errors, 'fullName')}
                defaultValue="default"
                //helperText={getHelperText(errors, 'fullName')}
                options={size}
              />
            </Box> 
      </Box>
      <Box display="flex" maxWidth="428px">
          <Box mt={2} mb={0} mr={2.5}>
              <Controller 
              //placeholder = 'fullName'
                as={InputField}
                type="country"
                name="country"
                label="COUNTRY"
                control={control}
              />
          </Box>
          <Box mt={2} pb={0}  minWidth={0} >
              <Controller 
              //placeholder = 'fullName'
                as={InputField}
                type="city"
                name="city"
                label="CITY"
                control={control}
              />
          </Box>
      </Box> 
      <Box display="flex" maxWidth="428px">
          <Box mt={2} mb={0} mr={2.5}>
              <Controller 
              //placeholder = 'fullName'
                as={InputField}
                type="adress"
                name="adress"
                label="ADRESS"
                control={control}
              />
          </Box>
          <Box mt={2} pb={0}  minWidth={0} >
              <Controller 
              //placeholder = 'fullName'
                as={InputField}
                type="postalCode"
                name="postalCode"
                label="POSTAL CODE"
                control={control}
              />
          </Box>
      </Box>    
      <Box mt={4.5} pb={4}   >
          <Box  width="428px">
            <Controller  className={classes.field}
              //placeholder = 'fullName'
                as={TextField}
                type="postalCode"
                name="postalCode"
                label="POSTAL CODE"
                control={control}
                id="outlined-multiline-flexible"
                multiline
                  rows="20"
                  defaultValue={whoWeAre}
                  variant="outlined"
              />
          </Box>


      </Box>
      <Box mt={0} width="428px">
        <Button onClick={handleSubmit(onNext)}>Save Changes</Button>
      </Box>
      </form>
      </Box>
     
    </React.Fragment>
  )
}


export default EditProfileCard;
