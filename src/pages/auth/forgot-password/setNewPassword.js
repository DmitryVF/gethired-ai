import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MainWrapper from '../mainWrapper';
import SetNewPasswordForm from './setNewPasswordForm';
import { ReactComponent as OpenLockSvg } from '../../../assets/open-lock.svg';
import RectangleSvg from '../../../assets/Rectangle.svg';

function SetNewPassword() {
  return (
    <MainWrapper mainImgSrc={RectangleSvg}>
      <Box py={7}>
        <OpenLockSvg />
      </Box>
      <Box>
        <Typography variant="h3">
          Set New Password
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">
          Please type in down below your new password and confirm it to remember it.
        </Typography>
      </Box>
      <Box mt={8}>
        <SetNewPasswordForm />
      </Box>
    </MainWrapper>
  )
}

export default SetNewPassword;
