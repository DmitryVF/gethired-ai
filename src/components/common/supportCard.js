import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";
import MiniChat from '../../pages/chats/miniChat'

const useStyles = makeStyles( theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: 100,
    height: 100
  },
}));

function SupportCard() {
  const classes = useStyles();

  // const {
  //   avatar, name, email, phone
  // } = supporter;

  return (
    <Box border="1px solid #C4C4C4" borderRadius={8} p="20px">
      <Grid container spacing={2}>
        <Grid item>
          <Avatar className={classes.avatar} src="" />
        </Grid>
        <Grid item xs>
          <Typography variant="h6" gutterBottom>Kelly Kapoor</Typography>
          <Box mb="12px">
            <Typography variant="caption">GETHIRED CHAT SUPPORT</Typography>
          </Box>
          <Box mb="12px">
            <Typography variant="subtitle2">kelly@gethired.ai</Typography>
          </Box>
          <Typography variant="subtitle2">+44 1632 960673</Typography>
        </Grid>
      </Grid>
      <Box my="20px">
        <Divider />
      </Box>
      <MiniChat/>
      <Box mt="20px">
        <Typography variant="body2" component="div" align="center">
          <div>(2) people in queue before you.</div>
          Average wait time {'<5'} mins.
        </Typography>
      </Box>
    </Box>
  )
}

SupportCard.defaultProps = {
  supporter: {}
};

const { shape, string } = PropTypes;

SupportCard.propTypes = {
  supporter: shape({
    avatar: string,
    name: string,
    email: string,
    phone: string
  })
};

export default SupportCard;
