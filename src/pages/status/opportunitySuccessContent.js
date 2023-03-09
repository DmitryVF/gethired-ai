import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import PageTitle from '../../components/common/pageTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
title: {
    fontFamily: "Gilroy-Bold",
    fontSize: "32px",
  },
text: {
  fontFamily: "Gilroy-Bold",
  fontSize: "18px",
  width: "386px",
  },
}));

function OpportunitySuccessContent() {

  const classes = useStyles();

  return (
    <React.Fragment>
    <Box mb={4} mt="110px">
      <Typography  align="left" className={classes.title}>
        You have successfully closed this opportunity.
      </Typography>
      </Box>
      <Box mb="75px" >
          <Box mb={9.5} />
        <Typography variant="subtitle1" align="left" className={classes.text}>
          We hope this experience was enjoyable for you and you’re happy with chosen Candidates.
          <Box mb={3.5} />
          However we have few short questions to wrap this up. How we would make this experience even better for future time.
        </Typography>
      </Box>
    </React.Fragment>
  )
}

export default OpportunitySuccessContent;
