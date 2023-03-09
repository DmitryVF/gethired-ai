import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
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

function Location({
  badge,
  values=[], 
  title = null, 
  onSubmit=()=>{},
  label='BULLETIN',
  description,
}) {
  const classes = useStyles();

  const [list, setList] = useState(values);
  const [item, setItem] = useState("");
  const [addr, setAddr] = useState("");
  const [zip, setZip] = useState("");
  const [editingId, setEditingId] = useState(-1);
  const [editingItem, setEditingItem] = useState('');

  const onChange = (e) => {
    setItem(e.target.value);
  }

  const onZipChange = e => {
    setZip(e.target.value);
  }

  const onAddrChange = e => {
    setAddr(e.target.value);
  }

  const onChangeEditingZip = (e) => {
    setEditingItem({...editingItem, zip: e.target.value});
  }

  const onChangeEditingAddr = (e) => {
    setEditingItem({...editingItem, addr: e.target.value});
  }

  const {
    handleSubmit, errors, control // , watch
  } = useForm({
   list,
   // validationSchema: formSchemas.oppoInfoStep
  });


  const onAdd = (data) => {
    data.preventDefault();
    // console.log('onAdd', data);
    if(zip && addr){
      const newList = [ {zip, addr}, ...list ];
      setList(newList);
      setAddr("");
      setZip("");
      onSubmit(newList);
    }
    
  };

  const onEdit = (id) => {
    console.log('onEdit', id);
    setEditingId(id);
    setEditingItem(list[id]);
  };

  const onSave = () => {
    
    if(editingItem){
      const newList = [...list.slice(0, editingId), editingItem ,...list.slice(editingId + 1)];
      setList(newList);
      onSubmit(newList);
    }
    setEditingId(-1);
    setEditingItem("");
  };

  const onDelete = (id) => {
    console.log('onDelete', id);
    const newList = [...list.slice(0, id),...list.slice(id + 1)];
    setList(newList);
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

    <form onSubmit={onAdd}>
      <Grid container spacing={2} alignItems='center' justify='center'>
        <Grid xs={3} item>
          <InputField
            label='POSTAL CODE'
            value={zip}
            onChange={onZipChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label={label}
            multiline
            rowsMax="4"
            value={addr}
            onChange={onAddrChange}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3} style={{paddingTop: 16}}>
          <Button>Search</Button>
        </Grid>
      </Grid>
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
    </form>
      <Box minWidth="428px" mt="32px" mb="50px">
        {
          list.map((item, idx) => {
            if(editingId === idx ){
              return(
                <React.Fragment key={idx}>
                    <Box mt={-4} minWidth="428px">
                      <InputField
                        label="EDIT POSTAL CODE"
                        value={editingItem.zip}
                        onChange={onChangeEditingZip}
                        variant="outlined"
                      />
                      <InputField
                        label="EDIT ADDRESS"
                        value={editingItem.addr}
                        onChange={onChangeEditingAddr}
                        variant="outlined"
                      />
                    </Box>
                   <span onClick={onSave} className={classes.edit}> Save </span>

                </React.Fragment>
              );
            }
            else{
              return(
                <li key={idx} className={classes.textli}>
                 &#8226; {item.zip}.&nbsp;{item.addr}

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
export default Location
