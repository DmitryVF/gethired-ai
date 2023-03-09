import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import PageTitle from '../../components/common/pageTitle'
import TabPanel from '../../components/common/tabPanel'
import Typography from '@material-ui/core/Typography';
import OpportunitiesTable from './opportunitiesTable'
import { a11yProps } from '../../components/common/helpers'
import SelectField from '../../components/common/form-helpers/selectField';
import { NEW_OPP} from '../../routes';
import { Link} from 'react-router-dom';

const useStyles = makeStyles( {
  tabRoot: {
    textTransform: 'none',
  },
  btn:{
  height: '100%',
  textTransform: 'none' 
  },
  link: {
    color: '#000',
    textDecoration: 'none',
    paddingRight:"0px",
  },
});

const tabs = [
  { value: 'active', label: 'Active', count: 1 },
  { value: 'draft', label: 'Draft', count: 2 },
  { value: 'finished', label: 'Finished', count: 3 },
  { value: 'show All', label: 'Show All', count: 6  }
];



export const mockDataSource = [
  {
    opportunity: 'Front-End Developer',
    signed: 4,
    duration: '25 days (remaining)',
    occupation: 'Web, Mobile & Software Development',
    status: '4',
    type: 'View Applicants'
  }
];

export const mockDraftDataSource = [
  {
    opportunity: 'Back-End Developer',
    signed: 'n/a',
    duration: '30 days (NOT ACTIVE)',
    occupation: 'Web, Mobile & Software Development',
    status: '',
    type: 'Complete Now'
  },
  {
    opportunity: 'Junior Designer',
    signed: 'n/a',
    duration: '14 days (NOT ACTIVE)',
    occupation: 'Web, Mobile & Software Development',
    status: '',
    type: 'Complete Now'
  }
];

export const mockFinishedDataSource = [
  {
    opportunity: 'Project Manager',
    signed: 27,
    duration: 'Finished (29 Aug, 2019)',
    occupation: 'Web, Mobile & Software Development',
    status: 5,
    type: 'Accepted'
  },
  {
    opportunity: 'Full-Stack Developer',
    signed: 14,
    duration: 'Finished (06 Jul, 2019)',
    occupation: 'Web, Mobile & Software Development',
    status: 3,
    type: 'Accepted'
  },
  {
    opportunity: 'HR Intern',
    signed: 12,
    duration: 'Finished (17 May, 2019)',
    occupation: 'Web, Mobile & Software Development',
    status: 4,
    type: 'Accepted'
  },
];

function Opportunities() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleTabChange = (event, value) => {
    setValue(value)
  };

  const handleChangeIndex = index => {
    setValue(index)
  };

  const activeTableProps = {
    dataSource: mockDataSource
  };
  const draftTableProps = {
    dataSource: mockDraftDataSource
  };
  const finishedTableProps = {
    dataSource: mockFinishedDataSource
  };
  console.log("length" +activeTableProps.dataSource.length);

  return (
    <Box p={3}>
      <Box>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6} container alignItems="center">
            <PageTitle title="Overview of Opportunities" />
          </Grid>
          <Grid item xs={12} sm={6}  container justify="flex-end">
            <Box width={251} height={52} mt={4.5}>
              <Link to={NEW_OPP} className={classes.link}>
                  <Button size="medium" className = {classes.btn}>
                    + Create new Opportunity
                  </Button>
              </Link>    
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
          <OpportunitiesTable {...activeTableProps} />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <OpportunitiesTable {...draftTableProps} />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <OpportunitiesTable {...finishedTableProps} />
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={6} container alignItems="center">
              <Box pt={1} mb={2.5}>
                <Typography variant="h5" component="h5"> Active({activeTableProps.dataSource.length})</Typography>
              </Box>  
            </Grid>
          </Grid>
          <OpportunitiesTable {...activeTableProps} />
            <Grid container justify="space-between">
              <Grid item xs={12} sm={6} container alignItems="center">
                <Box mt={7.5} mb={2.5}>
                 <Typography variant="h5" component="h5"> Draft({draftTableProps.dataSource.length})</Typography>
                </Box> 
              </Grid>
            </Grid>
          <OpportunitiesTable {...draftTableProps} />
            <Grid container justify="space-between">
              <Grid item xs={12} sm={6} container alignItems="center">
                <Box mt={7.5} mb={2.5}>
                <Typography variant="h5" component="h5"> Finished({finishedTableProps.dataSource.length})</Typography>
                </Box>
              </Grid>
            </Grid>
          <OpportunitiesTable {...finishedTableProps} />
        </TabPanel>
      </SwipeableViews>

    </Box>
  )
}

export default Opportunities
