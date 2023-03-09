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
// import { ReactComponent as DefaultAvatarSvg } from '../../assets/icons/default-img.svg'
import { ReactComponent as AvatarSvg } from '../../assets/icons/ellipsegrey.svg'
import { Link, useLocation, useHistory } from 'react-router-dom';
import { APP_ACCEPTED_VIEW } from '../../routes';

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
  avatar: {
    width: 52,
    height: 52,
    backgroundColor: theme.palette.common.white,
    // border: '2px solid #C4C4C4'
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
    textDecoration: 'none',

  },
  normal: {
    fontFamily: "Roboto",
    fontWeight: "normal"
  },
  name: {
    color: "#333333",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "normal"
  }
  

}));

function PendingTable({ dataSource }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow className={classes.row}>
            <StyledTableCell className = {classes.tableheadleft}>FULL NAME</StyledTableCell>
            <StyledTableCell>OPPORTUNITY APPLYING FOR</StyledTableCell>
            <StyledTableCell>MATCH %</StyledTableCell>
            <StyledTableCell>SKILLS</StyledTableCell>
            <StyledTableCell className = {classes.tableheadright}>STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map(({ name, opportunity, match, skills, status }, idx) => (
            <TableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                <Grid container spacing={1} alignItems="center">
                  <Grid item>
                    <Avatar className={classes.avatar}><AvatarSvg /></Avatar>
                  </Grid>
                  <Grid item>
                    <Box className={classes.name}  pl={1 / 2}>{name}</Box>
                  </Grid>
                </Grid>
              </StyledTableCell>
              <StyledTableCell>{opportunity}</StyledTableCell>
              <StyledTableCell className={classes.normal}>{match}%</StyledTableCell>
              <StyledTableCell>
                <Box>
                  {
                    skills.map((skill, i) => (
                      <React.Fragment key={skill}>
                        <Chip className={classes.chip} color="primary" label={skill} />
                        {(i + 1) % 3 === 0 ? <br /> : null}
                      </React.Fragment>
                    ))
                  }
                </Box>
              </StyledTableCell>
              <StyledTableCell>
              
                <Box     minWidth='227px' mt="12px">
                <Link to={APP_ACCEPTED_VIEW} className={classes.link}>
                  <Button size="medium">
                    View Application
                  </Button>
                </Link>  
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

PendingTable.propTypes = {
  dataSource: array
};

export default PendingTable
