import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CardHeader from './cardHeader'
import { ReactComponent as ConversationSvg } from '../../assets/icons/conversation.svg'
import { applicantsInfo, gilroyBoldText } from './classes'
import { Link} from 'react-router-dom';
import {CHATS } from '../../routes';

const useStyles = makeStyles(theme => ({
  applicantsInfo,
  gilroyBoldText,
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: 28,
    height: 28,
  },
  userName: {
    marginLeft: 8
  },
  time: {
    marginLeft: 'auto',
    fontSize: '10px'
  },
  chat: {
    paddingTop: 8,
    paddingBottom: 12,
    borderTop: '1px solid #B8B8B8',
  },
  message: {
    marginTop: 5,
    fontSize: '12px',
    fontWeight: '500',
    textAlign: 'left'
  },
  link: {
    color: "black",
   textDecoration: 'none',
  }
}))

const data = [
  {
    name: 'Angela Martin',
    time: '25min ago',
    message: "The problem we are facing is beyond you and me. We need to get  you need to be sure there isn't anything embarrassing hidden in th..."
  },
  {
    name: 'Ryan Howard',
    time: '1h ago',
    message: "Thank you so much for everything, it was amazing experience so far I  you need to be sure there in the middle of text..."
  },
  {
    name: 'Erin Hannon',
    time: '2h ago',
    message: "No, I only work Remotly. To you need to be sure there isn't anything embarrassing hidden in the middle of text..."
  }
]

const UnreadMessageCard = ({ chat }) => {
  const { name, time, message } = chat
  const classes = useStyles()

  return (
    <Box className={classes.chat}>
      <Box display="flex" alignItems="center">
        <Avatar className={classes.avatar} src="" />
        <Typography variant="subtitle1" className={classes.userName}>{name}</Typography>
        <Typography variant="subtitle1" className={classes.time}>{time}</Typography>
      </Box>
      <Typography variant="subtitle1" className={classes.message}>
        {message}
      </Typography>
    </Box>
  )
}

function UnreadChats() {
  const classes = useStyles()

  const description = (
    <React.Fragment>
      <Typography className={classes.gilroyBoldText}>
        It takes 2-3 hours on average from
      </Typography>
      <Typography className={classes.gilroyBoldText}>
        Candidate to asnwer since Accept.
      </Typography>
    </React.Fragment>
  )
  return (
    <Fragment>
      <CardHeader
        title="Unread Chats"
        number="6"
        description={description}
        icon={ConversationSvg}
      />
      <Box mx="-7px" >
        {data.map(chat => <UnreadMessageCard key={chat.name} chat={chat}/>)}
      </Box>
      <Link to={CHATS} className={classes.link}>
        <Button variant="text" className={classes.applicantsInfo}>Show All Chats</Button>
      </Link>
    </Fragment>
  )
}

export default UnreadChats
