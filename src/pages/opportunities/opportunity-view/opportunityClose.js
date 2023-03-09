import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as CrossSvg } from '../../../assets/icons/cross.svg';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import SelectField from '../../../components/common/form-helpers/selectField';
import {OPPORTUNITY_CLOSE_SUCCESS } from '../../../routes';
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
        Close this Opportunity
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
              Close this Opportunity
            </Grid>
          </Grid>  
       </DialogTitle>
       
        <DialogContent >
          <DialogContentText className={classes.dialog}>
            We just need one more info before closing this Opportunity. Please kindly asnwer it.
          </DialogContentText>
          <Box width={388} marginTop= "32px">
              <SelectField className={classes.field}
                name="opportunity"
                // control={control}
                label="OPPORTUNITY CLOSING REASON"
                defaultValue="all"
                options={[{ value: 'all', label: 'Please Select' }]}
              />
            </Box>

          <Typography className={classes.remark}>
            All other signed Applicants will recieve this notifcation about this Opportunity as it got closed.
          </Typography>
            
        </DialogContent>
        <Box  p={0} ml="22px">
        
          
          <Button onClick={handleClose} color="primary" className={classes.btnl} >
            Cancel
          </Button>
          <Link to={OPPORTUNITY_CLOSE_SUCCESS} className={classes.link}>
          <Button onClick={handleClose} color="primary" className={classes.btnr}>
            Close Opportunity
          </Button>
          </Link>
        
        </Box>
        </Box>
      </Dialog>

    </div>
    
  );
}
