import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
      width:'100%'
    },
  },
  
  paper: {
    padding: theme.spacing(2),
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    background:'#white',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    boxShadow: "rgba(149, 157, 165, 0.6) 0px 8px 10px",
    [theme.breakpoints.down('xs')]: {
    width:'90%',

    },
    
  },
  paper1: {
    padding: theme.spacing(2),
    background:" #1b333d",
    color: 'white',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    justifyContent: 'center',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    [theme.breakpoints.down('xs')]: {
      width:'90%',
      },

  },
  paper2: {
    padding: theme.spacing(2),
    color: 'white',
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    justifyContent: 'center',
    marginBottom:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    flexDirection:'column',
    [theme.breakpoints.down('xs')]: {
      width:'90%',
      },

  },
  btnFileBase:{
    margin:'10px',
    padding:'10px',
    backgroundColor:'red'
  },
  typo:{
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
    fontSize: '22px',
    fontWeight:'600',
    textAlign:'center'
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    width:'100%',

    justifyContent: "center",
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',
  },
  card: {
    width:'97%',
    margin: "0",
    textAlign: "left",
    color: "#f1f1f1",
    justifyContent: "center",
    textDecoration: "none",
    border: "1px solid  #f1f1f1",
    borderRadius: "10px",
    transition: "color 0.15s ease, border-color 0.15s ease",
  },
  fileInput:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%'
  },


  buttonSubmit: {
    marginTop: "10px",
    fontFamily: ' -apple-system, BlinkMacSystemFont, Segoe UI,',


  }
}));
