import { combineReducers } from 'redux';
import * as appConstants from '../constants/appConstants'
import createReducer from "../utils/createReducer";

const initialState = {
  forms: {}
};

const { SET_FORM_VALUES } = appConstants;

const forms = createReducer(initialState.forms, {
  [SET_FORM_VALUES]: (state, { formName, values }) => ({
    ...state,
    [formName]: {
      ...state[formName],
      ...values
    }
  })
});

export default combineReducers({
  forms
});
