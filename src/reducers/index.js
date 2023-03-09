import { combineReducers } from 'redux';
import appReducers from './appReducers';
import authReducers from './authReducers';

const rootReducer = combineReducers({
  app: appReducers,
  auth: authReducers
});

export default rootReducer
