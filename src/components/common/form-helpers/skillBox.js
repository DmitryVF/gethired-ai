import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import formSchemas from '../../../config/formSchemas';
import formNames from '../../../config/formNames';
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import SelectField from '../../../components/common/form-helpers/selectField';
import skillBox from '../../../components/common/form-helpers/skillBox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import InputField from '../../../components/common/form-helpers/inputField';
import { ReactComponent as CrossSvg } from '../../../assets/icons/cross.svg';
import SearchBox from './searchBox';

const skillList =[
'HTML',
  'CSS',
  'Python',
  'Javascript: Angular',
  'PHP',
  'Javascript: React',
  'Ruby',
  'Javascript: Node.js'
  ]

const useStyles = makeStyles( theme => ({
 
  autocomplete: {
    '&::placeholder': {
        fontSize: "24px",
        color: "black",
    },    
    cursor:"pointer",
    '& > div ': {
      margin: "3px",

      padding: "14px 3px ",
      borderRadius: "8px",
       display:"inlineBlock"
    },
    
    
  },
  autoinput:{
       cursor:"pointer",
       color: "black",
       
       "&::placeholder": {
        // fontSize: "24px",
        color: "black",
        },
    },
  autoinput2:{

    borderBottomColor: "white",
    // paddingBottom: "10px",
       cursor:"pointer",
       color: "black",
       marginBottom: "60px",
       "&::placeholder": {
        // fontSize: "24px",
        color: "black",
        },
    },  
  autocomplete2: {
    display:"flex",
     borderBottomColor: "white",
     width:  "600px",  
    cursor:"pointer",
    '& > div ': {
      margin: "3px",
      alignSelf: "flex-start",
      padding: "14px 3px ",
      borderRadius: "8px",
       display:"inlineBlock",
       
    },
        
  },  
  cnt:{
    fontFamily: "Gilroy-Bold",
    fontSize: "10px",
    position: "relative",
    color: "#a0a0a0",
    top: "-30px"
  },
  btnl: {
    // width: "164px",
    height: "52px",
    marginRight: "20px",
    color: "#C4C4C4",
    backgroundColor: "#FFFFFF",
    boxShadow: "none"
  },
  btnr: {
    // width: "204px",
    height: "52px",
    
  },
  btn:{
    display: "flex",
    // alignSelf: "center",
    marginTop: "23px",
  },
  title: {
    fontFamily: "Gilroy-Bold",
    fontSize: '24px',
    // fontWeight: 'bold',
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

}));

function SkillBox({ skills, name, required: req, control: ctrl, error: err, helperText: helper, getValues: getVals, setValue: setVal, triggerValidation:trigValidation  }) {

  


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (e) => {
    console.log("handleClose e =" , e);
    setOpen(false);
    setVal("skills", changedSkill);
    trigValidation("skills");

    console.log("getVals()=",getVals()) 
  };

  const handleAdd = ({skill, years}) => {
    setSkills([...changedSkill, `${skill}(+${years} years)`])


    settValue([...changedSkill, `${skill}(+${years} years)`]);
    setVal("skills", [...changedSkill, `${skill}(+${years} years)`]);
    trigValidation("skills");

  }

  const onClick = () => {
    console.log("click");
  }

  const [changedSkill, setSkills] = useState(skills);

  const [ct, setCt] = useState(changedSkill.length);


  const [value, settValue] = useState("");


  const classes = useStyles();
  const {
    handleSubmit,setValue, watch , register, errors, triggerValidation,  control // , watch
  } = useForm({
    skills,
    validationSchema: formSchemas.oppSkillSearch
  });
  const options ={};
  const InputLabelProps = { shrink: true };
  return (
  <React.Fragment>
   <Box display="flex" flexDirection="column" alignItems="flex-end">
      <Box minWidth="468px">
        <Autocomplete
        disabled
        multiple
        closeIcon=""
        id="skills"

        // onChange={onChange}
        value = {changedSkill}
        defaultValue={changedSkill}
        // onInputChange={onInputChange}

        //options={top100Films.map(option => option.title)}
        //defaultValue={[top100Films[13].title]}
        
        classes={{ inputRoot: classes.autocomplete , input: classes.autoinput }}
        freeSolo
        // value = {changedSkill}
        // defaultValue={changedSkill}
        // inputValue = {changedSkill}

        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip 
            key={index}
            variant="default" 
            // deleteIcon={""} 
            label={option} 
            size="small"
            color="primary"
            //{...getTagProps({ index })} 
            />
          ))
        }
        renderInput={({InputLabelProps,...params}) => {
          // console.log("params== ", {...params});
          // console.log("params.inputProps=== ", params.inputProps);
          // console.log("name=", name, "ctrl=", ctrl, "err =", err, "helper = ", helper, "req=", req)
          return(

            <Controller
              as={InputField}
              name={name}
              control={ctrl}
              error={err}
              helperText={helper}
              required={req}
              {...params} 
              onClick={handleClickOpen} 
              fullWidth 
              value={value}
              defaultValue={changedSkill}
              disabled 
              // value = {changedSkill}
              // inputValue = {changedSkill}
              variant="outlined" 
              label="SKILLS" 
              placeholder="+ Add New Skill" />
        )}}
      />
      </Box>
      <Box className={classes.cnt} pr={1}> {changedSkill.length}/10 </Box>
   </Box>


   <Dialog  maxWidth={false} PaperProps={{style: { borderRadius: "12px" }}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <Box pl="17px" pt="5px" minWidth="652px" minHeight="533px">
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
              Please Search for Opportunity Skills
            </Grid>
          </Grid>  
       </DialogTitle>
       
        <DialogContent >
        <Box marginTop= "32px" >
        <form>
        <Grid spacing={2} container >
          
            <Grid lg={5} sm={12}  item>
              <Box >
                <SearchBox
                control={control}
                name="skill"
                setValue={setValue}
                watch = {watch}
                triggerValidation = {triggerValidation}
                label="SERCH FOR A SKILL"
                required
                error={getIsError(errors, 'skill')}
                helperText={getHelperText(errors, 'skill')}
                options={skillList}
                defaultValue=""

                // value={skill}
                // onChange={onSkillChange}
                />
               </Box>
            </Grid>
            <Grid lg={4} sm={12} item >
              <Box > 
                <Controller  as={InputField} 
                  control={control}
                  name="years"
                  label="YEARS OF EXPERIENCE"
                  required
                  error={getIsError(errors, 'years')}
                  helperText={getHelperText(errors, 'years')}
                  fullWidth 
                  className={classes.field}
                  defaultValue=""

                  // value={years}
                  // onChange={onYearsChange}
                />
                </Box>
            </Grid>
           <Grid lg={3} sm={12} item width="155px">

              <Button disabled={ct>9} onClick={handleSubmit(handleAdd)} color="primary" className={classes.btn} >
                + Add Skill
              </Button>
           </Grid>

         </Grid>
        </form> 
        </Box>

        <Box pt={3} pb={4} className={classes.title}>
          Added Skills ({ct} out of 10)
        </Box>


        <Box>
          <Autocomplete
              multiple
              closeIcon=""
              id="tags-filled"
              //options={top100Films.map(option => option.title)}
              defaultValue={changedSkill}
              
              classes={{ inputRoot: classes.autocomplete2 ,input: classes.autoinput2  }}
              freeSolo
              //value = {changedSkill}
              //inputValue = {changedSkill}

              // controlled:
               // value={newValue}
               value = {changedSkill}
              onChange={(event, newValue) => {
                // console.log("ct=", ct);
                // console.log("newValue=", newValue.length);
                if( (ct< 10) ){
                  setSkills(newValue);  
                }else if (newValue.length<10){
                  setSkills(newValue);
                }
                
              }}  
              

              //inputValue = {value}
              //onInputChange={onInputChange}

              renderTags={(value, getTagProps) =>
                { 
                  setCt(value.length)  ;

                  // value = [...value, "12e" ]
                  return(
                value.map((option, index) => (
                  <Chip 
                  key={index}
                  variant="default" 
                  //deleteIcon={"X"} 
                  label={option} 
                  size="small"
                  color="primary"
                  {...getTagProps({ index })} 
                  />
                )) )}
              }
              renderInput={params => {

               return(
                  <TextField {...params} onClick={handleClickOpen}    >
                  </TextField>
              )}}
            />
        </Box>

        </DialogContent>
        
       
        
        <Box mr={3.5} mt={2}  pb={5} ml="22px" display="flex" justifyContent="space-between">
        
          <Box>
          <Button fullWidth onClick={handleClose} color="primary" className={classes.btnl} >
            Cancel
          </Button>
          </Box>
          <Box width="263px" >
          <Button fullWidth onClick={handleClose} color="primary" className={classes.btnr}>
            Done
          </Button>
          </Box>
        
        </Box>
        </Box>
      </Dialog>
      


</React.Fragment>


  )
}


export default SkillBox
