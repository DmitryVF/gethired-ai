import React from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// import { ReactComponent as Avatar } from '../../../assets/icons/avatar.svg'

import Box from '@material-ui/core/Box';
import InputField from '../form-helpers/inputField';

const useStyles = makeStyles( theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  msgBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '20px',
    borderRadius: 30,
    borderTopLeftRadius: 4,
    marginTop: 20
  }
}));

function SupportMiniChatForm({ messages, questionPlaceholder }) {
  const classes = useStyles();

  const {
    control, reset // , watch
  } = useForm();

  const onKeyDown = (event) => {
    const question = event.target.value;
    if (event.keyCode === 13) {
      console.log('onEnter question', question);
      reset({ question: '' })
    }
  };

  return (
    <div>
      {
        messages.map(({ id, avatar, message }) => (
          <Box key={id} mb="10px">
            <Grid container spacing={1}>
              <Grid item>
                <Avatar className={classes.avatar} src={avatar} />
              </Grid>
              <Grid item xs>
                <div className={classes.msgBox}>{message}</div>
              </Grid>
            </Grid>
          </Box>
        ))
      }
      <Box my={4}>
        <Controller
          as={InputField}
          name="question"
          placeholder={questionPlaceholder}
          defaultValue=""
          margin="none"
          control={control}
          onKeyDown={onKeyDown}
        />
      </Box>
    </div>
  )
}

SupportMiniChatForm.defaultProps = {
  messages: [],
  questionPlaceholder: ''
};

const { arrayOf, shape, string } = PropTypes;

SupportMiniChatForm.propTypes = {
  messages: arrayOf(shape({
    id: string,
    avatar: string,
    message: string
  })),
  questionPlaceholder: string
};

export default SupportMiniChatForm
