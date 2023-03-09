import React, { useState, useEffect } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PageTitle from '../../components/common/pageTitle'
import Typography from '@material-ui/core/Typography';
import { HOME} from '../../routes';
import { Link} from 'react-router-dom';
import withStyles from "@material-ui/styles/withStyles";
// import { ReactComponent as Send } from '../../assets/icons/send.svg';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { applicantsInfo, gilroyBoldText } from './classes'
// import { animateScroll } from "react-scroll";



const useStyles = makeStyles(theme => ({
  applicantsInfo,
  gilroyBoldText,
  avatar: {
    backgroundColor: theme.palette.primary.main,
    width: 28,
    height: 28,
  },
  userName: {
    fontSize: '11.5px',
    marginLeft: 8,
    fontFamily: "Roboto"
  },
  time: {
    marginLeft: 'auto',
    fontSize: '9px'
  },
  chat: {
    //paddingTop: 8,
    paddingBottom: 12,
    cursor: "pointer",
    

  },
  message: {
    //marginTop: 5,
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'left',
    lineHeight: 1.29,

    
  },
  allChats: {
    fontFamily:" Gilroy-Bold",
    fontSize: "11px",
    borderRight: '1px solid #C4C4C4',
    cursor: "pointer",
  },
  messagebold:{
    //marginTop: 5,
    fontSize: '11px',
    fontWeight: '500',
    textAlign: 'left',
    lineHeight: 1.29,
    fontWeight: "bold",
  },
  messageblur:{
    //marginTop: 5,
    fontSize: '11px',
    textAlign: 'left',
    lineHeight: 1.29,
    // color: "#c4c4c4"
    opacity: "0.1",
  },
  
  blockOuterOuter: {
    zIndex: "-2",
    width: "100%",
    height:"calc(100vh - 144px)",
    overflow: "hidden"
  },
  blockOuter: {
    width: "calc(100% + 25px)",
    height:"calc(100vh - 144px)",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  block: {
    height:"calc(100vh - 144px)",
    width: "100%",
    margin: "0 0px",
    paddingRight: "17px",
    overflowX: "hidden",
  },
  blur: {
    width: "15vw",
    position: "absolute",
    marginTop: "-70px",
    pointerEvents: "none",
    height: "70px",
    zIndex: "1",
    background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
    opacity: "1",
    content: "",
  },
  // grad: {
  //   backgroundColor: "grey",
  //   position: "relative",
  //   bottom: "100px"

  // }
}))


const UnreadMessageCard = ({ onSelect,  chat, blur=false, bold=false }) => {
  const { name, lastActive, message } = chat
  const classes = useStyles()

  return (
    
    

    <Box onClick={()=>{onSelect(chat.personId)}} mb={1.5}  borderBottom={bold? '3px solid black': (blur? "none": '1px solid #C4C4C4')} className={classes.chat}>
      
      <Box mb={1} pr={2} className={blur? classes.blur: classes.normal } display="flex" alignItems="center">
          <img  src={require("../../assets/icons/avatargrey.svg")} />
        <Typography variant="subtitle1" className={classes.userName}>{name}</Typography>
        <Typography variant="subtitle1" className={classes.time}>{lastActive}</Typography>
      </Box>
      <Box mb={1} pr={2}>
        <Typography  variant="subtitle1" className={bold? classes.messagebold:  (blur? classes.messageblur:  classes.message) }>
          {message}
        </Typography>
      </Box>
    </Box>
    
  )
}



function ChatList({ onSelect, contacts, contactId}) {

  
 
 const last = contacts.length-1;
  const classes = useStyles();
 const theme = useTheme();


// let contact =  contacts[contacts.findIndex(({personId}) => personId === contactId)];


  return (
  <React.Fragment>
    <Box p={2.0} display="flex"  justifyContent="center"  className={classes.allChats}  
     // minWidth="13vw" 
    // maxWidth="190px" 
    >
        <Box alignSelf="center"  > Showing All Opportunity Chats </Box>
         <Box alignSelf="center" mt={0.3} ml={1}  > <ExpandMoreIcon/></Box>
    </Box>

    <Box pt={2.0} pl={2.0}  pr={2.0}  
     minWidth="13vW" 
    // maxWidth="190px" 
    borderTop='1px solid #C4C4C4' borderRight='1px solid #C4C4C4'>

    <Box  className={classes.blockOuterOuter}>
      <Box  className={classes.blockOuter}>
        <Box  className={classes.block}>
          {contacts.map((contact) =>{
              return( <UnreadMessageCard onSelect={onSelect} bold={(contact.personId === contactId)? true : false} blur={false} key={contact.id} chat={contact}/>)
              //return( <UnreadMessageCard bold={(contact.personId === contactId)? true : false} blur={(contact.id === last)? true : false} key={contact.id} chat={contact}/>)
          }   
          )}
          
        </Box>
      </Box>
    </Box> 
    <Box className={classes.blur}/> 
    </Box> 
  </React.Fragment>
  )
}

ChatList.defaultProps = {
  contacts: [],
};


export default ChatList
