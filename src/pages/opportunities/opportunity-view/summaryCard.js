import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import OpportunityClose from './opportunityClose';
import { Link, useLocation, useHistory } from 'react-router-dom';
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

        <Grid className={classes.gridbox} container justify="space-between">
        {
          Object.entries(overview).map(([key,value])=>{
            return (
                <Grid key={key} item xs={6}  className={classes.grid} >
                  <Box m="12px">
                    <Box  mt="5px">
                      <Typography  className={classes.figure} align="left">{value}</Typography>
                    </Box>
                    <Box mb="12px" mt="-5px" width="150px">
                      <Typography className={classes.figurename} align="left">{key}</Typography>
                    </Box>
                  </Box>
                </Grid>
            );
          })
        }
        </Grid>
        <Grid item xs>
          <Box my="20px">
            <Divider />
          </Box>
          <Typography className={classes.ifyou}  variant="subtitle2" align="center">If you believe you've found the right Candidate before remaining time or didn’t found yet. You may:</Typography>
        </Grid>
      </Grid>
      
      <OpportunityClose/>
      <Box mt="12px" mb="-5px">
        <Typography variant="subtitle2" align="center">or </Typography>
        <br/>
      </Box>
      <Link to={APPLICANTS} className={classes.link}>
      <Button>View Opportunity Applicants</Button>
      </Link>
    </Box>
  )
}



export default SummaryCard;
