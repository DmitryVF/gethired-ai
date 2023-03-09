import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../../components/common/header';
import StatusWrapper from './statusWrapper';
import SuccessContent from './successContent';
import Button from "@material-ui/core/Button";
import { ASK_DAVID } from '../../routes';

function ProfileSuccess() {
  return (
    <div>
      <Header />
      <StatusWrapper>
        <SuccessContent />
        <Link to={ASK_DAVID} style={{ textDecorationLine: 'none' }}>
          <Button>Continue</Button>
        </Link>
      </StatusWrapper>
    </div>
  )
}

export default ProfileSuccess
