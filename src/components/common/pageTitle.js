import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    fontSize: 24,
    lineHeight: '30px'
  }
});

function PageTitle({ title, badge }) {
  const classes = useStyles();

  return (
    <Typography variant="h5" className={classes.root}>
      {badge}
      {title}
    </Typography>
  )
}

PageTitle.defaultProps = {
  title: ''
};

PageTitle.propTypes = {
  title: PropTypes.string
};

export default PageTitle;
