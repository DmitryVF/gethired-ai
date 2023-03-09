import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {OPPORTUNITY_CLOSE_SUCCESS } from '../../routes';
import { Link} from 'react-router-dom';
const useStyles = makeStyles( theme => ({
 
  dialog:{
    fontSize: "18px",
    textAlign: "left",
    color: "#000000",
    marginTop: "30px",
  },
  
  
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
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

  return (
    
    <div>
      <Button onClick={handleClickOpen}>
        + Initiate Chat
      </Button>
     
      <Dialog PaperProps={{style: { borderRadius: "12px" }}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Box pl="17px" pt="5px" width="468px" height="461px">

          <DialogTitle id="form-dialog-title">
            
         </DialogTitle>
         
          <DialogContent >
                        
          </DialogContent>
        
        </Box>
      </Dialog>

    </div>
    
  );
}
