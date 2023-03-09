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
import { ReactComponent as EditSvg } from '../../../assets/icons/edit.svg';

const useStyles = makeStyles( {
  title: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: '10px',
    fontWeight: 'bold'
  },
  subtitleName: {
    fontSize: '18px',
    fontWeight: 'bold'
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
    title2:{
      fontSize: '22px',
    fontWeight: 'bold',
    fontFamily: 'Gilroy-Bold',
    },
    edit:{
      marginLeft: "-74px",
      marginRight: "20px",
      marginTop: "15px"
    }
  }
);

function OpportunityCard( {information, category, skills, whoWeAre, 
  requirements, extraPoints, willDo, offers }) {
  const classes = useStyles()
  
  //const bulletinFieldArray = useFieldArray({ control, name: 'bulletin' });
  //const addressFieldArray = useFieldArray({ control, name: 'location' });
  //const skills = watch('skills');

 // console.log("information - "+JSON.stringify(information.tytle) );

  const skillsList = skills.map((skill, index) =>
  // Делайте так, только если у элементов массива нет заданного ID
  <Box key={index} className={classes.skillbox}>
    {skill}
  </Box>
  );

const textList = (title, arr, borderBottom ="1px solid #C4C4C4") =>{
  return(
  <Box mt={0} pb={4}  width={652} borderBottom={borderBottom}>
          
    <Box display="flex">
      <Box className={classes.edit}>
        <EditSvg/>
      </Box>
      <Box mt="26px">
        <Typography className={classes.title2}> {title}</Typography>
      </Box>
    </Box>
    
    
    <Box mt={4} >
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
      <Box display="flex">
        <Box className={classes.edit}>
          <EditSvg/>
        </Box>
        <Box mt="26px">
          <Typography className={classes.title2}> Opportunity Information</Typography>
        </Box>
      </Box>
      
      <Box mt={2.5} mb={0}>
        <Typography variant="body2" className={classes.subtitle}>
          OPPORTUNITY TITLE
        </Typography>
      </Box>
      <Box mt={0.5} mb={4}>
        <Typography variant="body2" className={classes.subtitleName} >
          {information.tytle}&nbsp;@&nbsp;{information.at}
        </Typography>
      </Box>
      <Box mt={2.5} mb={0}>
        <Typography variant="body2" className={classes.subtitle}>
          OPPORTUNITY DURATION (SINCE: {information.since})
        </Typography>
      </Box>
      <Box mt={0.5} mb={4}>
        <Typography variant="body2" className={classes.subtitleName} >
          {information.duration} days 
          <span className={classes.inline}>&nbsp;({information.remaining} days remaining)</span>
        </Typography>
      </Box>
      <Box mt={2.5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            PLACE OF EMPLOYMENT
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {information.place}
        </Typography>
      </Box>
      <Box mt={2.5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            TYPE OF EMPLOYMENT
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            {information.type}
        </Typography>
      </Box>
      <Box mt={2.5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            SALARY
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            ${information.salaryFrom}&nbsp;-&nbsp;${information.salaryTo}
        </Typography>
      </Box>
      <Box mt={2.5} mb={0}>
          <Typography variant="body2" className={classes.subtitle}>
            YEARS OF EXPERIENCE
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            ${information.experience}
          </Typography>
      </Box>
      <Box mt={2.5} pb={4}  minWidth={652} borderBottom={"1px solid #C4C4C4"}>
          <Typography variant="body2" className={classes.subtitle}>
            YEARS OF EXPERIENCE
          </Typography>
          <Typography variant="body2" className={classes.subtitleName} >
            ${information.experience}
          </Typography>
      </Box>
      <Box mt={0} pb={4}  minWidth={652} borderBottom={"1px solid #C4C4C4"}>


        <Box display="flex">
          <Box className={classes.edit}>
            <EditSvg/>
          </Box>
          <Box mt="26px">
            <Typography className={classes.title2}> Opportunity Category & Skills</Typography>
          </Box>
        </Box>
        
          <Box mt={2.5} mb={0}>
            <Typography variant="body2" className={classes.subtitle}>
              OPPORTUNITY CATEGORY
            </Typography>
            <Typography variant="body2" className={classes.subtitleName} >
              {category}
            </Typography>
          </Box>
          <Box mt={2.5} mb={0}>
            <Typography variant="body2" className={classes.subtitle}>
              OPPORTUNITY SKILLS ({skills.length}/10)
            </Typography>
              {skillsList}
          </Box>
          <Box mt={2.5} mb={0}>
            <Typography variant="body2" className={classes.hidden}>
              This part is hidden from Candidate and it reflects on his options from Profile. Same skills from Candidate, reflect higher Matching Profile.
            </Typography>
          </Box>
      </Box>

      <Box mt={0} pb={2}  minWidth={652} borderBottom={"1px solid #C4C4C4"}>

          <Box display="flex">
            <Box className={classes.edit}>
              <EditSvg/>
            </Box>
            <Box mt="26px">
              <Typography className={classes.title2}> Who we are</Typography>
            </Box>
          </Box>
          <Box mt={4} >
            <Typography variant="h5" className={classes.textblock}>
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
     
      { textList("Opportunity Requirements", requirements)}
      { textList("Candidate get extra Points for", extraPoints)}
      { textList(" What Candidate will do", willDo)}
      { textList("This Opportunity Offers", offers, "none")}

    </React.Fragment>
  )
}


export default OpportunityCard;
