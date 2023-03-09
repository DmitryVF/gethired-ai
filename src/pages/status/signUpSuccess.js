import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../../components/common/header';
import StatusWrapper from './statusWrapper';
import SuccessContent from "./successContent";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

function SignUpSuccess() {
  return (
    <div>
      <Header />
      <StatusWrapper>
        <SuccessContent />
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <Button>Continue</Button>
        </Link>
      </StatusWrapper>
    </div>
  )
}

export default SignUpSuccess
