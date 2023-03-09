import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import ApplicationAccept from './applicationAccept';
import ApplicationReject from './applicationReject';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { ReactComponent as Cross} from '../../../assets/icons/crossclose.svg';
import { APPLICANTS } from '../../../routes';

const useStyles = makeStyles( theme => ({
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: "3px",
  },
  figure: {
    fontSize: '44px',
    fontWeight: 'bold'
  },
  figurename: {
    fontSize: '14px',
  },
  grid: {
    maxWidth: "34%" 
  },
  gridbox: {
    marginLeft: "10px" 
  },
  ifyou: {
    fontSize: "14px",
    marginBottom: "24px",
    fontFamily: "Gilroy-Bold"
  },
  
  note: {
    fontFamily: "Roboto",
    fontSize: "14px",
    textAlign: "left",
  },
  bold: {
    fontWeight: 'bold'
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
  button : {
    textAlign: "left",
  }
}));

function SummaryCard() {
  const classes = useStyles();

  // console.log(overview);

  return (
    <Box border="1px solid #C4C4C4" borderRadius={8} p="20px" mb="32px">
       <Box mb={2.5}>
          <Typography variant="subtitle2" className={classes.title}>Application Actions</Typography>
       </Box>
       <Box mb={4}>    
          <Typography  className={classes.note}>
            You have <span className={classes.bold}> 7 days remaining </span> to decide if you want to:
          </Typography>
      </Box>
      <Box mb={2.5}>
         <ApplicationReject/>
      </Box>
      <Box mb={4}>
         <ApplicationAccept/>
      </Box>
      <Typography className={classes.ifyou}  variant="subtitle2" align="center">I want to decide later.</Typography>
    </Box>
  )
}



export default SummaryCard;
