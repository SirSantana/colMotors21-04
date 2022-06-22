import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container1: {
    width: "100%",
    maxWidth: "400px",
  },
  container2: {
    backgroundColor: "gray",
    width: "100%",
    maxWidth: "400px",
    height: "100px",
    display:'flex',
    alignItems:'center',
    borderRadius: "10px",

  },
  
  container3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    padding: "15px 10px 10px 10px",
    marginTop: "10px",
  },
  container4:{
    backgroundColor:'#464646',
    borderRadius:'10px',
    marginLeft:'60px', 
    display:'flex',
    padding:'10px', 
    textAlign:'center',flexDirection:'row',
    [theme.breakpoints.down("sm")]: {
        marginLeft:'10px',
      }
  },
  img:{
    borderRadius:'10px', height:'80px', width:'100px'
  },
  avatar: {
    textAlign:'center',
    marginLeft:'auto',
    marginRight:'auto'
  },
  texto1: {
    borderRadius: "10px",
    background: "gray",
    marginLeft: 0,
    width: "40%",
    height: "30px",
    margin: "5px",
    color: "white",
    padding: "5px",
  },
  texto2:{
    margin:0,marginLeft:'10px', color:'gray'
  },
  texto3:{
    margin:0,marginLeft:'10px'
  },
  texto4:{
    margin:'5px 10px', color:'gray'
  },
  nombre1:{
    margin:'0px 10px 0px 10px', color:'#f1f1f1', fontSize:'18px', fontWeight:'600'
  },
  texto5:{
    margin:0,marginLeft:'10px', color:'#f1f1f1', fontSize:'12px', 

  },
  texto6:{
    margin:0, color:'#f1f1f1', fontSize:'12px', textAlign:'center'

  }
}));
