import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import { Link, useLocation, useHistory } from 'react-router-dom';
import { HOME, NEW_OPP_SUCCESS } from '../../../routes';

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
    fontSize: "18px",
    marginBottom: "24px"
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
}));

function SummaryCard(overview) {
  const classes = useStyles();

  // console.log(overview);

  return (
    <Box border="1px solid #C4C4C4" borderRadius={8} p="20px" mb="32px">
      <Grid container spacing={2}>
        <Grid item >
          <Typography variant="subtitle2" className={classes.title}>Opportunity Overview</Typography>
        </Grid>

     
        <Grid item xs>
          <Box my="20px">
            <Divider />
          </Box>
          <Typography className={classes.ifyou}  variant="subtitle2" align="center">If you believe you got everything right press “Publish Opportunity” if not you can save and continue later or the next day.</Typography>
        </Grid>
      </Grid>
      <Link to={HOME} className={classes.link}>
      <Button>Save & Continue Later</Button>
      </Link>
      <Box mt="12px" mb="-5px">
        <Typography variant="subtitle2" align="center">or </Typography>
        <br/>
      </Box>
      <Link to={NEW_OPP_SUCCESS} className={classes.link}>
      <Button>Publish Opportunity</Button>
      </Link>
    </Box>
  )
}



export default SummaryCard;
