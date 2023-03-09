import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

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
  note: {
    fontSize: "14px",
    marginBottom: "8px",
    fontFamily: "Roboto"
  },
  
  date: {
    fontFamily: "Gilroy-Bold",
    fontSize: "18px",
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
       <Box  mb={3}>
          <Typography variant="subtitle2" className={classes.title}>Application Status</Typography>
       </Box>
       <Box mb={1}>    
          <Typography  className={classes.note}>
            You have accepted this candidate on:
          </Typography>
      </Box>
      <Box mb={1}>    
          <Typography  className={classes.date}>
            Wed 19 Feb, 2020
          </Typography>
      </Box>
     
            
    </Box>
  )
}



export default SummaryCard;
