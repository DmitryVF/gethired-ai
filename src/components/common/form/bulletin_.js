import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { getIsError, getHelperText } from '../../../components/common/form-helpers/formFieldHelpers';
import InputField from '../../../components/common/form-helpers/inputField';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles( theme => ({
  title: {
    fontSize: '24px',
    fontFamily: "Gilroy-Bold",
  },
  possible: {
    fontSize: '10px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
    textAlign: "center"
  },
  num: {
    fontSize: '18px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
    textAlign: "center"
  },
  textli:{
    fontFamily: 'Roboto',
    fontSize: '16px',
    marginLeft: '0px',
    margin: '10px',
    listStyleType:"none",
    paddingBottom: "16px",

  },
  edit: {
    fontSize: '11px',
    fontWeight: 'bold',
    fontFamily: "Gilroy-Bold",
    cursor: "pointer"
  }
}));

function Bulletin({
  formName,
  badge,
  values=[], 
  title = null, 
  onSubmit=()=>{},
  label='BULLETIN',
  description,
  name, 
  errors,
  watch,
  control,
  setValue,
  triggerValidation,


}) {
  const classes = useStyles();
  
  const [list, setList] = React.useState(values);
  const [editingId, setEditingId] = useState(-1);
  const [editingItem, setEditingItem] = useState('');

  const item= list.length? watch(name+'Input') : watch(name);

  const onChangeEditing = (e) => {
    setEditingItem(e.target.value);
  }
  

  const onAdd = (data) => {
    data.preventDefault();
    if(item && item.length){
      const newList = [ item, ...list ];
      setList(newList);
      setValue(name+'Input', "");
      onSubmit(newList);
    }
    
  };

  const onEdit = (id) => {
    setEditingId(id);
    setEditingItem(list[id]);
  };

  const onSave = () => {
    
    if(editingItem){
      const newList = [...list.slice(0, editingId), editingItem ,...list.slice(editingId + 1)];
      setList(newList);
      setValue(name, newList);
      onSubmit(newList);
    }
    setEditingId(-1);
    setEditingItem("");
  };

  const onDelete = (id) => {
    const newList = [...list.slice(0, id),...list.slice(id + 1)];
    setList(newList);
    setValue(name, newList);
    onSubmit(newList);
  };

  return (
    <React.Fragment>
    
    <Box minWidth="428px">
      <Typography 
        className={title? classes.title: ""}
        style={{position: 'relative'}}
      > 
        {badge}
        {title} 
      </Typography>
    </Box>

    <Typography variant="body2">
      {description}
    </Typography>

      <Box display={list.length? "block": "none"} 
      minWidth="428px">

        <Controller
          as={InputField}
          control={control}
          error={getIsError(errors, name+'Input')}
          helperText={getHelperText(errors, name+'Input')}
          required
          name={name+'Input'}
          label={label}
          multiline
          rowsMax="4"
          variant="outlined"
        />
      </Box>
      <Box display={list.length? "none": "block"} 
      minWidth="428px">

        <Controller
          as={InputField}
          control={control}
          error={getIsError(errors, name)}
          helperText={getHelperText(errors, name)}
          required
          defaultValue={values}
          name={name}
          label={label}
          multiline
          rowsMax="4"
          variant="outlined"
        />
      </Box>
      <Box mt="12px"/>
      <Box mt={0} minWidth="428px">
        <Button 
          variant='outlined' 
          onClick={onAdd}
        >
          + Add&nbsp;
          <span style={{textTransform: 'lowercase'}}>
            {label}
          </span>
        </Button>
      </Box>
      <Box minWidth="428px" mt="32px" mb="50px">
        {
          list.map((item, idx) => {
            if(editingId === idx ){
              return(
                <div key={idx}>
                    <Box mt={-4} minWidth="428px">
                      <InputField
                        // id="outlined-multiline-flexible"
                        label="EDIT"
                        multiline
                        rowsMax="4"
                        value={editingItem}
                        onChange={onChangeEditing}
                        variant="outlined"
                      />
                    </Box>
                   <span onClick={onSave} className={classes.edit}> Save </span>

                </div>
              );
            }
            else{
              return(
                <li key={idx} className={classes.textli}>
                 &#8226; {item} 

                 <span onClick={()=>{onEdit(idx)}} className={classes.edit}> Edit </span>
                 <span onClick={()=>{onDelete(idx)}} className={classes.edit}> Delete</span>

                </li>
              );
            }
          })
        }
      </Box>
   </React.Fragment>
)}
export default Bulletin
