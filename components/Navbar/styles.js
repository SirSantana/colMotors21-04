import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    fontFamily: '-apple-system, Segoe UI,',
    borderRadius: 5,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 10px',
    background:" #1b333d",
    maxWidth:'800px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding:'0',
      width:'100vw',
    borderRadius: 0,
    margin:0,
    }
  },
  img:{
    height:'50px',
    width:'50px',
    margin:'0 auto'
  },
  heading: {
    marginLeft:'15px',
    textDecoration: 'none',
    fontSize: '3em',
    fontWeight: 600,
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    color:'white',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.0em',
    }
  },
  a:{
    display:'flex',
    flexDirection: 'row',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    alignItems:'center',
    justifyContent:'center'
  },
  
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none'
  }
}));