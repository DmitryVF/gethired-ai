import React, { lazy } from 'react';
import YourInfoStep from '../pages/auth/signup/yourInfoStep';
import CompanyAgencyInfoStep from '../pages/auth/signup/companyAgencyInfoStep';
import WhoAreYouInfoStep from '../pages/auth/signup/whoAreYouInfoStep';
import PhotosAndVideosInfoStep from '../pages/auth/signup/photoAndVideoInfoStep';

import Login from '../pages/auth/login/login';
import ForgotPassword from '../pages/auth/forgot-password/forgotPassword';
import SetNewPassword from '../pages/auth/forgot-password/setNewPassword';
import PasswordChanged from '../pages/auth/forgot-password/passwordChanged';

import SignUpSuccess from '../pages/status/signUpSuccess';
import ProfileSuccess from '../pages/status/profileSuccess';
import OpportunintyCloseSuccess from '../pages/status/opportunityCloseSuccess';
import OpportunintyNewSuccess from '../pages/status/opportunityNewSuccess';
import ApplicationAcceptSuccess from '../pages/status/applicationAcceptSuccess';
import ApplicationRejectSuccess from '../pages/status/applicationRejectSuccess';

// newOpp pages
import OppInfoStep from '../pages/opportunities/opportunity-new/oppInfoStep';
import OppInfoStep2 from '../pages/opportunities/opportunity-new/oppInfoStep2';
import OppInfoStep3 from '../pages/opportunities/opportunity-new/oppInfoStep3';
import OppInfoStep4 from '../pages/opportunities/opportunity-new/oppInfoStep4';
import OppInfoStep5 from '../pages/opportunities/opportunity-new/oppInfoStep5';
import OppInfoStep6 from '../pages/opportunities/opportunity-new/oppInfoStep6';


export const SIGN_UP = '/signup';
export const SIGN_UP_STEP_1 = `${SIGN_UP}/step-1`;
export const SIGN_UP_STEP_2 = `${SIGN_UP}/step-2`;
export const SIGN_UP_STEP_3 = `${SIGN_UP}/step-3`;
export const SIGN_UP_STEP_4 = `${SIGN_UP}/step-4`;
export const SIGN_UP_SUCCESS = `${SIGN_UP}/success`;

export const signUpRoutes = [
  {
    name: 'Your Information',
    path: SIGN_UP_STEP_1,
    parentPath: null,
    exact: true,
    component: YourInfoStep
  },
  {
    name: 'Company / Agency Information',
    path: SIGN_UP_STEP_2,
    parentPath: SIGN_UP_STEP_1,
    exact: true,
    component: CompanyAgencyInfoStep
  },
  {
    name: 'Who are you?',
    path: SIGN_UP_STEP_3,
    parentPath: SIGN_UP_STEP_2,
    exact: true,
    component: WhoAreYouInfoStep
  },
  {
    name: 'Photos and Videos',
    path: SIGN_UP_STEP_4,
    parentPath: SIGN_UP_STEP_3,
    exact: true,
    component: PhotosAndVideosInfoStep
  }
];

export const LOGIN = '/login';
export const FORGOT_PASSWORD = '/forgot-password';
export const SET_NEW_PASSWORD = '/set-new-password';
export const PASSWORD_CHANGED = '/password-changed';

export const publicRoutes = [
  {
    name: 'Login',
    path: LOGIN,
    exact: true,
    component: Login
  },
  {
    name: 'Forgot Password',
    path: FORGOT_PASSWORD,
    exact: true,
    component: ForgotPassword
  },
  {
    name: 'Set New Password',
    path: SET_NEW_PASSWORD,
    exact: true,
    component: SetNewPassword
  },
  {
    name: 'Password Changed',
    path: PASSWORD_CHANGED,
    exact: true,
    component: PasswordChanged
  }
];

export const HOME = '/gethired-ai/';
export const APPLICANTS = '/gethired-ai/applicants';
export const APPLICANTS_ALL = '/gethired-ai/applicants/all';
export const APPLICANTS_ACCEPTED = '/gethired-ai/applicants/accepted';
export const APPLICANTS_REJECTED = '/gethired-ai/applicants/rejected';
export const OPPORTUNITY = '/gethired-ai/opportunity';
export const CHATS = '/gethired-ai/chats';
export const OPPORTUNITIES = '/gethired-ai/opportunities';
export const OPPORTUNITY_VIEW = '/gethired-ai/opportunity';
export const OPPORTUNITY_CLOSE_SUCCESS = `${OPPORTUNITY_VIEW}/closesuccess`;
export const APPLICATION_REVIEW = '/gethired-ai/application';
export const APP_ACCEPT_SUCCESS = '/gethired-ai/application/applicantacceptsuccess';
export const APP_REJECT_SUCCESS = '/gethired-ai/application/applicantrejectsuccess';
export const APP_ACCEPTED_VIEW = '/gethired-ai/acceptedapplication';
export const APP_REJECTED_VIEW = '/gethired-ai/rejectedapplication';



