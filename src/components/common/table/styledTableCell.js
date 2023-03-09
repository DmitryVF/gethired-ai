import { withStyles } from '@material-ui/core'
import TableCell from '@material-ui/core/TableCell'

const StyledTableCell = withStyles({
  head: {
    backgroundColor: '#C4C4C4',
    padding: '10px 16px',
    fontSize: '12px'
  },
  body: {},
})(TableCell);

export default StyledTableCell
