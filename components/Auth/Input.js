import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import useStyles from './styles'
import {Visibility} from '@material-ui/icons';
import {VisibilityOff} from '@material-ui/icons';

const Input = ({name,variant, handleChange, label, half, autoFocus, type, handleShowPassword, value,placeholder, disabled }) => (
  
  
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      name={name}
      onChange={handleChange}
      variant={variant ? variant : 'outlined'}
      required
      fullWidth
      label={label}
      autoFocus={autoFocus}
      type={type}
      disabled={disabled}
      InputLabelProps={{ style: {display:'flex', flexWrap:'true', fontSize: 14 } }}
      value={value}
      placeholder={placeholder}
      InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      } : null}
    />
  </Grid>
);

export default Input;