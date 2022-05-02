import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 10,
    display: 'flex',
    padding: '16px',
    maxWidth: '240px'
  },
 
  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
  },
  container:{
    margin:0,
    padding:0
  },
 
  card1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '5px',
    height: '60px',
    maxWidth: '512px',
    backgroundColor: " #1b333d",
    color: 'white',
    content: 'fit-content',
    marginBottom:"20px",
    paddingRight:'20px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    margin:0,
    padding:0,
    width:"100vw"
    },
  },
 
  typography:{
    color: 'white',
    fontSize: '20px',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    fontWeight:'600',
    marginLeft: '20px',
  },

  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    margin:0,
    padding:0,
    width:"100vw"
    },
  },
  container:{
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    margin:0,
    padding:0
    },
  }
}));