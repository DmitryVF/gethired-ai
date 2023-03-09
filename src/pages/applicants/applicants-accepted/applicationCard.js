import React from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import * as appActions from '../../../actions/appActions';
// import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { PROFILE_SUCCESS } from "../../../routes";
import ControlWhoAreYouForm from '../../../components/common/form/controlWhoAreYouForm';
import ControlPhotoAndVideoForm from '../../../components/common/form/controlPhotoVideoForm';
import Typography from '@material-ui/core/Typography';
import { borders,sizing  } from '@material-ui/system';
// import { ReactComponent as Circle } from '../../../assets/icons/circlegrey.svg';
// import { ReactComponent as Avatar } from '../../../assets/icons/photogrey.svg';


const useStyles = makeStyles( {
  titleName: {
    fontSize: '32px',
    fontWeight: 'bold'
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  list: {
    fontSize: '16px',
    fontFamily: "Roboto",
  },
  dot: {
    fontFamily: "Gilroy-Bold",
    fontSize: "24px",
    color: "black"
  },
  note: {
    fontFamily: "Roboto",
    fontSize: "14px",
  },
  subtitle: {
    fontSize: '10px',
    fontWeight: 'bold'
  },
  subtitleName: {
    fontSize: '18px',
    fontFamily: 'Gilroy-Bold',
  },
  inline:{
    fontWeight: 'normal'
  },
  skillbox:{
    backgroundColor: 'black',
    color: "white",
    height: 'auto',
    display: 'inline-box',
    borderRadius: '8px',
    marginRight: '16px',
    marginTop: '8px',
    fontFamily: 'Gilroy-Bold',
    fontSize: '12px',
    padding: '8px 12px '
  },
  regular:{
    fontSize: '14px',
    fontFamily: 'Roboto',
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

function OpportunityCard( {information, bio, skills,  
  requirements}) {
  const classes = useStyles()
  

  const skillsList = skills.map((skill, index) =>
  // Делайте так, только если у элементов массива нет заданного ID
  <Box key={index} className={classes.skillbox}>
    {skill}
  </Box>
  );

const textList = (title, arr) =>{
  return(
  <Box mt={0} pb={4}  maxWidth="400px" >
    <Box mt={4} >
      <Typography variant="h5" className={classes.subtitle}>
       {title}
      </Typography>
    </Box>
    <Box mt={0} >
      <Typography variant="h5" className={classes.textblock}>
        {
          arr.map((item, idx) => (

            <li key={idx} className={classes.textli}>
             &#8226; {item} 
            </li>
          ))
        }
      </Typography>
    </Box>
  </Box>
)};






  return (

    <React.Fragment>
    <Box  mb={4} display="flex" alignItems="center">
      <Box >
        <Typography  variant="body2" className={classes.titleName} >
          {information.pagetitle}
        </Typography>
      </Box>
      <Box ml={5.5} mt={-0.1} >
        <Typography variant="body2" className={classes.subtitleName} >
          {information.match} Match
        </Typography>
      </Box>
    </Box>  
    
    <Box display="flex" mt={2.5}  > 
      <Box>
        <Box mb={2}>
          <Typography variant="body2" className={classes.dot} >
            {information.name}
          </Typography>
        </Box>
        <Box maxWidth="300px" >
          <Typography variant="body2" className={classes.note}>
            Candidate Full Name and picture will stay hidden until you Accept their Application.
          </Typography>
        </Box>
      </Box>  
      <Box  ml= '0px' mt="-10px">
       
        <img display="block" src={require("../../../assets/profilephotogreybig.jpg")}/>
      </Box>
     
      
    </Box>

      <Box  mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            OPPORTUNITY APPLYING FOR
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {information.title}
        </Typography>
      </Box>
      <Box mt={4} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            OPPORTUNITY CATEGORY
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {information.category}
        </Typography>
      </Box>
      
      <Box mt={5} pb={4}  maxWidth="600px" >
          <Box mt={0} mb={0}>
            <Typography variant="body2" className={classes.subtitle}>
              SKILLS 
            </Typography>
              {skillsList}
          </Box>
          
      </Box>
      <Box mt={4} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            PORTFOLIO LINK
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {information.link}
        </Typography>
      </Box>
      <Box mt={4} mb={0} maxWidth="430px">
          <Typography variant="body2" className={classes.subtitle}>
            SHORT BIO
          </Typography>
          <Typography variant="body2" className={classes.regular} >
            {bio}
        </Typography>
      </Box>
     
      { textList("NOTABLE ACHIEVEMENTS", requirements)}

    </React.Fragment>
  )
}


export default OpportunityCard;
