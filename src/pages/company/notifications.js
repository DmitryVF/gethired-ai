import React from 'react';
import Box from '@material-ui/core/Box';
import ProfileCard from './profileCard';
import PageWrapper from '../../components/common/pageWrapper';
//import SupportCard from '../../components/common/supportCard';
import SupportChat from "../../components/common/supportChat";
//import OpportunityHeader from './opportunityHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles( {
  profile: {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
});



function CompanyProfile({onEdit}) {
  // console.log(onEdit);
  // onEdit();
 const classes = useStyles();



  const supportChatMessages = [
  { id: '1', avatar: '', message: 'Hello there Tim, my name is David, The AI of GetHired.ai and I am here to assist you with your questions.' },
  { id: '2', avatar: '', message: 'It seems you have completed your Profile to 100% and you are ready to find perfect Candidate for your business.'},
  { id: '3', avatar: '', message: 'Oh, it looks you have no active Opportunities. Do you want to Create New Opportunity?'
  }
];

const supportChatProps = {
    messages: supportChatMessages,
    questionPlaceholder: 'e.g. How to change Company Size?'
  };

  

  return (

    <React.Fragment>
    <Box ml={10} mt={3} mr={5}> 
    
    <Grid  container mt="-100px">
      <Grid item  md={8}>      
        <Typography variant="body2" className={classes.profile}>
            Notifications
          </Typography>
      </Grid>  
      <Grid item md={4}>
        <Box  width="335px">
          <SupportChat {...supportChatProps} />
        </Box>
      </Grid>
     </Grid> 
     </Box>
    </React.Fragment>
  )
}

export default CompanyProfile;
