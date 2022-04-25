import { makeStyles } from '@material-ui/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  purple: {
    color: theme.palette.getContrastText(deepPurple[900]),
    backgroundColor: deepPurple[600],
    marginLeft: '10px'
  },
  menu:{
    justifyContent: 'flex-start'
  }
}));