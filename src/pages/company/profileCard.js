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
import withStyles from "@material-ui/styles/withStyles";
//import Uploader from '../../components/common/form-helpers/uploader';
//import { Controller } from 'react-hook-form';

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

  }
});




function ProfileCard( {onEdit, title,name, size  , website, headquarter, adress, 
  postalCode, whoWeAre }) {
  const classes = useStyles()
  // onEdit();
  //const bulletinFieldArray = useFieldArray({ control, name: 'bulletin' });
  //const addressFieldArray = useFieldArray({ control, name: 'location' });
  //const skills = watch('skills');

 // console.log("information - "+JSON.stringify(information.tytle) );

const {
    handleSubmit, control, // , errors, watch
  } = useForm({
  //  defaultValues,
    // validationSchema: formSchemas.
  });

const EditButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: "10px",
    fontSize: 14,
    padding: '14px 15px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#C4C4C4',
    borderColor: '#C4C4C4',
    fontFamily: [
      "Gilroy-Bold",
    ].join(','),
    '&:hover': {
      backgroundColor: '#b2b2b2',
      borderColor: '#b2b2b2',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


  return (

    <React.Fragment>
      
      <Box ml={10} mt={2.5} mb={0}>
        
      <Box display="flex">
        <Box mt={0.5} mb={4}>
          <Typography variant="body2" className={classes.profile} >
            {title}
          </Typography>
        </Box>
        <Box ml="70px" mt={0.5} mb={4}>
          <EditButton color="default" onClick= { ()=> onEdit() } >Edit Profile</EditButton>
        </Box>
      </Box>

      <Box mt={5} mb={0}>
        <Typography variant="body2" className={classes.subtitle}>
          AGENCY/COMPANY NAME
        </Typography>
      </Box>
      <Box mt={0.5} mb={4}>
        <Typography variant="body2" className={classes.subtitleName} >
          {name}
          
        </Typography>
      </Box>
      <Box mt={5} mb={1.5}>
          <Typography variant="body2" className={classes.subtitle}>
            PROFILE PICTURE
          </Typography>
          
      </Box>
      <img src={proIcon} className="ico" alt="" />
      <Box mt={5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            WEBSITE
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {website}
        </Typography>
      </Box>
      <Box mt={5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            SIZE
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {size}
        </Typography>
      </Box>
      <Box mt={5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            HEADQUARTERS
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {headquarter}
        </Typography>
      </Box>
      <Box display="flex">
          <Box mt={5} mb={0} mr={7}>
              <Typography variant="body2" className={classes.subtitle}>
                ADDRESS
              </Typography>
              <Typography variant="body2" className={classes.subtitleName} >
                {adress}
              </Typography>
          </Box>
          <Box mt={5} pb={4}  minWidth={0} >
              <Typography variant="body2" className={classes.subtitle}>
                POSTAL CODE
              </Typography>
              <Typography variant="body2" className={classes.subtitleName} >
                {postalCode}
              </Typography>
          </Box>
      </Box>    
      <Box mt={0} pb={4}  minWidth={0} >
          <Box mt={4} >
            <Typography variant="h5" className={classes.title}>
              Who we are
            </Typography>
          </Box>
          <Box mt={2.5} mb={0} maxWidth="428px">
            <Typography variant="h5"  className={classes.textblock}>
              {
                whoWeAre.map((whoWe, idx) => (
                  <React.Fragment key={idx}>
                  <Typography  className={classes.textblock}>
                    {whoWe} 
                  </Typography>
                  <br/>
                  </React.Fragment>
                ))
              }
            </Typography>
          </Box>
      </Box>
      </Box>
     
    </React.Fragment>
  )
}


export default ProfileCard;
