import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
    },
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#255,255,255",
    margin:0,
    width:'90%',
    [theme.breakpoints.down('sm')]: {
        paddingLeft:'8px',
        width:'90%'
      }
  },
  header:{
    display:'flex',
     color:'white',
     borderRadius:'5px',
      marginBottom:'10px',
      padding:'10px 20px',
      alignItems:'center',
      width:'88%',
      justifyContent:'center', 
      backgroundColor:"#1b333d",
      [theme.breakpoints.down('sm')]: {
  
        marginTop:'20px'
      }
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
      fontSize: '20px',
      fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
      paddingRight:'20px',
      margin:0
  },
  typo2:{
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    fontSize: '22px',
    fontWeight:'600',

  },
  marca:{
    marginTop: '10px'
    
  },
  garantia:{
    maxWidth: '150px',
    minWidth: '50px',
    marginTop:'20px'
  },
  button:{
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20px'
  },
  garantia1:{
   maxWidth: '150px',
   minWidth: '40px',
   marginBottom: '10px'

},
  div:{
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '20px',
    marginBottom: '20px',
  }
  
}));
