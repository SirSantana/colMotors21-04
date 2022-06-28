import { makeStyles } from '@material-ui/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[900]),
    marginRight: '5px',
  },
  menu:{
    justifyContent: 'flex-start',
    width:'100%'
  },
  menuChoose:{
    width:'145px',
  }
}));