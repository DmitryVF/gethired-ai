import React from 'react';
import { useHistory } from 'react-router-dom'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MainWrapper from '../mainWrapper';
import { ReactComponent as LoginSvg } from '../../../assets/login.svg';
import RectangleSvg from '../../../assets/Rectangle.svg';

function PasswordChanged() {
  let history = useHistory();

  const onContinue = () => {
    history.push('/');
  };

  return (
    <MainWrapper mainImgSrc={RectangleSvg}>
      <Box py={15}>
        <LoginSvg />
      </Box>
      <Box>
        <Typography variant="h4">
          Password successfully changed.
        </Typography>
      </Box>
      <Box mt={22}>
        <Button onClick={onContinue}>Continue</Button>
      </Box>
    </MainWrapper>
  )
}

export default PasswordChanged;
