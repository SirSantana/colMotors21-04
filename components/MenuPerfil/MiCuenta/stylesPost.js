import { makeStyles } from '@material-ui/styles';
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme)=>({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'center',
    borderRadius: '15px',
    height: '100%',
    padding: '0',
  },
  buttons:{
    display:'flex', flexDirection:'row',
    [theme.breakpoints.down("sm")]: {
      margin:0,
      justifyContent:'center'
    },
  }
  
}));