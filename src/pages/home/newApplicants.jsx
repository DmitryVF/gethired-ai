import React, { Fragment } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Button from '@material-ui/core/Button'
import CardHeader from './cardHeader'
import { ReactComponent as TeamSvg } from '../../assets/icons/team.svg'
import { ReactComponent as GrowArrow } from '../../assets/icons/topRightArrow.svg'
import { mockDataSource } from '../applicants/index'
import { applicantsInfo, gilroyBoldText } from './classes'
import { Link} from 'react-router-dom';
import { APPLICANTS_ALL } from '../../routes';

const useStyles = makeStyles(() => ({
  applicantsInfo,
  gilroyBoldText,
  tableHeaderRow: {
    background: '#B8B8B8',
  },
   link: {
    color: "black",
   textDecoration: 'none',
  }
}))

const StyledTableCell = withStyles({
  head: {
    padding: '10px 16px',
    fontSize: '12px',
    borderBottom: 'none'
  },
  body: {
    borderBottom: '1px solid #B8B8B8'
  },
})(TableCell)

function NewApplicants() {
  const classes = useStyles()
  const description = (
    <React.Fragment>
      <Box display="flex" alignItems="center">
        <GrowArrow />
        <Typography className={classes.gilroyBoldText}>&nbsp;11% growth</Typography>
      </Box>
      <Typography className={classes.gilroyBoldText}>of last 30 days</Typography>
    </React.Fragment>
  )

  return (
    <Fragment>
      <CardHeader
        title="New Applicants"
        number="12"
        description={description}
        icon={TeamSvg}
      />
      <Box ml="-15px" mr="-7px" mb="27px">
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow className={classes.tableHeaderRow}>
                <StyledTableCell>OPPORTUNITY NAME</StyledTableCell>
                <StyledTableCell>MATCH %</StyledTableCell>
                <StyledTableCell>EXPERIENCE</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockDataSource.map(({ opportunity, match }, idx) => (
              <TableRow key={idx}>
                <StyledTableCell>{opportunity}</StyledTableCell>
                <StyledTableCell>{match}%</StyledTableCell>
                <StyledTableCell>5 years</StyledTableCell>
              </TableRow>
            ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Link to={APPLICANTS_ALL} className={classes.link}>
        <Button variant="text" className={classes.applicantsInfo}>Show All Applicants</Button>
      </Link>
    </Fragment>
  )
}

export default NewApplicants
