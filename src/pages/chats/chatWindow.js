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
  titleName: {
    fontSize: '10px',
    fontFamily: "Gilroy-Bold",
  },
  title: {
    fontSize: '18px',
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
    fontSize: '14px',
    fontWeight: 'normal',
    fontFamily: "Roboto",
    width: "100%",
    height: "64px",
    // color: '#000',
    // textDecoration: 'none',
    // paddingRight:"0px",
    // marginTop: "0px",
    // marginBottom: "0px",
    // borderRadius: "0px"
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
    fontSize: "12px",
    marginTop: "9px",
    color: "#C4C4C4",
    fontWeight: "normal"
  },
  queueWindowOuterOuter:{
    width: "100%",
    height:"calc(100vh - 200px)",
    // width: "707px",
    // height: "90vh",
    // height: "515px",
    // margin: "0 25px",
    overflow: "hidden",
  },
  queueWindowOuter:{
    width: "calc(100% + 25px)",
    height:"calc(100vh - 200px)",
    // width: "102.5%",
    // width: "727px",
    // width: '270px',
    // height: "90vh",
    paddingRight: "0px",
    overflowX: "hidden",
    overflowY: "scroll"
  },
  queueWindow: {
    height:"calc(100vh - 200px)",
    // height: "90vh",
    width: "100%",
    // margin: "0 0px",
    // marginRight: "-9px",
    paddingRight: "17px",
    overflowX: "hidden",
  },
  pic: {

    background: "#C4C4C4",
    
  },
  name:{
    fontFamily: "Gilroy-Bold",
    fontSize: "24px",
  },
  match:{
    fontFamily: "Gilroy-Bold",
    fontSize: "10px",
  },
  descriptionTitle:{
    fontFamily: "Gilroy-Bold",
    fontSize: "9px",
  },
  description:{
    fontFamily: "Gilroy-Bold",
    fontSize: "13px",
  },
  rightBlockOuterOuter: {
    width: "100%",
    height:"calc(100vh - 390px)",
    overflow: "hidden"
  },
  rightBlockOuter: {
    width: "calc(100% + 25px)",
    height:"calc(100vh - 390px)",
    overflowY: "scroll",
    overflowX: "hidden",
  },
  rightBlock: {
    height:"calc(100vh - 390px)",
    width: "100%",
    margin: "0 0px",
    paddingRight: "17px",
    overflowX: "hidden",
  },
  centerBlock: {
    height:"calc(100vh - 69px)",
    // overflowY: "scroll"
  }
}));





const Message = ( {msg, selfId}) =>{

  const {id, personId, avatar, message, name , time} = msg;

  const classes = useStyles();
  // console.log("key= ", id);
  if (personId === selfId){
    return(
    <Box id={id}  alignSelf="flex-end"  mb="10px">
      <Box display="flex"> 
        <Box maxWidth="537px">
          <Box  className={classes.msgBoxMe}>
          <div dangerouslySetInnerHTML={{ __html: message }} />
          </Box>
        </Box>
        <Box ml={1} mb={-2} mr={2.5} alignSelf="flex-end"> 
        <Avatar className={classes.avatarme}  >
           <img display="block" width="14px" src={avatar? require("../../assets/icons/"+avatar+ ".svg") : ""} />
           { avatar ? "" : name.charAt(0)  }
        </Avatar>
        </Box>
      </Box>
      <Box maxWidth="537px" display="flex" justifyContent="center">
          <Box ml={-5} textAlign="center" className={classes.time}>{time}</Box>
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
        <Box maxWidth="537px">
          <Box  className={classes.msgBox}>
          
          <div dangerouslySetInnerHTML={{ __html: message }} />
          </Box>
        </Box>
        <Box maxWidth="537px" display="flex" justifyContent="center">
          <Box textAlign="center" className={classes.time}>{time}</Box>
        </Box>
        </Grid>
      </Grid>
    </Box>
    )
  }
}







