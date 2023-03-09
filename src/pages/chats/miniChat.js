import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {OPPORTUNITY_CLOSE_SUCCESS } from '../../routes';
import { Link} from 'react-router-dom';
import Chat from './miniChatWindow';
const useStyles = makeStyles( theme => ({
 
  dialog:{
    fontSize: "18px",
    textAlign: "left",
    color: "#000000",
    marginTop: "20px",
  },
  
  
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },

}));

const messages = [
  { id: 1, personId: '2', name: 'Kelly Kapoor', avatar: "", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor mattis nunc commodo pharetra vel elit. Elementum enim, mollis id dolor, tortor in. Turpis sed arcu suspendisse neque. Varius sem feugiat lacus et sed arcu? <br/> <br/> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet." , time: "6:48 pm"},
  { id: 2, personId: '777', name: 'Me', avatar: 'photoavatarblack', message: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a point." , time: "8:22 pm" },
  
];
const selfId = "777" ;
const contactId = "2";


const contacts = [
  { id: 1, personId: '2',email: "kelly@gethired.ai", phone: "+44 1632 960673",  location: "Berlin, Germany", occupation: "Web, Mobile & Software Development", skills:"Desktop Software Development, Ecommerce Development, Mobile Development, QA & Testing, Web Development", experience: "5 years", portfolio: "portfolio.angelamartin.com", bio: "", match:"90", name: 'Kelly Kapoor', avatar: "", lastActive: "1h ago", message: "The problem we are facing is beyond you and me. We need to g..." },
]

export default function FormDialog() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
    
    
  };

  return (
    
    <div>
      <Button onClick={handleClickOpen}>
        + Initiate Chat
      </Button>
     
      <Dialog height="570px" PaperProps={{style: { marginLeft:"0px", borderRadius: "9.5px", overflow:"hidden",  height:"570px", maxWidth:"906px"}}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Box   width="906px" height="570px">

          <Chat handleClose={handleClose} messages={messages} contacts={contacts} contactId={contactId}  selfId={selfId} /> 
        
        </Box>
      </Dialog>

    </div>
    
  );
}
