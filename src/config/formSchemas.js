import * as yup from 'yup'

const required = yup.string().required('Required.');
const email = required.email('Invalid email address');
const digits = yup.string()
  .required('Required.')
  .matches(/^[0-9]*$/, 'Must contain digits.');

const password = yup.string()
  .required('Required.')
  .matches(/(?=.*\d)/, 'Password must contain at least one number.')
  .matches(/(?=.*[a-z])/, 'Password must contain at least one lowercase letter.')
  .matches(/(?=.*[A-Z])/, 'Password must contain at least one uppercase letter.')
  .min(8, 'Password is too short - should be 8 chars minimum.');
const confirmPassword = yup.string().oneOf([yup.ref('password'), null], 'Passwords must match.')

const formSchemas = {
  login: yup.object().shape({
    email,
    password
  }),
  forgotPassword: yup.object().shape({
    email
  }),
  setNewPassword: yup.object().shape({
    password,
    confirmPassword
  }),
  yourInfoStep: yup.object().shape({
    fullName: required,
    email,
    password,
    confirmPassword
  }),
  oppoInfoStep: yup.object().shape({
    oppTitle: required,
    //oppDuration: required,
    //country: required,
    //city: required,
    //salaryFrom: required,
    //salaryTo: required,
    
  }),
  oppoInfoStep2: yup.object().shape({
    skills:required, //required.nullable(),
    //years: digits,
    //oppCategory: required
    
  }),
  oppoInfoStep3: yup.object().shape({
    requirments:required, 
    extraPoints:required,
  }),

  oppoInfoStep4: yup.object().shape({
    willDo:required, 
  }),
  oppoInfoStep5: yup.object().shape({
    offers:required, 
  }),
  oppSkillSearch: yup.object().shape({
    skill: required.nullable(),
    years: digits,
    //oppCategory: required
    
  }),
  companyAgencyInfoStep: yup.object().shape({
    companyName: required,
    companySize: required,
    postalCode: required,
    address: required,
    country: required,
    city: required
  }),
  // profile: yup.object.shape({})
};

export default formSchemas
