import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header';
import StatusWrapper from './statusWrapper';
import AppAcceptSuccessContent from './applicationAcceptSuccessContent.js';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {APPLICATION_REVIEW } from '../../routes';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles( theme => ({
link: {
    color: '#000',
    textDecoration: 'none',
    marginBottom: "99px",
    
  },
 btn:{ 
  marginBottom: "99px",
},
btnl:{ 
  marginBottom: "99px",
  color: "black",
  backgroundColor: "white"
}
}));

function OpportunintyNewSuccess() {

  const classes = useStyles();

  const headerProps = {
    rightLink: {
      link: '/',
      label: 'Exit'
    }
  };

  return (
    <div>
      <Header {...headerProps} />
      <StatusWrapper >
        <AppAcceptSuccessContent />
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}> 
            <Box pr="10px" Maxwidth="204px" >
              <Link  to={APPLICATION_REVIEW}  className={classes.link}>
                <Button variant="outlined" className={classes.btnl}>Return to Applicants</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}> 
            <Box Maxwidth="204px">
              <Link to={APPLICATION_REVIEW}  className={classes.link}>
                <Button className={classes.btn}>Take me to Chats</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </StatusWrapper>
    </div>
  )
}

export default OpportunintyNewSuccess