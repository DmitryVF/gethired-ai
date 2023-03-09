import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { applicantsNumber, text, gilroyBoldText } from './classes'

const useStyles = makeStyles(() => ({
  applicantsNumber,
  text,
  title: {
    ...gilroyBoldText,
    marginTop: '14px'
  }
}))

function SmallCard({ title, number, icon: Icon, firstRowDescription, secondRowDescription }) {
  const classes = useStyles()
  return (
    <Fragment>
      <Typography variant="h4" className={classes.applicantsNumber}>{number}</Typography>
      <Typography variant="subtitle1" className={classes.title}>{title}</Typography>
      <Box display="flex" justifyContent="center" my="14px">
        <Icon className={classes.icon} />
      </Box>
      <Typography variant="subtitle1" className={classes.text}>{firstRowDescription}</Typography>
      <Typography variant="subtitle1" className={classes.text}>{secondRowDescription}</Typography>
    </Fragment>
  )
}

export default SmallCard
