/* eslint-disable no-use-before-define */
import React, { useState }  from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import InputField from '../../../components/common/form-helpers/inputField';
import { useForm, Controller } from 'react-hook-form';



const useStyles = makeStyles( theme => ({
autocomplete: {
	// padding: "100px",
	
	heigth:"3px",
    '& > div > input ': {
      margin: "-2px !important",
    },
  },
  autoinput:{
  	padding: "0px",
       
  },
  field: {
	padding: "0px",
	
    
  },

}));


export default function FreeSolo({label, name, options,  
control, required, error, helperText, setValue, watch, triggerValidation, placeholder=""
}) {

	const classes = useStyles();
	// setValue(name, watch(name));


	const [value, settValue] = useState("");
	const onChange = (e, value) => {
		// console.log("onChange value = ", value, "name = ", name);
    	// setValue(value);
    	// settValue(value);
    	watch(value);
    	setValue(name, value);
    	triggerValidation(name);
    	//settValue("value");
    	//setValue(name, value);
    	
    	
  	}
  	const onInputChange = (e, value) => {
		// console.log("onCChange value = ", e, "name = ", name);
    	// setValue(value);
    	// settValue(value);
    	settValue(value);
    	//setValue(name, value);
    	
    	
    	
  	}



  	const InputLabelProps = { shrink: true }
  	// console.log("value= ", value, "name = ", name);
  return (
  	 
	      
     <Autocomplete
     		//classes={{ input: classes.autocomplete , input: classes.autoinput }}
	      	//fullWidth
	        id={name}
	        freeSolo
	        options={options.map(option => option)}
	        label={label}
	        name={name}
	        onChange={onChange}
	        inputValue = {value}
	        onInputChange={onInputChange}
	        //InputLabelProps={InputLabelProps}
	        renderInput={({InputLabelProps,...params}) =>{
	        		 // console.log("params.inputProps= ", params.inputProps);
	        	return (
	          <Controller  as={InputField}
	          className={classes.field}
	          control={control}
	          required = {required}
	          error = {error}
              helperText = {helperText}
	          name={name}
	          value={value}
	          placeholder = {placeholder}
	          classes={{   root: classes.autocomplete }}
	          fullWidth  {...params} label={label} margin="normal" variant="outlined" />
	        )}}
	      />
	
  );
}



