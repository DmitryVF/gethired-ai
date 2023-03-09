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
    fontSize: "32px",
  },
text: {
  fontFamily: "Gilroy-Bold",
  fontSize: "18px",
  
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
      
      <Box mt="90px" >
        <Typography  align="left" className={classes.title}>
          You have successfully 
        </Typography>
        <Typography  align="left" className={classes.title}>
        Rejected this candidate.
         </Typography>
        </Box>
        
      
        <Box mb="131px" mt="132px">
        <Typography  align="left" className={classes.text}> 
          We are sorry that you didn’t like this <br/> candidate. But however don’t loose hope.
        </Typography>
      </Box>
    </React.Fragment>
  )
}

export default OpportunitySuccessContent;
