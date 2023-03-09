import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { applicantsNumber, bottomBox } from './classes'

const useStyles = makeStyles(() => ({
  applicantsNumber,
  bottomBox,
  icon: {
    marginTop: '18px'
  }
}))

function BottomCard({ title, icon: Icon }) {
  const classes = useStyles()
  return (
    <Box className={classes.bottomBox}>
      <Typography variant="subtitle2">{title}</Typography>
      <Icon className={classes.icon}/>
    </Box>
  )
}

export default BottomCard
