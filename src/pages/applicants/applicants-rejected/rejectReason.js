import React , { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as CrossSvg } from '../../../assets/icons/cross.svg';
import { ReactComponent as Accept } from '../../../assets/icons/accept.svg';
import { ReactComponent as Cross} from '../../../assets/icons/crossclose.svg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import SelectField from '../../../components/common/form-helpers/selectField';
import { Controller } from 'react-hook-form';
import {APP_REJECT_SUCCESS } from '../../../routes';
import InputField from '../../../components/common/form-helpers/inputField';
import { Link} from 'react-router-dom';
const useStyles = makeStyles( theme => ({
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginTop: "10px",
    textAlign: "left",
  },
  dialog:{
    fontFamily: 'Roboto',
    fontSize: "16px",
    textAlign: "left",
    color: "#000000",
    marginTop: "30px",
    fontWeight: 'normal',
    marginRight: "33px"
  },
  cross:{
    cursor: "pointer"
  },
  remark:{
    marginTop: "14px",
    marginBottom: "14px",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 'normal',
    width: "388px"
  },
  btnl: {
    width: "164px",
    height: "52px",
    marginRight: "20px",
    color: "#C4C4C4",
    backgroundColor: "#FFFFFF",
    boxShadow: "none"
  },
  btnr: {
    // width: "204px",
    height: "52px",
    width: "400px"
    
  },
  // link: {
  //   color: '#000',
  //   textDecoration: 'none',
  //   paddingRight:"0px",
  // },
  cnt:{
    fontFamily: "Gilroy-Bold",
    fontSize: "14px",

  },
  link: {
    fontFamily: "Gilroy-Bold",
    fontSize: "14px",
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
    cursor: "pointer"
  },
  date:{
    color: "#C4C4C4",
    fontFamily: "Gilroy-Bold",
    fontSize: "12px"
  }
}));



export default function FormDialog() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // let [msg, setMsg] = useState(null);
  let [length, setLength] = useState(0);
  let [value, setValue] = useState(null);


  const onChange = (e) => {
      let msg = e.target.value;
      if(msg.length < 261){
          value = setValue(msg);
          length = setLength(e.target.value.length);
      }
    }  

  return (
    
    <div>
      <div onClick={handleClickOpen}
                className={classes.link}
                > 
          View reject reason
      </div>
     
      <Dialog PaperProps={{style: { borderRadius: "12px" }}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Box pl="17px" pt="5px" width="468px" height="364px">

        <DialogTitle id="form-dialog-title">
          <Grid  container alignItems="center" className={classes.gridContainer}>
            <Grid item xs>
              <Box mr="-12px" mt="-6px"  display="flex" justifyContent="flex-end" alignItems="flex-end">
                  <CrossSvg onClick={handleClose}  className={classes.cross}/>
              </Box>
            </Grid>
          </Grid>
          <Box display="flex" justifyContent="space-between" className={classes.gridContainer}>
            <Box  className={classes.title}>
              Reject Reason
            </Box>
            <Box alignSelf="center" pt={2} pr={2} className={classes.date}>
            Wed 19 Feb, 2020
            </Box>
          </Box>  

       </DialogTitle>
       <Box mb={-2}/>
        <DialogContent >
        <Box  >
          <DialogContentText >
            <Box className={classes.dialog}>
            <strong>Reason:</strong> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </Box>
          </DialogContentText>
        </Box> 
        </DialogContent>
      
        
        <Box display="flex"   ml="20px" mt={0}> 

          
          <Button fullWidth onClick={handleClose} color="primary" className={classes.btnr} >
            Close
          </Button>
        </Box>
        </Box>
      </Dialog>

    </div>
    
  );
}
