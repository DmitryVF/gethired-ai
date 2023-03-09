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
import { ReactComponent as Ellipse } from '../../assets/icons/ellipse.svg'

import { Link, useLocation, useHistory } from 'react-router-dom';
import { HOME } from '../../routes';
import { DotPopper } from '../../components/common/dotpopper';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 1330,

  },
  tableheadleft: {
    borderRadius: "8px 0 0 8px",
    borderBottom:"none",
    width:'260px'
  },
  tableheadright: {
    borderRadius: "0 8px 8px 0",
    borderBottom:"none",
    width: "110px",

  },
  role: {
    width: "150px"
  },
  roleDescription:{
    width: '250px'
  },
  roleDescriptionSuccess:{
    width: '447px'
  },
  eMail:{
    width: '200px'
  },
  joined:{
    width: '160px'
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
  }
}));



const StatusBlock = (role, eMail="",joined="")=>{
  const classes = useStyles();

  const [close, setClose] = React.useState(false);
  const onOpen = ()=>{
    setClose(false);
  }
  const handleClick = event => {
    setClose(true);
  };

  if(role != 'SUCCESSS MANAGER'){
    return(
      <React.Fragment>
        <StyledTableCell className = {classes.eMail}>{eMail}</StyledTableCell>
        <StyledTableCell className = {classes.joined}>{joined}</StyledTableCell>
        <StyledTableCell className = {classes.dots}>
          <Box ml={3}>
            <DotPopper close={close} onOpen={onOpen}> 
                    <Box className={classes.dotlink} onClick={handleClick} >Edit User</Box>
                    <Box className={classes.dotlink} onClick={handleClick} >Delete User</Box>
            </DotPopper>

          </Box>
        </StyledTableCell> 
      </React.Fragment>
    )
  }else {
    return(
      <React.Fragment>
        <Box mt="8px" mr="40px" width={189} height={40}>
          <Link to={HOME} className={classes.link}>
            <Button size="medium" className = {classes.btn}>
              + Schedule a Meeting
            </Button>
          </Link>
        </Box>
        <Box mt="8px" mb="5px" mr="40px" width={189} height={40}>
          <Link to={HOME} className={classes.link}>
            <Button size="medium" className = {classes.btn}>
              Contact
            </Button>
          </Link>
        </Box>
      </React.Fragment>
    )
  }
}

const HeaderExtended = (role)=>{
   if(role != 'SUCCESSS MANAGER'){
      return(
        <React.Fragment>
          <StyledTableCell>E-MAIL ADDRESS</StyledTableCell>
          <StyledTableCell>JOINED</StyledTableCell>
        </React.Fragment>
      )
    }
}

function TeamTable({ dataSource , role}) {
  const classes = useStyles();

  return (

    <TableContainer>

      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow  className={classes.row}>
            <StyledTableCell className = {classes.tableheadleft}>  FULL NAME</StyledTableCell>
            <StyledTableCell className = {classes.role}>ROLE</StyledTableCell>
            <StyledTableCell className = {role == 'SUCCESSS MANAGER' ? classes.roleDescriptionSuccess : classes.roleDescription}>ROLE DESCRIPTIOON</StyledTableCell>
              {HeaderExtended(role)}
            <StyledTableCell className = {classes.tableheadright}>OPTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map(({fullName, role, description, eMail, joined, type}, idx) => (
            <TableRow key={idx}>
              <StyledTableCell><Box display="flex"><Box ><Ellipse/></Box><Box ml={1.5} mt={2.3} >{fullName}</Box></Box></StyledTableCell>
              <StyledTableCell>{role}</StyledTableCell>
              <StyledTableCell>{description}</StyledTableCell>
                {StatusBlock(role, eMail, joined )}              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const { array } = PropTypes;

TeamTable.propTypes = {
  dataSource: array
};

export default TeamTable
