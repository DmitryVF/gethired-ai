import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button'
import PageTitle from '../../components/common/pageTitle'
import TabPanel from '../../components/common/tabPanel'
import Typography from '@material-ui/core/Typography';
//import OpportunitiesTable from './opportunitiesTable'
import { a11yProps } from '../../components/common/helpers'
import SelectField from '../../components/common/form-helpers/selectField';
import { NEW_OPP} from '../../routes';
import { Link} from 'react-router-dom';
import withStyles from "@material-ui/styles/withStyles";
import Card from './card';
import CardEdit from './cardEdit';
import Notifications from './notifications';
import Payments from './payments';

const useStyles = makeStyles( {
  label0:{
    alignItems: '‎flex-start',
    position: "relative",
    left: "2px",
    textTransform: "none ",
    fontSize: '18px',
  },
   label1:{
    alignItems: '‎flex-start',
    position: "relative",
    left: "-14px",
    textTransform: "none ",
    fontSize: '18px',
  },
   label2:{
    alignItems: '‎flex-start',
    position: "relative",
    left: "9px",
    textTransform: "none ",
    fontSize: '18px',
  },
   label3:{
    alignItems: '‎flex-start',
    position: "relative",
    left: "4px",
    textTransform: "none ",
    fontSize: '18px',
  },
  profile: {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  tabRoot: {
    textTransform: 'none',
    textAlign: "left",
    width: "1px",

  },
  btn:{
  // height: '100%',
  textTransform: 'none' 
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
});

const tabs = [
  { value: 'profile', label: 'Company Profile   ', count: "" },
  { value: 'notifications', label: 'Notifications   ', count: "" },
  { value: 'payment', label: 'Payment Methods', count: "" },
  { value: 'history', label: 'Payment History', count: ""  }
];


const StyledTabs = withStyles({

  
  // button: {textAlign: "left"},
  //labelContainer: {textAlign: "left"},
  // 'div >button >span':{
  //   alignItems: '‎flex-start',
  // },
  // labelIcon:{
  //   position: "relative",
  //   left: "0px"
  // },
  indicator: {
    left: "10px",
    width: "4px",

    height: "24px !important",
    marginTop: "10px !important",
    paddingTop: "4px",
    display: 'flex',
    
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: 'black',
      border: "2px solid black",
      borderRadius: "8px"
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

function Company() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleTabChange = (event, value) => {
    setValue(value)
  };

  const handleChangeIndex = index => {
    setValue(index)
  };

const  onSave = () => {
    //console.log("onSave");
    setContent(<Card onEdit={onEdit}/>);
  };  

// tabContent = ;
const  onEdit = () => {
    //console.log("onedit");
    setContent(<CardEdit onSave={onSave}/>);
  };

//const [tabContent, setContent] = useState(<CardEdit onSave={onSave}/>);
 const [tabContent, setContent] = useState(<Card onEdit={onEdit} />);


  return (
    <Box ml={2} >
    <Grid   container>
      
      <Grid item xs={2} display='flex'
        >
      <Box mt={5}>
        <StyledTabs
          value={value}
          orientation="vertical"
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
        
              <Tab key="profile" label= 'Company Profile   ' 
                classes={{
                  root: classes.label0, 
                }}
              {...a11yProps(0)}/>
              <Tab key="notifications" label= 'Notifications' 
                classes={{
                  root: classes.label1, 
                }}
              {...a11yProps(1)}/>
              <Tab key="payment" label= 'Payment Methods'
                classes={{
                  root: classes.label2, 
                }}
                 {...a11yProps(2)}/>
              <Tab key="history" label= 'Payment History'
                  classes={{
                  root: classes.label3, 
                }}
                 {...a11yProps(3)}/>

            ))
          }
        </StyledTabs>
        </Box>
      </Grid>
      <Grid item xs={10} >
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  pt="0px" value={value} index={0} dir={theme.direction}>
          {tabContent}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <Notifications/>
          
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Payments/>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <Box ml={10} mt={3}>
            <Typography variant="body2" className={classes.profile}>
            Payment History
            </Typography>
            </Box>
          </TabPanel>
      </SwipeableViews>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Company
