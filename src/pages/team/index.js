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
import TeamsTable from './teamTable'
import { a11yProps } from '../../components/common/helpers'
import SelectField from '../../components/common/form-helpers/selectField';
import {HOME} from '../../routes';
import { Link} from 'react-router-dom';
import AddMember from './addMember';

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
  { value: 'admin', label: 'Admin', count: 2 },
  { value: 'member', label: 'Member', count: 4 },
  { value: 'GetHired', label: 'GetHired - Success Manager', count: 0 }
];



export const mockAdminSource = [
  {
    fullName: 'Tim Trembley',
    role: 'ADMIN',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when...',
    eMail: 'jim@pixeslandgraphs.com',
    joined: '8th Sept, 2019',
    type: 'Admin'
  },
  {
    fullName: 'Michael Scott',
    role: 'ADMIN',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when...',
    eMail: 'Michael@pixesandgraphs.com',
    joined: '5th Sept, 2019'
  },
];

export const mockMemberDataSource = [
{
    fullName: 'Tim Trembley',
    role: 'MEMBER',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when...',
    eMail: 'jim@pixeslandgraphs.com',
    joined: '8th Sept, 2019',
    type: 'Admin'
  },
  {
    fullName: 'Michael Scott',
    role: 'MEMBER',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when...',
    eMail: 'Michael@pixesandgraphs.com',
    joined: '5th Sept, 2019',
    type: 'Admin'
  },
];

export const mockGetHiredDataSource = [
  {
    fullName: 'Andy Bernard',
    role: 'SUCCESSS MANAGER',
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content.',
    type: 'Options' 
  },
];

function Team() {
  const classes = useStyles();
  const theme = useTheme();

  const [value, setValue] = useState(0);

  const handleTabChange = (event, value) => {
    setValue(value)
  };

  const handleChangeIndex = index => {
    setValue(index)
  };

  const adminTableProps = {
    dataSource: mockAdminSource
  };
  const memberTableProps = {
    dataSource: mockMemberDataSource
  };
  const getHiredTableProps = {
    dataSource: mockGetHiredDataSource
  };
  //console.log("length" +activeTableProps.dataSource.length);

  return (
    <Box p={3}>
      <Box>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={6} container alignItems="center">
            <PageTitle title="Overview of a Team" />
          </Grid>
          <Grid item xs={12} sm={6}  container justify="flex-end">
            <Box width={251} height={52} mt={4.5}>
              <AddMember/>
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
          <TeamsTable {...adminTableProps} role="ADMIN" />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TeamsTable {...memberTableProps} role="MEMBER" />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <TeamsTable {...getHiredTableProps} role="SUCCESSS MANAGER" />
        </TabPanel>
        
      </SwipeableViews>

    </Box>
  )
}

export default Team
