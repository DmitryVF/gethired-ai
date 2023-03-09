import React from 'react';
import Box from '@material-ui/core/Box';
import ProfileCard from './profileCard';
import PageWrapper from '../../components/common/pageWrapper';
//import SupportCard from '../../components/common/supportCard';
import SupportChat from "../../components/common/supportChat";
//import OpportunityHeader from './opportunityHeader';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { ReactComponent as Chip } from '../../assets/icons/chip.svg';

// const express = <Express/>;
// const mastercard = <Mastercard/>;
// const visa = <Visa/>;

const datasource = 
{cards: [
  { number: '4541', type: 'express', name: "Tim Trembley", date: '02/22', name: 'John Smith' },
  { number: '4242', type: 'mastercard', name: "Tim Trembley", date: '11/21', name: 'Tim Trembley' },
  { number: '1337', type: 'visa', name: "Tim Trembley", date: '03/23' , name: 'John Smith'},
  { number: '2455', type: 'visa', name: "Tim Trembley",  date: '04/24', name: 'John Smith' }
]};


const useStyles = makeStyles( {
  profile: {
    fontSize: '32px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
  },
  box: {
    border: "1px solid #C4C4C4",
    borderRadius: "12px",
    // margin: "10px"
  },
  number: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#3E3E3E",
  },
  numberInactive: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#CECECE",
  },
  ico: {
    background: '#FFFFFF',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.08)',
    borderRadius: '4px',
    width: "82px",
    height: "48px",
    alignContent: "center",
    justifyContent: "center",
  },
  img: {  
        filter: "grayscale(1)", /* W3C */  
        display: "block",
      // margin: "0 auto"

    },
  card: {
    width: "360px",
    height: "200px",
    backgroundColor: "#C4C4C4",
    borderRadius: "10px",

  },
  name: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "16px",
    color: "#3E3E3E"
  },
  date: {
    fontFamily: "Roboto",
    fontWeight: "normal",
    fontSize: "14px",
    color: "#3E3E3E"
  }
  
});

const MyRadio = withStyles({
  root: {
    color: '#CECECE',
    '&$checked': {
      color: '#3E3E3E',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);



function Payments() {
  // console.log(datasource.cards);
  const cards = datasource.cards;


  // onEdit();
 const classes = useStyles();
  
  const [selectedValue, setSelectedValue] = React.useState('4242');

  const handleChange = event => {
    setSelectedValue(event.target.value);
  };


   let {number , type, name, date } =  cards[cards.findIndex(({number}) => number === selectedValue)];


  // console.log("cardType= "+ type);

  return (

    <React.Fragment>
    <Box ml={10} mt={3}> 
    
    <Grid  container mt="-100px">
      <Grid item  md={12}>      
        <Typography variant="body2" className={classes.profile}>
            Payment Methods
          </Typography>
      </Grid>  
      <Grid item  md={12} >      
        <Box mt={6} mr={2.5} height="372px" className={classes.box}>
          <Grid  container >
            <Grid item  md={6} sm={12}>
            <Box p={4} mt="10px" >
              <Box mb={-4}>
                {cards.map(({ number, type, name, date }, idx) => (
                  <Box display="flex" key={number} ml={2} >
                    <Box>
                      <MyRadio
                        checked={selectedValue === number}
                        onChange={handleChange}
                        value={number}
                        name="radio-button-demo"
                        inputProps={{ 'aria-label': 'b' }}
                      />
                    </Box>
                    <Box display="flex" ml={1} mb={4} mr={5} className={classes.ico}>
                        <img className={classes.img} src={require( "../../assets/icons/"+type+ ".svg")}/>
                    </Box>
                        <Box className={selectedValue === number?  classes.number : classes.numberInactive}>
                          **** - **** - **** -{number}
                        </Box>
                  </Box>
          ))}
              </Box>
            </Box>

            </Grid>
            <Grid item  md={6} sm={12}>
              <Box m={4} height="372px" display="flex" flexDirection="column" fontSize= "14px">
                  <Box textAlign="right" mb={1.7} mt={2} mr={2}>+ Add a New Card</Box>
                  <Box className={classes.card} ml={3} >
                       <Box pl={3} pr={3} pt={4} display="flex"  flexDirection="row" justifyContent="space-between">
                        <Box mt={0.4}> <Chip/> </Box>
                        <img display="box" height="42px" width="54px"  className={classes.img} src={require( "../../assets/icons/"+type+ ".svg")}/>
                       </Box>
                       <Box  pl={4} pr={3} pt={4} className={classes.number}>
                         ****&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;{number}
                       </Box>
                       <Box pl={3} pr={3} pt={1.5} display="flex" justifyContent="space-between">
                        <Box className={classes.number}> {name} </Box>
                        <Box mr={9}   className={classes.date}> {date} </Box>
                       </Box>
                   </Box>
                  <Box display="flex" justifyContent="space-between" pb={1} ml={3}>
                    <Box textAlign="right"  mb={2} mt={2} mr={2}>Remove this Card</Box>
                    <Box textAlign="right" mb={2} mt={2} mr={2}>Edit Card Details</Box>
                  </Box>  
            </Box>
            </Grid>
          </Grid>
        </Box>

      </Grid>
     </Grid> 
     </Box>

     
    </React.Fragment>
  )
}

export default Payments;
