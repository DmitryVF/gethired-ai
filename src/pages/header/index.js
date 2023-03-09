import React, { useMemo, useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { LOGIN, PROFILE, privateRoutes } from '../../routes';
import Logo from '../../components/common/logo';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import { ReactComponent as AlarmSvg } from '../../assets/icons/alarm.svg';
import { a11yProps } from '../../components/common/helpers'

const useStyles = makeStyles( {
  root: {
    boxShadow: 'none',
    borderBottom: '1px solid #C4C4C4',
  },
  gridContainer: {
    flexWrap: 'nowrap',
    overflowX: 'auto'
  },
  link: {
    color: '#000',
    textDecoration: 'none'
  },
  tabRoot: {
    padding: '20px 16px',
    textTransform: 'none',
    minWidth: 'auto'
  },
  tab: {
    display: 'none'
  },
  avatarRoot: {
    borderBottom: '2px solid #000',
  },
  avatar: {
    width: '36px',
    height: '36px'
  }
});

function MainHeader() {
  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleTabChange = (event, path) => {
    history.push(path);
  };

  const handleAvatarMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleAvatarMenuClose = () => {
    setAnchorEl(null);
  };

  const onAvatarMenuNavigate = (path) => () => {
    history.push(path);
    handleAvatarMenuClose();
  };

  const parentPrivateRoutes = useMemo(() => (
    privateRoutes.filter(({ parentPath }) => parentPath === null)
  ), []);

  // const tabsValue = parentPrivateRoutes.find(({ path }) => path === location.pathname);
  const route = privateRoutes.find((route) => route.path === location.pathname);
  
  let tabsValue= '';
  if (route){
    tabsValue= route.parentPath? route.parentPath :route.path ;
  }

  return (
    <AppBar position="sticky" color="inherit" className={classes.root}>
      <Grid container alignItems="center" className={classes.gridContainer}>
        <Grid item xs>
          <Box px={3}><Logo variant="h6" /></Box>
        </Grid>
        <Grid item>
          <Tabs
            //value={tabsValue ? tabsValue.path : false}
            value={tabsValue }
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {
              parentPrivateRoutes.map(({ visible, path, name }, idx) => (
                <Tab
                  className={`${classes.tabRoot} ${!visible ? classes.tab : ''}`}
                  key={path}
                  value={path}
                  label={name}
                  {...a11yProps(idx)}
                />
              ))
            }
          </Tabs>
        </Grid>
        <Grid item xs>
          <Box p="0 12px 0 24px" display="flex" justifyContent="flex-end" alignItems="center">
            <Box mr={3}>
              <IconButton aria-controls="notifications-menu" aria-label="show-notifications-menu">
                <Badge color="primary" variant="dot" invisible={false}><AlarmSvg /></Badge>
              </IconButton>
            </Box>
            <Typography variant="subtitle2">Tim T.</Typography>
            <div className={location.pathname === PROFILE ? classes.avatarRoot : ''}>
              <IconButton
                aria-controls="avatar-menu"
                aria-label="show-avatar-menu"
                onClick={handleAvatarMenuClick}
              >
                <Avatar className={classes.avatar}/>
              </IconButton>
            </div>
            <Menu
              id="avatar-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleAvatarMenuClose}
            >
              <MenuItem onClick={onAvatarMenuNavigate(PROFILE)}>Profile</MenuItem>
              <MenuItem onClick={onAvatarMenuNavigate(LOGIN)}>Logout</MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  )
}

// const { bool } = PropTypes;

// MainHeader.defaultProps = {};

// MainHeader.propTypes = {};

export default MainHeader;
