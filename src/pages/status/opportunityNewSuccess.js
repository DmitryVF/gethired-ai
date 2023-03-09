import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header';
import StatusWrapper from './statusWrapper';
import OpportunityNewSuccessContent from './opportunityNewSuccessContent.js';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {OPPORTUNITIES } from '../../routes';
const useStyles = makeStyles( theme => ({
link: {
    color: '#000',
    textDecoration: 'none',
    marginBottom: "99px",

  },
 btn:{ 
  marginBottom: "99px",
}
}));

function OpportunintyNewSuccess() {

  const classes = useStyles();

  const headerProps = {
    rightLink: {
      link: '/',
      label: 'Exit'
    }
  };

  return (
    <div>
      <Header {...headerProps} />
      <StatusWrapper >
        <OpportunityNewSuccessContent />
        <Link to={OPPORTUNITIES}  className={classes.link}>
          <Button className={classes.btn}>Continue</Button>
        </Link>
      </StatusWrapper>
    </div>
  )
}

export default OpportunintyNewSuccess