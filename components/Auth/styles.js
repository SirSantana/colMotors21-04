import { makeStyles } from '@material-ui/styles';

export default makeStyles((theme) => ({
  paper: {
    display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
    marginTop: theme.spacing(1),
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    marginBottom:'50px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper2: {
    padding: theme.spacing(2),
    background:"#f50057",
    color: 'white',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    justifyContent: 'center',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'300px',
    [theme.breakpoints.down('xs')]: {
      width:'90%',
  
      },

  },
  typo:{
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    fontSize: '22px',
    fontWeight:'600',

  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
 
}));