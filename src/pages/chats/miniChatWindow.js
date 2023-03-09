import React, { useState, useEffect } from 'react'
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
import { ReactComponent as Dots } from '../../assets/icons/dots.svg';
import { ReactComponent as Send } from '../../assets/icons/send.svg';
import InputField from '../../components/common/form-helpers/inputField';
import { useForm, Controller } from 'react-hook-form';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import Avatar from '@material-ui/core/Avatar';
import { animateScroll } from "react-scroll";



const useStyles = makeStyles(theme => ( {
  
  title: {
    fontSize: '14px',
    fontFamily: "Gilroy-Bold",
  },
  profile: {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  btn:{
  // height: '100%',
  // textTransform: 'none',
  // backgroundColor
  // width: "24px",
  // height: "24px",
  display: "block",
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
  input: {
    fontSize: '11px',
    fontWeight: 'normal',
    fontFamily: "Roboto",
    width: "100%",
    height: "50px",
    marginLeft: "16px",
  },
  avatar: {
    backgroundColor: "black",
    fontWeight: "normal",
    fontSize: "11px",
    // padding: "5px",
    height: "35px",
    width: "35px"
  },
  avatarme: {
    backgroundColor: "#C4C4C4",
    fontWeight: "normal",
    fontSize: "11px",
    // padding: "5px",
    height: "35px",
    width: "35px"
  },
  msgBox: {
    padding: "15px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '18px',
    borderRadius: 24,
    borderTopLeftRadius: 4,
    marginTop: 18,
    
  },
  msgBoxMe: {
    padding: "15px",
    backgroundColor: "#C4C4C4",
    color: "black",
    fontFamily: 'Roboto',
    fontSize: 14,
    lineHeight: '18px',
    borderRadius: 24,
    borderBottomRightRadius: 4,
    marginTop: 18,
    
  },
  time:{
    fontFamily: "Gilroy-Bold",
    fontSize: "10px",
    marginTop: "9px",
    color: "#C4C4C4",
    fontWeight: "normal"
  },
  queueWindowOuterOuter:{
    // width: '250px',

    width: "602px",
    // height: "535px",
    height: "450px",
    // margin: "0 25px",
    overflow: "hidden",
  },
  queueWindowOuter:{
    display:"flex",
    alignItems: "flex-end",
    width: "622px",
    // width: '270px',
    height: '100%',
    paddingRight: "0px",
    overflowX: "hidden",
    overflowY: "scroll"
  },
  queueWindow: {

    width: "100%",
    margin: "0 0px",
    // paddingRight: "17px",
  },
  pic: {

    background: "#C4C4C4",
    
  },
  name:{
    fontFamily: "Gilroy-Bold",
    fontSize: "19.5px",
  },
  match:{
    fontFamily: "Gilroy-Bold",
    fontSize: "8px",
  },
  descriptionTitle:{
    fontFamily: "Gilroy-Bold",
    fontSize: "9px",
  },
  description:{
    fontFamily: "Gilroy-Bold",
    fontSize: "13px",
  },
  note: {
    fontFamily: "Roboto",
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    color:"black",
  },
    btnr: {
      padding: "0px",
    width: "238px",
    height: "42px",
    marginLeft: "-3px",
  },
}));





const Message = ( {msg, selfId}) =>{

  const {id, personId, avatar, message, name , time} = msg;

  const classes = useStyles();
  console.log("key= ", id);
  if (personId === selfId){
    return(
    <Box id={id} alignSelf="flex-end" mr={0}  mb="10px">
      <Box display="flex" justifyContent="flex-end"> 
        <Box maxWidth="469px">
          <Box  className={classes.msgBoxMe}>
          <div dangerouslySetInnerHTML={{ __html: message }} />
          </Box>
        </Box>
        <Box ml={1} mb={-2} mr={0.5} alignSelf="flex-end"> 
        <Avatar className={classes.avatarme}  >
           <img display="block" width="14px" src={avatar? require("../../assets/icons/"+avatar+ ".svg") : ""} />
           { avatar ? "" : name.charAt(0)  }
        </Avatar>
        </Box>
      </Box>
      <Box width="469px" paddingRight="47px" display="flex" justifyContent="flex-end">
          <Box textAlign="center" className={classes.time}>{time}</Box>
      </Box>
      
    </Box>
    )
  }else{

      // console.log("sssssss", name)
      // console.log("selfId", selfId)
      
    return(
    <Box id={id} mb="10px">
      <Grid container spacing={1}>
        <Grid item>
          <Avatar className={classes.avatar} >
           <img src={avatar? require("../../assets/icons/"+avatar+ ".svg") : ""} />
           { avatar ? "" : name.charAt(0)  }
          </Avatar>
        </Grid>
        <Grid item xs>
        <Box maxWidth="518px">
          <Box  className={classes.msgBox}>
          
          <div dangerouslySetInnerHTML={{ __html: message }} />
          </Box>
        </Box>
        <Box maxWidth="518px" display="flex" justifyContent="flex-start">
          <Box textAlign="center" className={classes.time}>{time}</Box>
        </Box>
        </Grid>
      </Grid>
    </Box>
    )
  }
}







function ChatWindow({ handleClose, messages, contacts, contactId, selfId}) {

  
  // componentDidMount() {
  //   this.scrollToBottom();
  // }
  // componentDidUpdate() {
  //     this.scrollToBottom();
  // }

  useEffect(() => {
    scrollToBottom();
  }, []);

 
  const scrollToBottom = () => {
    animateScroll.scrollToBottom({
        containerId: "ContainerElementID"
      });
  };




  const classes = useStyles();
 const theme = useTheme();

// const {
//     handleSubmit, control, // , errors, watch
//   } = useForm({
//     // defaultValues,
//     // validationSchema: formSchemas.
//   });

let contact =  contacts[contacts.findIndex(({personId}) => personId === contactId)];

// const [msg, setName] = useState("");

const [messagesInt, setQueue] = useState(messages);
let [msg, setValue] = useState(null);

const onChange = (e) => {
    msg = setValue(e.target.value);
  }
 // const handleChange = (e)=> {
 //  // msg = e.target.value;
 //  // console.log("handleChange", e.target.value);
 //  msg = e.target.value;
 // }

const onSend = (data) => {
    data.preventDefault();
    let newVal = [...messagesInt, 
        {id: Math.random(), 
          personId: '777', 
          name: 'Me', 
          avatar: 'photoavatar', 
          message: msg , time: "8:22 pm" 
        }
    ];
    setValue("");
    setQueue(newVal);
};

useEffect( () => { scrollToBottom() }, [messagesInt] );


  return (
    <Box   >
    <Grid container>
      
      <Grid item xs={12} md={9} >
        
        <Box  ml={2.5} mt={2.5} mr={5}>
          <Box  pb={2.5} mr={2.5} display="flex" justifyContent= "space-between" >
            <Box className={classes.title}> GetHired Live Chat</Box>
            <Dots display="box" height="12px" />
          </Box>
          <Box className={classes.queueWindowOuterOuter}>
          <Box id="ContainerElementID" className={classes.queueWindowOuter}>
          <Box display="flex" flexDirection="column"   className={classes.queueWindow}>
            {
              messagesInt.map((message) => (
             
                  <Message key={message.id} msg={message}  selfId={selfId}/>
             
              ))
            }
          </Box>
          </Box>
          </Box>
          
        </Box>
        <Box mr={5.5}> 
          <form onSubmit={onSend}>
              <Box display="flex" justifyContent="flex-end" borderTop="1px solid #C4C4C4">
              <InputBase  display="box"   //className={classes.input}
                    name="input"
                    classes={{ root: classes.input }}
                    // label="FULL NAME"
                    //onChange={e => setName(e.target.value)}
                    onChange={onChange}
                    placeholder= "Start typing here..."
                    inputProps={{ 'aria-label': 'naked' }}
                    value={msg}
                    
                />
                <Box h={2} alignSelf="center">
                  <IconButton  className={classes.btn} onClick={onSend}> <Send/> </IconButton>
                </Box>
              </Box>
          </form>
        </Box>

      </Grid>
      <Grid item xs={12}  md={3} >
        <Box ml={-5.5}>
          <Box display="flex" alignItems="center" justifyContent="center" ml={0}  minHeight="206px" className={classes.pic} >
            <img display="block" width="26px" src={require("../../assets/icons/photoavatarblack.svg")}/>
          </Box>
          <Box marginRight="16px" height="100%" borderLeft='1px solid #C4C4C4' >
            <Box  ml={2.0}   pb={2.0} display="flex" flexDirection="column" alignItems="center" borderBottom="1px solid #C4C4C4">
              <Box mb={1} mt={2} className={classes.name}>{contact.name}</Box>
              <Box mb={0} className={classes.match}>GETHIRED CHAT SUPPORT</Box>
            </Box>
            <Box borderBottom='1px solid #C4C4C4'  overflow="hidden"  ml={2.0}>
              <Box mb={1} mt={1} className={classes.descriptionTitle}>EMAIL ADDRESS</Box>
              <Box mb={2.5} className={classes.description}>{contact.email}</Box>
              <Box mb={0.5} className={classes.descriptionTitle}>PHONE CONTACT</Box>
              <Box mb={2.5} className={classes.description}>{contact.phone}</Box>
            </Box>
           
           <Box mt={3} mb={2} className={classes.note} overflow="hidden"  ml={2.0}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
           </Box>
           <Box  p={0} ml="22px" pb={4}>
            <Button onClick={handleClose} color="primary" className={classes.btnr}>
              Close this chat
            </Button>
            
        
        </Box>

          </Box>
        </Box>
      </Grid>
    </Grid>
    </Box>
  )
}

ChatWindow.defaultProps = {
  messages: [],
  // questionPlaceholder: ''
};


export default ChatWindow
