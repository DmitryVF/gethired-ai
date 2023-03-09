import React from 'react';
// import PropTypes from 'prop-types';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import * as authActions from '../../../actions/authActions'
import formSchemas from '../../../config/formSchemas';
import { SIGN_UP_STEP_1, FORGOT_PASSWORD } from '../../../routes';
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';
import SingleCheckboxField from '../../../components/common/form-helpers/singleCheckboxField';

const useStyles = makeStyles({
  link: {
    color: '#000',
    textDecoration: 'none'
  }
});

const defaultValues = {
  email: '',
  password: '',
  rememberMe: false
};

function LoginForm({ loginSuccess /* , loginRequest */ }) {
  const classes = useStyles();
  const {
    handleSubmit, errors, register, // watch,
  } = useForm({
    defaultValues,
    validationSchema: formSchemas.login
  });

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: '/' } };

  const onLogin = data => {
    console.log('onLogin', data);
    // TODO: remove from this file the loginSuccess func, when auth flow will be included,
    //  this func here temporarily for simulating an auth
    loginSuccess();
    // loginRequest(data)
    history.replace(from);
  };

  return (
    <form>
      <InputField
        name="email"
        label="YOUR E-MAIL"
        required
        register={register}
        error={getIsError(errors, 'email')}
        helperText={getHelperText(errors, 'email')}
      />
      <InputField
        type="password"
        name="password"
        label="YOUR PASSWORD"
        required
        register={register}
        error={getIsError(errors, 'password')}
        helperText={getHelperText(errors, 'password')}
      />
      <Box mt="20px">
        <Grid container justify="space-between" alignItems="center">
          <Grid>
            <SingleCheckboxField register={register} name="rememberMe" label="Remember me."/>
          </Grid>
          <Grid>
            <Link to={FORGOT_PASSWORD} className={classes.link}>
              <Typography variant="subtitle2">Forgot Password?</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <Box mt={4}><Button onClick={handleSubmit(onLogin)}>Login</Button></Box>
      <Box mt={3}>
        <Link to={SIGN_UP_STEP_1} className={classes.link}>
          <Button variant="text">Sign Up</Button>
        </Link>
      </Box>
    </form>
  )
}

const { loginRequest, loginSuccess } = authActions;

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginRequest,
  // TODO: remove from this file the loginSuccess func, when auth flow will be included,
  //  this func here temporarily for simulating an auth
  loginSuccess
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
