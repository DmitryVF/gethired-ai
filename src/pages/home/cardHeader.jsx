import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { applicantsNumber, text } from './classes'

export const useStyles = makeStyles(() => ({
  applicantsNumber,
  applicantsInfo: {
    '& *': text,
  },
  icon: {
    marginLeft: 'auto'
  }
}))

function CardHeader({ title, number, description, icon: Icon }) {
  const classes = useStyles()

  return (
    <Fragment>
      <Box marginBottom="43px">
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="37px">
        <Typography variant="h4" className={classes.applicantsNumber}>{number}</Typography>
        <Box
          display="flex"
          flexDirection="column"
          marginLeft="26px"
          alignItems="flex-start"
          className={classes.applicantsInfo}
        >
          {description}
        </Box>
        <Icon className={classes.icon} />
      </Box>
    </Fragment>
  )
}

export default CardHeader
