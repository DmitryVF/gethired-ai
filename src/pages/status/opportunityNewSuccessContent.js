import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PageTitle from '../../components/common/pageTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
title: {
    fontFamily: "Gilroy-Bold",
    fontSize: "24px",
  },
text: {
  fontFamily: "Roboto",
  fontSize: "14px",
  
  },
}));

function OpportunitySuccessContent() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Box mt="40px" width="428px">
        <Typography  align="left" className={classes.title}>
          Congratulations Tim!
        </Typography>
      </Box>
      <Box mt="44px">
        <Typography  align="left" className={classes.title}>
          You have successfully published your Opportunity: “Front-End Developer” and from this moment it’s Active.
        </Typography>
      </Box>
      <Box mt="44px" >
        <Typography  align="left" className={classes.title}>
          Good luck and we hope you find a perfect Candidate for your business!
        </Typography>
      </Box> 
        <Box mb="44px" mt="44px">
        <Typography  align="left" className={classes.text}> 
          <strong>Attention:</strong> You have to Review every Application and you have 7 days to respond to it. By Reviweing you need to Approve or Reject wanted Applicant. If you Approve Applicant, you both are going into Chat. If you Reject it, you have to writte a short reason why you are rejecting the Applicant. As soon Candidate applies, the Applicant will appear under ‘Applicants’ page where you can Review them.
        </Typography>
      </Box>
    </React.Fragment>
  )
}

export default OpportunitySuccessContent;
