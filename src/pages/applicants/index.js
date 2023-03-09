import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid';
import PageTitle from '../../components/common/pageTitle'
import TabPanel from '../../components/common/tabPanel'
import PendingTable from './pendingTable'
import AcceptedTable from './acceptedTable'
import RejectedTable from './rejectedTable'
import { a11yProps } from '../../components/common/helpers'
import SelectField from '../../components/common/form-helpers/selectField';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import {APPLICANTS_ALL, APPLICANTS, APPLICANTS_ACCEPTED, APPLICANTS_REJECTED} from '../../routes';
// import { ReactComponent as Uparrow } from '../../assets/icons/uparrow.svg'
import Uparrow from '@material-ui/icons/ExpandLess';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles( {
  tabRoot: {
    textTransform: 'none',
  },
  select:{
    color: "blue",
    bacgroundColor: "red"
  },
  ul: {
    '& > li:first-child': {
      width: "30px",
      height: "30px",
    background: 'black',
    borderRadius: '6px',
    border: "1px solid black",

    },
    '& > li:first-child> button': {
      color: "white"
    },

    '& > li:last-child': {
      width: "30px",
      height: "30px",
    background: 'black',
    borderRadius: '6px',
    border: "1px solid black",
    // paddingLeft: "10px"
    },

    '& > li:last-child> button': {
      color: "white"
    },
  },
  // ul:{
  //   // backgroundColor: "red"
  //   '& > li': {
  //       backgroundColor: "red"
  //   }
  // }
});

const tabs = [
  { value: 'pending', label: 'Pending', count: 4, path: APPLICANTS },
  { value: 'accepted', label: 'Accepted',count: 4, path: APPLICANTS_ACCEPTED  },
  { value: 'rejected', label: 'Rejected',count: 4, path: APPLICANTS_REJECTED  },
  { value: 'all', label: 'Show All',count: 12, path: APPLICANTS_ALL  }
];



function createData(name, match, status='') {
  return {
    name,
    avatar: '',
    opportunity: 'Front-End Developer',
    match,
    skills: [
      'HTML (+5 years)',
      'CSS (+5 years)',
      'Python (+2 years)',
      'Javascript: Angular (+3 years)',
      'PHP (+3 years)',
      'Javascript: Node.js (+3 years)',
      'Javascript: React (+3 years)',
      'Ruby (+2 years)'
    ],
    status
  };
}

export const mockDataSource = [
  createData('******* ********',95, '7 days'),
  createData('******* ********',75, '7 days'),
  createData('******* ********',50, '7 days'),
  createData('******* ********',25, '7 days')
];
export const mockDataSource2 = [
  createData('Andy Bernard',95),
  createData('Kevin Malone',75),
  createData('Michael Scott',50),
  createData('Gabe Lewis',25)
];
export const mockDataSource3 = [
  createData('******* ********',95, 'Wed 19 Feb, 2020'),
  createData('******* ********',75, 'Wed 19 Feb, 2020'),
  createData('******* ********',50, 'Wed 19 Feb, 2020'),
  createData('******* ********',25, 'Wed 19 Feb, 2020')
];



function Applicants() {
  const classes = useStyles();
  const theme = useTheme();

  const location = useLocation();
  const activeTab = tabs.findIndex(({path}) => path === location.pathname) ||0; 
  // console.log('location=', location.pathname);
  // console.log('path=', APPLICANTS_ALL);
  // console.log('activeTab=', activeTab);

  const [value, setValue] = useState(activeTab);

  const handleTabChange = (event, value) => {
    setValue(value)
  };

  const handleChangeIndex = index => {
    setValue(index)
  };

  const pendingTableProps = {
    dataSource: mockDataSource
  };
  const acceptedTableProps = {
    dataSource: mockDataSource2
  };
  const rejectedTableProps = {
    dataSource: mockDataSource3
  };

  return (
    <Box p={3}>
      <Box>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6} container alignItems="center">
            <PageTitle title="Overview of Applicants" />
          </Grid>
          <Grid item xs={12} sm={6} container justify="flex-end">
            <Box width={250}>
              <SelectField
                name="opportunity"
                className={classes.select}
                // control={control}
                 classes={{ select: classes.root }}
                label="SORT BY"
                defaultValue="default"
                options={[{ value: 'default', label: 'Newest'},
                          { value: '1', label: 'Best Matched'  }]}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box borderBottom="1px solid #C4C4C4">
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {
            tabs.map(({ value, label, count }, idx) => (
              <Tab
                key={value}
                className={classes.tabRoot}
                // value={value}
                label={`${label}${count ? ` (${count})` : ''}`}
                {...a11yProps(idx)}
              />
            ))
          }
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <PendingTable {...pendingTableProps} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <AcceptedTable {...acceptedTableProps} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <RejectedTable {...rejectedTableProps} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          
          <Box display="flex" justifyContent="space-between">
              <Box pt={1} mt={4} mb={2.5}>
                <Typography variant="h5" component="h5"> Pending({pendingTableProps.dataSource.length})</Typography>
              </Box>  
            <Box  pr={2} pt={1} mt={4} mb={2.5}>
                <Uparrow fontSize="large" />
              </Box>
          </Box>
          
          <PendingTable {...pendingTableProps} />

          <Box display="flex" justifyContent="space-between">
              <Box pt={1} mt={4} mb={2.5}>
                <Typography variant="h5" component="h5"> Accepted({acceptedTableProps.dataSource.length})</Typography>
              </Box>  
            <Box  pr={2} pt={1} mt={4} mb={2.5}>
                <Uparrow fontSize="large" />
              </Box>
          </Box>

          <AcceptedTable {...acceptedTableProps} />

          <Box display="flex" justifyContent="space-between">
              <Box pt={1} mt={4} mb={2.5}>
                <Typography variant="h5" component="h5"> Rejected({rejectedTableProps.dataSource.length})</Typography>
              </Box>
              <Box  pr={2} pt={1} mt={4} mb={2.5}>
                <Uparrow fontSize="large" />
              </Box>
          </Box>

          <RejectedTable {...rejectedTableProps} />

          <Box mt={5} mb={5} display="flex" justifyContent="center" >
            <Box>
              <Pagination classes={{ root: classes.ul }} color="standard" boundaryCount={1} siblingCount={1}  count={12} shape="rounded" />
            </Box>
          </Box>

        </TabPanel>
      </SwipeableViews>
    </Box>
  )
}

export default Applicants
