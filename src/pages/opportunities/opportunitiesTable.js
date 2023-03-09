import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import Button from '@material-ui/core/Button'
import StyledTableCell from '../../components/common/table/styledTableCell'
import { ReactComponent as DotsSvg } from '../../assets/icons/dots.svg'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { APPLICANTS, HOME, OPPORTUNITY_VIEW } from '../../routes';
import { DotPopper } from '../../components/common/dotpopper2';


const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1330,

  },
  tableheadleft: {
    borderRadius: "8px 0 0 8px",
    borderBottom:"none"
  },
  tableheadright: {
    borderRadius: "0 8px 8px 0",
    borderBottom:"none"
  },
  row: {
    borderBottom: "none"
  },
  btn:{
  height: '100%'
  },
  chip: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontSize: 12,
    height: 28,
    borderRadius: theme.spacing(1)
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  },
  dotlink: {
    color: "white",
    fontFamily: 'Roboto',
    fontStyle: 'Regular',
    fontSize: '14px',
    marginTop: '-40px',
    marginLeft: '20px',
    height: '8px',
    cursor: 'pointer'
  },
  normal: {
    fontFamily: "Roboto",
    fontWeight: "normal"
  },
}));


const StatusBlock = (type, status)=>{
  const classes = useStyles();

  if(type == 'Complete Now'){
    return(
      <React.Fragment>
        <Typography variant="caption">
                  You need to complete Opportunity!
        </Typography>
        <Box mt="8px" width={189} height={40}>
          <Link to={HOME} className={classes.link}>
            <Button size="medium" className = {classes.btn}>
              {type}
            </Button>
          </Link>
        </Box>
      </React.Fragment>
    )
  }else if(type == 'View Applicants'){
    return(
      <React.Fragment>
        <Box >
          <Typography className={classes.normal} variant="caption">
            You have <strong>{status}</strong> Applicants to respond.
          </Typography>
        </Box>
        <Box mt="8px" width={189} height={40}>
          <Link to={APPLICANTS} className={classes.link}>
            <Button size="medium" className = {classes.btn}>
              View Applicants
            </Button>
          </Link>
        </Box>
      </React.Fragment>
    )
  }else{
    return(
      <Box mt="8px" width={200} height={40}>
      <Typography variant="caption">
        Accepted: {status}
      </Typography>
      </Box>
    )  
  }
}

function OpportunitiesTable({ dataSource }) {
  const classes = useStyles();

  const [close, setClose] = React.useState(false);
  const onOpen = ()=>{
    setClose(false);
  }
  const handleClick = event => {
    setClose(true);
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.row}>
            <StyledTableCell className = {classes.tableheadleft}>OPPOORTUNITY NAME</StyledTableCell>
            <StyledTableCell>APPLICANTS SIGNED</StyledTableCell>
            <StyledTableCell>OPPORTUNITY DURATION</StyledTableCell>
            <StyledTableCell>FIELD OF OCCUPATION</StyledTableCell>
            <StyledTableCell>APPLICANTS STATUS</StyledTableCell>
            <StyledTableCell className = {classes.tableheadright}>OPTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>


    
          {dataSource.map(({ opportunity, signed, duration, occupation,  status, type}, idx) => (
            <TableRow key={idx}>
              
              <StyledTableCell>
              <Link to={OPPORTUNITY_VIEW} className={classes.link}>
                {opportunity}
              </Link>
              </StyledTableCell>
              <StyledTableCell>{signed}</StyledTableCell>
              <StyledTableCell className={classes.normal}>{duration}</StyledTableCell>
              <StyledTableCell className={classes.normal}>{occupation}</StyledTableCell>
              <StyledTableCell>
                {StatusBlock(type,  status)}              
              </StyledTableCell>
              <StyledTableCell>
               <Box ml={3}>
                <DotPopper close={close} onOpen={onOpen} disply="block"> 
                    <Box className={classes.dotlink} onClick={handleClick} >Re Activate</Box>
                    <Box className={classes.dotlink} onClick={handleClick} >Option 1</Box>
                    <Box className={classes.dotlink} onClick={handleClick} >Option 2</Box>
                </DotPopper>
                </Box>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const { array } = PropTypes;

OpportunitiesTable.propTypes = {
  dataSource: array
};

export default OpportunitiesTable
