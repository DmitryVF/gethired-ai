import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import PageTitle from '../../components/common/pageTitle'
import Typography from '@material-ui/core/Typography';
import { HOME} from '../../routes';
import { Link} from 'react-router-dom';
import withStyles from "@material-ui/styles/withStyles";
import Chat from './chatWindow';
import ChatList from './chatList';


const useStyles = makeStyles( {
  // root: {
  //   flexGrow: 1,
  // },
  profile: {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  btn:{
  // height: '100%',
  textTransform: 'none' 
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
});

const messages = [
  { id: 0, personId: '1', name: 'Jim Halpert', avatar: "", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et sed arcu?", time: "6:46 pm"},
  { id: 1, personId: '1', name: 'Jim Halpert', avatar: "", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et sed arcu? <br/> <br/> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." , time: "6:48 pm"},
  { id: 2, personId: '777', name: 'Me', avatar: 'photoavatarblack', message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a point." , time: "8:22 pm" },
  
];
const selfId = "777" ;
const contactIdDefault = "1";

const contacts = [
  { id: 0, personId: '1', location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.jimhalpert.com", bio: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. This book is a treatise on the theory of ethics, very popular during.", match:"95", name: 'Jim Halpert', avatar: "", lastActive: "30min ago", message: "Hello I was just wondering how we could handle this transfer from work..."},
  { id: 1, personId: '2', location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.angelamartin.com", bio: "", match:"90", name: 'Angela Martin', avatar: "", lastActive: "1h ago", message: "The problem we are facing is beyond you and me. We need to g..." },
  { id: 2, personId: '3', location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.ryanhoward.com", bio: "", match:"90", name: 'Ryan Howard', avatar: "", lastActive: "2day ago", message: "Thank you so much for everything, it was amazing experience so far I h..." },
  { id: 3, personId: '4', location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.erinhannon.com", bio: "", match:"90", name: 'Erin Hannon', avatar: "", lastActive: "3days ago", message: "No, I only work Remotly. But however if job is good I am willing to move to..." },
  { id: 4, personId: '5', location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.qwightschrute.com", bio: "", match:"90", name: 'Dwight Schrute', avatar: "", lastActive: "1week ago", message: "Oh my, I just hope we can ge this right, unless we can try to search for som..." },
  { id: 5, personId: '6', location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.stanleyhudson.com", bio: "", match:"90", name: 'Stanley Hudson', avatar: "", lastActive: "1week ago", message: "I really liked this amazing experience" }
]


function Chats() {
  const classes = useStyles();
  const theme = useTheme();

  const [contactId, setContact] = React.useState(contactIdDefault);
  

  const onSelect = (personId)=>{
    setContact(personId);
    // console.log("onSelect", personId);
  }

  return (
    <Box height='90vh' 
     // minWidth="1264px"
     >
    <Grid  spacing={0} justify="space-between" container height='100vh'>
      
      <Grid item xs={12} md={2} display='flex' >

      <Box minWidth= "18vw" pr={2}>
          <ChatList onSelect={onSelect} contacts={contacts} contactId={contactId}/>
        </Box>
      </Grid>
      <Grid   item xs={12} md={10} >
        <Box minWidth= "80vw" ml={1}>
          <Chat messages={messages} contacts={contacts} contactId={contactId}  selfId={selfId} />
        </Box>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Chats
