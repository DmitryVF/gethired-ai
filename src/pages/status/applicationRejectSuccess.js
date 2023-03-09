import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header';
import StatusWrapper from './statusWrapper';
import AppAcceptSuccessContent from './applicationRejectSuccessContent.js';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {APPLICATION_REVIEW ,APPLICANTS_ALL} from '../../routes';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid'
import { ReactComponent as Next} from '../../assets/icons/next.svg';
const useStyles = makeStyles( theme => ({
link: {
    color: '#000',
    textDecoration: 'none',
    marginBottom: "99px",
    
  },
 btn:{ 
  marginBottom: "99px",
  textAlign: "right",
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
      label: 'Take me to Home'
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
              <Link  to={APPLICANTS_ALL}  className={classes.link}>
                <Button variant="outlined" className={classes.btnl}>All Applicants</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}> 
            <Box minWidth="268px">
              <Link to={APPLICATION_REVIEW}  className={classes.link}>
                <Button className={classes.btn}
                        endIcon={<Next>send</Next>}
                >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Next Applicant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </StatusWrapper>
    </div>
  )
}

export default OpportunintyNewSuccess