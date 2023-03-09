import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { ReactComponent as DangerSvg } from '../../assets/icons/danger.svg'
import {PROFILE } from '../../routes';
import { Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  boxProfileInfo: {
    display: 'flex',
    background: '#C4C4C4',
    alignItems: 'center',
    borderRadius: '20px',
    color: theme.palette.primary.main,
    padding: '11px 28px 11px 28px',
  },
  icon: {
    marginRight: '28px'
  },
  percentageInfo: {
    textAlign: 'center'
  },
  message: {
    fontFamily: 'Roboto',
    fontSize: '14px'
  },
  progressTextGrid: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('1337')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      justifyContent: 'center',
      flexGrow: 0
    },
    [theme.breakpoints.up('1337')]: {
      maxWidth: '31.5%',
      flexBasis: '31.5%',
      flexGrow: 0
    },
    [theme.breakpoints.up('1630')]: {
      maxWidth: '25%',
      flexBasis: '25%',
      flexGrow: 0
    }
  },
  messageGrid: {
    padding: '8px',
    [theme.breakpoints.down('1337')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      flexGrow: 0
    },
    [theme.breakpoints.up('1337')]: {
      maxWidth: '47.9%',
      flexBasis: '47.9%',
      flexGrow: 0
    },
    [theme.breakpoints.up('1630')]: {
      maxWidth: '50%',
      flexBasis: '50%',
      flexGrow: 0
    }
  },
  buttonGrid: {
    [theme.breakpoints.down('1337')]: {
      maxWidth: '100%',
      flexBasis: '100%',
      flexGrow: 0
    },
    [theme.breakpoints.up('1337')]: {
      maxWidth: '20.6%',
      flexBasis: '20.6%',
      flexGrow: 0
    },
    [theme.breakpoints.up('1630')]: {
      maxWidth: '25%',
      flexBasis: '25%',
      flexGrow: 0
    },
   
  },
   link: {
   textDecoration: 'none',
  }
}))

function ProfileProgressInfo() {
  const classes = useStyles()
  return (
    <Box>
      <Grid className={classes.boxProfileInfo} container>
        <Grid item xs={12} sm={12} md={12} className={classes.progressTextGrid}>
          <Box display="flex" alignItems="center">
            <DangerSvg className={classes.icon} />
            <Typography variant="h6" className={classes.percentageInfo}>
              Hey Tim, your profile is currently at 75%.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.messageGrid}>
          <Box mx='auto' display="flex" justifyContent="center" textAlign="center">
            <Typography className={classes.message}>
              It is absolutely necessary to complete your Profile 
              to 100% before posting a new Opportunity.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.buttonGrid}>
          <Box className={classes.link}> 
          <Link to={PROFILE} className={classes.link}>
            <Button size="medium" className={classes.link}>
              Complete now
            </Button>
          </Link>  
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ProfileProgressInfo
