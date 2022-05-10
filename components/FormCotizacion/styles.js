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
  
        width:'90%'
      }
  },
  header:{
    display:'flex',
     color:'white',
      marginBottom:'10px',
      padding:'10px 20px',
      alignItems:'center',
      justifyContent:'center', 
      backgroundColor:"#1b333d",
      [theme.breakpoints.down('sm')]: {
  
        marginTop:'20px'
      }
  },
  typo:{
      fontSize: '20px',
      fontFamily: 'Helvetica',
      paddingRight:'20px',
      margin:0
  },
  marca:{
    marginTop: '10px'
    
  },
  garantia:{
    maxWidth: '150px',
    minWidth: '50px'
  },
  button:{
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '20px',
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
