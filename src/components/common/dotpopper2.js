import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { ReactComponent as DotsSvg } from '../../assets/icons/dots.svg';
import Box from '@material-ui/core/Box'
const useStyles = makeStyles(theme => ({
  paper: {
  	marginTop: "-30px",
    // border: '1px solid',
    // padding: theme.spacing(1),
    // backgroundColor: theme.palette.background.paper,
  },
  dots: {
    cursor: "pointer",
    // marginLeft: "2px"
  },
  
}));

export function DotPopper({children, close = false, onOpen=()=>{} }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    onOpen();
    setAnchorEl(anchorEl && !close ? null : event.currentTarget);
  };

  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popper' : undefined;
  const open = close? false: Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
  	<React.Fragment>
    <Box display="flex"  onClick={handleClick}>
      <DotsSvg className={classes.dots} aria-describedby={id} type="button" />
    </Box>    
      
      <Popper id={id} open={open} placement="left" anchorEl={anchorEl}>
        <div className={classes.paper}>
        	<svg width="130" height="112" viewBox="0 0 130 112" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="118" height="112" rx="12" fill="black"/>
				<path d="M117.971 41.6274V30.3137V19L127.87 28.8995C128.651 29.6806 128.651 30.9469 127.87 31.7279L117.971 41.6274Z" fill="black"/>
			</svg>
			<React.Fragment>
				{children}
			</React.Fragment>
        </div>
      </Popper>
    </React.Fragment>
  );
}

