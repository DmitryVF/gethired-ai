import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme=>({
  root: {
    borderBottom: '1px solid #C4C4C4',
    borderTop: '1px solid #C4C4C4',
    padding: [[8, 0]],
    margin: [[64, -24, 0, -24]],
  },
  back: {
    padding: [[14, 22]],
    ...theme.typography,
    cursor: 'pointer',
  }
}));

function StepNavigator({onNext, onBack, disabled=false}) {
  const classes = useStyles();
  return(
    <Box 
      className={classes.root}
    >
      <Grid container>
        <Grid item xs={12} md={7} lg={8}>
          <Grid container>
            <Grid item md={1}/>
            <Grid item xs={5} md={3}>
              <div className={classes.back} onClick={onBack} > Back </div>
            </Grid>
            <Grid item xs={2} md={5}/>
            <Grid item xs={5} md={3}>
              <Button disabled={disabled} onClick={onNext}>Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StepNavigator;
