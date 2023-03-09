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
    fontSize: "18px",
    textAlign: "left",
    color: "#000000",
    marginTop: "30px",
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
    width: "204px",
    height: "52px",
    
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
  cnt:{
    fontFamily: "Gilroy-Bold",
    fontSize: "14px",

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
      <Button onClick={handleClickOpen}
                className={classes.button}
                endIcon={<Cross>send</Cross>}> 
          Reject Applicant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </Button>
     
      <Dialog PaperProps={{style: { borderRadius: "12px" }}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Box pl="17px" pt="5px" width="468px" height="461px">

        <DialogTitle id="form-dialog-title">
          <Grid  container alignItems="center" className={classes.gridContainer}>
            <Grid item xs>
              <Box mr="-12px" mt="-6px"  display="flex" justifyContent="flex-end" alignItems="flex-end">
                  <CrossSvg onClick={handleClose}  className={classes.cross}/>
              </Box>
            </Grid>
          </Grid>
          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs className={classes.title}>
              Reject Applicant
            </Grid>
          </Grid>  

       </DialogTitle>
       <Box mb={-2}/>
        <DialogContent >
        <Box maxWidth="390px" >
          <DialogContentText className={classes.dialog}>
            In order to provide better experience for everyone, we require you to writte a short note why are you rejecting this Candidate.
          </DialogContentText>
        </Box> 
        </DialogContent>
        <Box mt={-2}  pl="20px" >
          <Box  marginTop="10px" width="390px" >
          <form>
              <TextField className={classes.field}
                //id="outlined-multiline-flexible"
                label="REJECT NOTE"
                multiline
                fullWidth
                margin="normal"
                rows="5"
                value={value}
                // defaultValue="1"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={onChange}
                variant="outlined"
              />
             </form> 
          </Box>
        </Box>    
        <Box display='flex'  pr="60px" justifyContent="flex-end">
         <Box top="-32px" right="10px" position="relative" className={classes.cnt} > {length}/260</Box>
        </Box>
        <Box display="flex"   ml="20px" mt={0}> 

          <Button onClick={handleClose} color="primary" className={classes.btnl} >
            Cancel
          </Button>
          <Link to={APP_REJECT_SUCCESS} className={classes.link}>
          <Button onClick={handleClose} color="primary" className={classes.btnr} endIcon={<Cross>send</Cross>}>
            Reject Applicant &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
          </Link>
        </Box>
        </Box>
      </Dialog>

    </div>
    
  );
}
