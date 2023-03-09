import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as CrossSvg } from '../../assets/icons/cross.svg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import SelectField from '../../components/common/form-helpers/selectField';
import {HOME } from '../../routes';
import { Link} from 'react-router-dom';
import InputField from '../../components/common/form-helpers/inputField';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles( theme => ({
  title: {
    fontSize: '24px',
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
  
  btnl: {
    width: "92px",
    height: "52px",
    marginRight: "20px",
    color: "#C4C4C4",
    backgroundColor: "#FFFFFF",
    boxShadow: "none"
  },
  btnr: {
    width: "316px",
    height: "52px",
    
  },
  btn: {
    width: "175px",
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
  member: {
    marginTop: '-5px',
    
    fontFamily: 'Gilroy-Bold',
    fontSize: '10px',
  },
  field:{
    width:"428px"
  }
}));



export default function FormDialog(defaultValues) {

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
      <Button className={classes.btn} onClick={handleClickOpen}>
        + Add new Member
      </Button>
     <Box position="absolute" margin="0px">
      <Dialog    PaperProps={{style: { margin:"0px", maxHeight: "100%",
        position:"absolute", width:"469px", height:"100vh", top:"0px", right:"0px", borderRadius: "0px" }}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Box >
        <Box >

        <DialogTitle id="form-dialog-title">
          <Grid  container alignItems="center" >
            <Typography className={classes.member} >NEW MEMBER</Typography>
          </Grid>
          <Grid container alignItems="center" className={classes.gridContainer}>
            <Grid item xs className={classes.title}>
              + Add new Member
            </Grid>

            <form>
            <Box width="428px" display="flex">
              <InputField 
                //as={InputField}
                name="fullName"
                label="FULL NAME"
                //required
                //control={()=>{}}
                //error={getIsError(errors, 'oppTitle')}
                //helperText={getHelperText(errors, 'oppTitle')}
              /> 
            </Box>
              <Box width="428px" mt="-15px" display="flex">
              <SelectField
                //inputStyle={{ fontSize: "50px" }}
                //className={classes.input}
                label="FULL NAME"
                name="role"
                label="ROLE"
                //required
                //error={getIsError(errors, 'fullName')}
                defaultValue="default"
                //helperText={getHelperText(errors, 'fullName')}
                options={[{ value: 'default', label: 'Please Select' } ]}
              /> 
              
              </Box>

              <Box width="428px" marginTop="10px"  display="flex">
                <TextField className={classes.field}
                  label="ROLE DESCRIPTION"
                  multiline
                  rows="2"
                  InputLabelProps={{
                  shrink: true,
                }}
                  // value=""
                  // defaultValue="1"
                  //onChange={handleChange}
                  variant="outlined"
                />
              </Box>
              <Box width="428px" mt="-5px" display="flex">
              <InputField 
                //as={InputField}
                name="eMail"
                label="E-MAIL ADDRESS"
                //required
                //control={()=>{}}
                //error={getIsError(errors, 'oppTitle')}
                //helperText={getHelperText(errors, 'oppTitle')}
              /> 
              </Box>
              <Box width="428px" mt="-15px" display="flex">
              <InputField 
                //as={InputField}
                name="password"
                label="PASSWORD"
                type="password"
                //required
                //control={()=>{}}
                //error={getIsError(errors, 'oppTitle')}
                //helperText={getHelperText(errors, 'oppTitle')}
              /> 
              </Box>
              <Box width="428px" mt="-15px" display="flex">
              <InputField 
                //as={InputField}
                name="password2"
                label="PASSWORD AGAIN"
                type="password"
                //required
                //control={()=>{}}
                //error={getIsError(errors, 'oppTitle')}
                //helperText={getHelperText(errors, 'oppTitle')}
              /> 
              </Box>
            </form>


          </Grid>  
       </DialogTitle>

        
        <Box  mt="-20px" ml="22px">
          <Link to={HOME} className={classes.link}>
          <Button color="primary" className={classes.btnl} >
            Cancel
          </Button>
          </Link>
          <Link to={HOME} className={classes.link}>
          <Button  color="primary" className={classes.btnr}>
            Submit
          </Button>
          </Link>
        
        </Box>
        </Box>
        </Box>
      </Dialog>
</Box>
    </div>
    
  );
}
