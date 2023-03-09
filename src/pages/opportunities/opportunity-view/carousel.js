import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const tutorialSteps = [
  {
    label: '',
    imgPath:  require("../../../assets/png.jpg"),
  },
  {
    label: '',
    imgPath:  '',
  },
 
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginBottom: "-80px"
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
  progress:{
    position:"relative",

    top:"-170px",
    background: "none",
    '& > div': {
      display:"none"
    },
    '& > button.Mui-disabled': {
      backgroundColor: "#2D2D2D" ,
      color: "white"
    },
    '& > button:hover': {
      backgroundColor: "#c2c2c2" ,
      color: "white"
    },
  },
  btn:{
    backgroundColor: "#2D2D2D" ,
    color: "white",
    margin: "20px"
  }
}));

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      
      <img
        className={classes.img}
        src={tutorialSteps[activeStep].imgPath}
        alt={tutorialSteps[activeStep].label}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        classes={{ positionStatic: classes.progress }}
         variant="progress"
        activeStep={activeStep}
        nextButton={
          <IconButton size="small" onClick={handleNext} 
          disabled={activeStep === maxSteps - 1}
          className={classes.btn}
          //classes={{ colorSecondary: classes.btn }}
          >
            
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack} 
          disabled={activeStep === 0}
          className={classes.btn}
          //classes={{ colorSecondary: classes.btn }}
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
           
          </IconButton>
        }
      />
    </div>
  );
}
