import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import MainWrapper from '../mainWrapper';
import LoginForm from './loginForm';
import RectangleSvg from '../../../assets/Rectangle.svg';

function Login() {
  return (
    <MainWrapper mainImgSrc={RectangleSvg}>
      <Box mt={9}>
        <Typography variant="h3">
          Login
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">
          Welcome to recruitment SaaS platform that puts the candidates in the technological sector at the centre
          of the process and removes the need for a recruitment agent.
        </Typography>
      </Box>
      <Box mt={8}>
        <LoginForm />
      </Box>
    </MainWrapper>
  )
}

export default Login;
