import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PageTitle from '../../components/common/pageTitle';
import { makeStyles } from '@material-ui/core/styles';

import { ReactComponent as Circle } from '../../assets/icons/circle.svg';
import { ReactComponent as Avatar } from '../../assets/icons/photoavatarblack.svg';
const useStyles = makeStyles( theme => ({
title: {
    fontFamily: "Gilroy-Bold",
    fontSize: "24px",
  },
text: {
  fontFamily: "Roboto",
  fontSize: "14px",
  
  },
  titlename: {
    fontFamily: "Gilroy-Bold",
    fontSize: "10px",
  }
}));

function OpportunitySuccessContent() {

  const classes = useStyles();

  return (
    <React.Fragment>
      <Box mt="40px" >
        <Typography  align="left" className={classes.title}>
          Congratulations Tim!
        </Typography>
      </Box>
      <Box mt="44px" >
        <Typography  align="left" className={classes.title}>
          You’ve Accepted “Jim Halpert” 
        </Typography>
        <Typography  align="left" className={classes.title}>
        as your Candidate. 
         </Typography>
        </Box>
        <Typography  align="left" className={classes.title}>
          Now you can find Jim under your ‘Chats’ tab and start converstation.
        </Typography>
      <Box display="flex"> 
          <Box mt="36px" mb= "30px" >
              <Circle/><Box ml="55px" mt="-85px"><Avatar/></Box>
          </Box> 
          <Box ml="32px" mt="86px"  >
            <Typography  align="left" className={classes.titlename}>
              FULL NAME
            </Typography>
            <Typography  align="left" className={classes.title}>
              Jim Halpert
            </Typography>    
          </Box> 
      </Box>
        <Box mb="44px" mt="50px" maxWidth="400px">
        <Typography  align="left" className={classes.text}> 
          If you bealive that you’ve found the right candidate we strongly advise you to close Active Opportunity according to status of Accepted Applicants. So we can make the most enjoyable experience for everyone.
        </Typography>
      </Box>
    </React.Fragment>
  )
}

export default OpportunitySuccessContent;
