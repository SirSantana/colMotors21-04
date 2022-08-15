import { makeStyles } from '@material-ui/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  divs:{
    display: "flex",
    marginBottom: "10px",
    flexDirection: "row",
    marginLeft: "30px",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
        marginLeft: "10px",
  
      },
  },
  formControl: {
    width: "48%",
    backgroundColor: "white",
    marginLeft: "6px",
    marginTop: "6px",
    color:'red',
    [theme.breakpoints.down("sm")]: {
      width: "100%",

    },
  },
  texto7: {
    color: "gray",
    fontSize: "20px",
    fontWeight:'400',
    margin:0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",

    },
  },
  div2:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft:'30px',
    [theme.breakpoints.down("sm")]: {
        marginLeft:'10px',
      },
  },
  div1:{
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
  },
  divColumn:{
    display: "flex",
    flexDirection: "column",
    marginBottom: "10px",
    alignContent:'center'
  },
  texto:{
    fontWeight: 700,
    fontSize:'20px',
    margin:0, color:'white',
    [theme.breakpoints.down("sm")]: {
    fontSize:'16px',

    },
  },
  subtitle:{
     fontSize:'18px', fontWeight:'600',color:'#1b333d',margin:0,
    [theme.breakpoints.down("sm")]: {
      fontSize:'16px',
  
      },
  },
  subtitle2:{
     fontSize:'16px',fontWeight:'400',color:'#1b333d',margin:0,
    [theme.breakpoints.down("sm")]: {
      fontSize:'14px',
  
      },
  },
  texto1:{
    fontWeight: 700,
    fontSize:'16px',
    margin:0,
    backgroundColor:'white', color:'#f50057', padding:'8px 16px', borderRadius:'10px',
    [theme.breakpoints.down("sm")]: {
    fontSize:'14px',
    padding:'5px 12px'
    },
  },
  containerCard:{
    backgroundColor:'#f1f1f1', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px',
    boxShadow: "rgba(149, 157, 165, 0.8) 0px 8px 10px"
  },
  containerCard2:{
    display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'
  }
}));