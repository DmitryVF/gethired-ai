import { combineReducers } from 'redux';
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT
} from '../constants/authConstants'
import createReducer from '../utils/createReducer';

const initialState = {
  isAuthenticated: true // temporarily is true should be false
};

const isAuthenticated = createReducer(initialState.isAuthenticated, {
  [LOGIN_SUCCESS]: (state, action) => true,
  [LOGIN_FAILURE]: (state, action) => false,
  [LOGOUT]: (state, action) => false,
});

export default combineReducers({
  isAuthenticated,
});
