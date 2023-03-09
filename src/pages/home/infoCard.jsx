import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import { ReactComponent as PhotoSvg } from '../../assets/icons/photo.svg'

const useStyles = makeStyles(() => ({
  mainBox: {
    background: '#C4C4C4',
    borderRadius: '12px',
  },
  photoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '50%',
    minHeight: '156px',
    background: 'black',
    borderRadius: '10px 0px'
  },
  title: {
    marginBottom: '29px'
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '12px',
    padding: '12px',
    textAlign: 'justify'
  },
  tag: {
    fontSize: '10px',
    fontWeight: 'bold'
  },
  date: {
    fontSize: '10px',
    marginLeft: 'auto',
    fontWeight: 'bold'
  }
}))

function InfoCard() {
  const classes = useStyles()
  return (
    <Box className={classes.mainBox}>
      <Box display="flex">
        <Box className={classes.photoContainer}>
          <PhotoSvg />
        </Box>
        <Box padding='29px 12px 29px 12px'>
          <Typography variant="h6" className={classes.title}>
            Tooltips: Secret weapon for improving Opportunity discovery!
          </Typography>
          <Box display="flex">
            <Typography variant="inherit" className={classes.tag}>
              Tooltips
            </Typography>
            <Typography variant="inherit" className={classes.date}>
              29 Aug, 2019
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex">
        <Typography variant="inherit" className={classes.text}>
          You may have noticed that all of the tooltips featured in the examples above are 
          for singular, momentary in-app messages. Many software applications and products 
          rely on multi-stage tooltips to teach users how to navigate and use the app. Lorem 
          ipsum is super great text, but however I agree that Lorem ipsum should be used for 
          text like this and to show len... Read More
        </Typography>
      </Box>
    </Box>
  )
}

export default InfoCard
