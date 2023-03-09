import {
  SET_FORM_VALUES
} from '../constants/appConstants';

export const setFormValues = (formName, values) => ({
  type: SET_FORM_VALUES,
  formName,
  values
});