function ChatWindow({ messages, contacts, contactId, selfId}) {

  
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
let [msg, setValue] = useState("");

// let msg;
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
  if(msg){
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
};

useEffect( () => { scrollToBottom() }, [messagesInt] );


  return (
    <Box ml={0} >
    <Grid justify="space-between" spacing={0} container>
     
      <Grid item xs={12} md={8} >
        <Grid container>
         <Grid item xs={12} md={1} /> 
         <Grid item xs={12} md={11}>


        <Box 

          minWidth = "52.7vw"
         ml={-4} mr={2} className={classes.centerBlock}>
         


          <Box  pt={2.5} className={classes.titleName}> OPPORTUNITY APPLYING FOR </Box>
          <Box  pb={2.5} pr={0} display="flex" justifyContent= "space-between" >
            <Box className={classes.title}> Front-End Developer</Box>
            <Dots display="box"  />
          </Box>
          <Box className={classes.queueWindowOuterOuter}>
          <Box  className={classes.queueWindowOuter}>
          <Box id="ContainerElementID" display="flex" flexDirection="column"   className={classes.queueWindow}>
            {
              messagesInt.map((message) => (
             
                  <Message key={message.id} msg={message}  selfId={selfId}/>
             
              ))
            }
          </Box>
          </Box>
          </Box>
          <form onSubmit={onSend}>
            <Box display="flex" justifyContent="flex-end" borderTop="1px solid #C4C4C4">
            <InputBase fullWidth  display="box"   //className={classes.input}
                  name="input"
                  classes={{ root: classes.selectMenu }}
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


        </Grid>
      </Grid>
      <Grid item xs={12}  md={3}>
        <Box 
         // pr={-2.5}
          // maxWidth="600px"
          minWidth = "24vw"
          ml={-9}
          >
          <Box display="flex" alignItems="center" justifyContent="center" ml={0} 
           // minWidth="302px" 
           minHeight="230px"
           className={classes.pic} >
            <img display="block" 
            // width="32px"
             src={require("../../assets/icons/photoavatarblack.svg")}/>
          </Box>
          <Box borderLeft='1px solid #C4C4C4'>
            
            
            <Box 
            // minWidth="273px" 
            ml={2.0} 
            mr={2.0}  pb={2.0} display="flex"  borderBottom="1px solid #C4C4C4" flexDirection="column" alignItems="center" >
              <Box mb={1} mt={2.5} className={classes.name}>{contact.name}</Box>
              <Box mb={1} className={classes.match}>{contact.match}% Match</Box>
            </Box>
            <Box className={classes.rightBlockOuterOuter}>
              <Box className={classes.rightBlockOuter}>
                <Box className={classes.rightBlock} p={2.0} >
                  <Box mb={1.5} mt={1} className={classes.descriptionTitle}>LOCATION TO WORK</Box>
                  <Box mb={2.5} className={classes.description}>{contact.location}</Box>
                  <Box mb={0.5} className={classes.descriptionTitle}>FIELD OF OCCUPATION</Box>
                  <Box mb={2.5} className={classes.description}>{contact.occupation}</Box>
                  <Box mb={0.5} className={classes.descriptionTitle}>SKILLS</Box>
                  <Box mb={2.5} pr={5} className={classes.description}>{contact.skills}</Box>
                  <Box mb={0.5} className={classes.descriptionTitle}>YEARS OF EXPERIENCE</Box>
                  <Box mb={2.5} className={classes.description}>{contact.experience}</Box>
                  <Box mb={0.5} className={classes.descriptionTitle}>PORTFOLIO LINK</Box>
                  <Box mb={2.5} className={classes.description}>{contact.portfolio}</Box>
                  <Box  className={classes.descriptionTitle}>SHORT BIO</Box>
                  <Box mb={2.5} pr={5} className={classes.description}>{contact.bio}</Box>
                </Box>
              </Box>
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
