import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MainWrapper from '../mainWrapper';
import ForgotPasswordForm from './forgotPasswordForm';
import { ReactComponent as PasswordSvg } from '../../../assets/password.svg';
import RectangleSvg from '../../../assets/Rectangle.svg';

function ForgotPassword() {
  return (
    <MainWrapper mainImgSrc={RectangleSvg}>
      <Box py={7}>
        <PasswordSvg />
      </Box>
      <Box>
        <Typography variant="h3">
          Forgot Password
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">
          In order to reset your password. Please type in your E-Mail Address down below so we can send you a link
          to reset your password.
        </Typography>
      </Box>
      <Box mt={19}>
        <ForgotPasswordForm />
      </Box>
    </MainWrapper>
  )
}

export default ForgotPassword;
