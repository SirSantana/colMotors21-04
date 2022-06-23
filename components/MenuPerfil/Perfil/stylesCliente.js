import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container1: {
    width: "100%",
    maxWidth: "500px",
    marginTop:'20px',
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      margin:0,
      marginTop:'20px',
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",

    }
  },
  container2: {
    backgroundColor: "gray",
    width: "100%",
    maxWidth: "400px",
    height: "100px",
    display:'flex',
    alignItems:'center',
    borderRadius: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",
    [theme.breakpoints.down("sm")]: {
      borderRadius: "0px",


    }
  },
  
  container3: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    padding: "10px",
    maxWidth:'300px',
    marginTop: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",
    [theme.breakpoints.down("sm")]: {
      marginLeft:'auto',
      width:'80vw',
      marginRight:'auto',

    }
  },
  container4:{
    backgroundColor:'#464646',
    borderRadius:'10px',
    marginLeft:'60px', 
    display:'flex',
    padding:'10px', 
    textAlign:'center',flexDirection:'row',
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",

    [theme.breakpoints.down("sm")]: {
        marginLeft:'10px',
      }
  },
  container6:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#f1f1f1',
    borderRadius:'30px',
    marginTop:'20px',
    height:'fit-content',
    width:'90%',
    marginBottom:'30px',
    marginLeft:'auto', marginRight:'auto',
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px"
  },
  img:{
    borderRadius:'10px', height:'80px', width:'100px'
  },
  img2:{
    borderRadius:'30px', height:'35vh', width:'100%', marginLeft:'auto', marginRight:'auto'

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