export const NEW_OPP = `/gethired-ai/opportunity/new`;
export const NEW_OPP_STEP_2 = `${NEW_OPP}/step-2`;
export const NEW_OPP_STEP_3 = `${NEW_OPP}/step-3`;
export const NEW_OPP_STEP_4 = `${NEW_OPP}/step-4`;
export const NEW_OPP_STEP_5 = `${NEW_OPP}/step-5`;
export const NEW_OPP_STEP_6 = `${NEW_OPP}/step-6`;
export const NEW_OPP_SUCCESS = `${NEW_OPP}/newsuccess`;




export const COMPANY = '/gethired-ai/company';
export const TEAM = '/gethired-ai/team';
export const PROFILE = '/gethired-ai/profile';
export const PROFILE_SUCCESS = `${PROFILE}/success`;
export const ASK_DAVID = `${PROFILE}/ask-david`;

export const privateRoutes = [
  {
    name: 'Home',
    path: HOME,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/home'))
  },
  {
    name: 'Applicants',
    path: APPLICANTS,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants'))
  },
  {
    name: 'Applicants',
    path: APPLICANTS_ALL,
    parentPath: APPLICANTS,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants'))
  },
  {
    name: 'Applicants',
    path: APPLICANTS_ACCEPTED,
    parentPath: APPLICANTS,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants'))
  },
  {
    name: 'Applicants',
    path: APPLICANTS_REJECTED,
    parentPath: APPLICANTS,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants'))
  },

  {
    name: 'Chats',
    path: CHATS,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/chats'))
  },
  {
    name: 'Opportunities',
    path: OPPORTUNITIES,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/opportunities'))
  },
  {
    name: 'Company',
    path: COMPANY,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/company'))
  },
  {
    name: 'Team',
    path: TEAM,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/team'))
  },
  {
    name: 'Profile',
    path: PROFILE,
    parentPath: null,
    visible: false,
    exact: true,
    component: lazy(() => import('../pages/profile'))
  },
];

export const privateOportunityRoutes = [
  {
    name: 'View Opportunity',
    path: OPPORTUNITY_VIEW,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/opportunities/opportunity-view'))
  },
  {
    name: 'Application Review',
    path: APPLICATION_REVIEW,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants/applicants-review'))
  },
  {
    name: 'Application View',
    path: APP_ACCEPTED_VIEW,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants/applicants-accepted'))
  },
  {
    name: 'Application View',
    path: APP_REJECTED_VIEW,
    parentPath: null,
    visible: true,
    exact: true,
    component: lazy(() => import('../pages/applicants/applicants-rejected'))
  },

];

export const newOportunityRoutes = [
  {
    name: 'Information',
    path: NEW_OPP,
    parentPath: null,
    visible: true,
    exact: true,
    component: OppInfoStep
  },
  {
    name: 'Category & Skills',
    path: NEW_OPP_STEP_2,
    parentPath: NEW_OPP,
    visible: true,
    exact: true,
    component: OppInfoStep2
  },
  {
    name: 'Requirments & Extra Points',
    path: NEW_OPP_STEP_3,
    parentPath: NEW_OPP_STEP_2,
    visible: true,
    exact: true,
    component: OppInfoStep3
  },
  {
    name: 'Tasks',
    path: NEW_OPP_STEP_4,
    parentPath: NEW_OPP_STEP_3,
    visible: true,
    exact: true,
    component: OppInfoStep4
  },
  {
    name: 'Perks',
    path: NEW_OPP_STEP_5,
    parentPath: NEW_OPP_STEP_4,
    visible: true,
    exact: true,
    component: OppInfoStep5
  },
  {
    name: 'Review & Publish',
    path: NEW_OPP_STEP_6,
    parentPath: NEW_OPP_STEP_5,
    visible: true,
    exact: true,
    component: OppInfoStep6
  },
];


export const privateStatusRoutes = [
  {
    name: 'Success',
    path: SIGN_UP_SUCCESS,
    exact: true,
    component: SignUpSuccess
  },
  {
    name: 'Profile Success',
    path: PROFILE_SUCCESS,
    parentPath: PROFILE,
    exact: true,
    component: ProfileSuccess
  },
  {
    name: 'Closed Opportunity Success',
    path: OPPORTUNITY_CLOSE_SUCCESS,
    parentPath: OPPORTUNITY_VIEW,
    exact: true,
    component: OpportunintyCloseSuccess
  },
  {
    name: 'New Opportunity Success',
    path: NEW_OPP_SUCCESS,
    exact: true,
    component: OpportunintyNewSuccess
  },
  {
    name: 'Applicant Accept Success',
    path: APP_ACCEPT_SUCCESS,
    exact: true,
    component: ApplicationAcceptSuccess
  },
  {
    name: 'Applicant Reject Success',
    path: APP_REJECT_SUCCESS,
    exact: true,
    component: ApplicationRejectSuccess
  }


];
