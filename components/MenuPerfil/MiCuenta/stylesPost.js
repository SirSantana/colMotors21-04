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
    display:'flex', flexDirection:'row', marginLeft:'20px',
    [theme.breakpoints.down("sm")]: {
      margin:0,
      justifyContent:'center'
    },
  },
  cotizar:{
    width:'90%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom: '15px',
    color:'white',
    marginTop:'10px'
  },
  
}));