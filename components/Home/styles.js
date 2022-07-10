import { makeStyles } from "@material-ui/styles";
import { width } from "@material-ui/system";

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 10,
    display: "flex",
    padding: "16px",
    maxWidth: "240px",
  },

  pagination: {
    borderRadius: 4,
    marginTop: "1rem",
  },
  container: {
    margin: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "100%",
    },
  },
  container2: {
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputSearch: {
    backgroundColor: "white",
    paddingLeft: "48px",
    fontSize: "20px",
    margin: "0 auto",
    width: "500px",
    height: "50px",
    borderRadius: "10px",
    border: "0",
    [theme.breakpoints.down("xs")]: {
    width: "85vw",
    paddingLeft: "38px",
      
    },
  },
  Buscador: {
    background: "url(https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-19-32.png) no-repeat 0px 5px",
    backgroundSize: "40px",
    backgroundColor:'white',
    width: "500px",
    border:" transparent",
    borderRadius:'10px',
    borderBottom: "solid 1px #ccc",
    height:'50px',
    alignItems:'center',
    justifyContent:'center',
    padding: "10px 10px 10px 40px",
    outline: "none",
    fontSize:'18px',
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    backgroundSize: "36px",
    fontSize:'16px',
        
      },
  },
  icon:{
    cursor:'pointer',position:'absolute', top:'37%', left:'36%', marginTop:'20px', zIndex:1,
    [theme.breakpoints.down("xs")]: {
      marginTop:'10px',
      },
  },
  button:{
    marginRight:'20px',
    [theme.breakpoints.down("xs")]: {
      width:'48%',
      fontSize:'12px',
      padding:'5px'
      },
  },
  card1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    height: "60px",
    maxWidth: "512px",
    backgroundColor: " #1b333d",
    color: "white",
    content: "fit-content",
    marginBottom: "20px",
    paddingRight: "10px",
  },
  gridCotizacion: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "10px",
    },
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      marginLeft: "auto",
      marginRight: "auto",
      padding: 0,
      width: "95%",
    },
  },
  contenedor: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
    },
  },

  typography: {
    color: "white",
    fontSize: "20px",
    fontFamily: " -apple-system, BlinkMacSystemFont, Segoe UI,",
    fontWeight: "600",
    marginLeft: "20px",
  },
  modal: {
    display: "block" /* Hidden by default */,
    position: "fixed" /* Stay in place */,
    zIndex: "1000" /* Sit on top */,
    left: "30%",
    top: "30%",
    width: "100%" /* Full width */,
    height: "100%" /* Full height */,
    overflow: "auto" /* Enable scroll if needed */,
    backgroundColor: "rgb(0,0,0)" /* Fallback color */,
    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */,
  },
  modalContent: {
    backgroundColor: "#fefefe",
    margin: "15% auto" /* 15% from the top and centered */,
    padding: "20px",
    left: "30%",
    top: "30%",
    border: "1px solid #888",
    width: "30%" /* Could be more or less, depending on screen size */,
    [theme.breakpoints.down("xs")]: {
      margin: "45% auto",
      width: "70%",
    },
  },
  modalContent2: {
    backgroundColor: "#fefefe",
    margin: "10% 40%" /* 15% from the top and centered */,
    padding: "20px",
    border: "1px solid #888",
    width: "30%" /* Could be more or less, depending on screen size */,
    [theme.breakpoints.down("xs")]: {
      margin: "45% auto",
      width: "70%",
    },
  },
  /* The Close Button */
  close: {
    color: "#aaa",
    float: "right",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  // divv1:{
  //   width:'80vw', display:'flex', flexDirection:'row', margin:'0 auto',
  //   [theme.breakpoints.down('xs')]: {
  //     width:'100vw',
  //     flexDirection: 'column-reverse',

  //   },
  // },
  // divv2:{
  //   width:'30%',
  //   [theme.breakpoints.down('xs')]: {
  //     width:'100vw',

  //   },
  // },
  // divv3:{
  //   display:'flex', flexDirection:'column', width: '40%',
  //   [theme.breakpoints.down('xs')]: {
  //     width:'100vw',

  //   },
  // },
  // divv4:{
  //   display:'flex', flexDirection:'column', width: '20%', margin:'0 auto',
  //   [theme.breakpoints.down('xs')]: {
  //     width:'90vw',

  //   },
  // },
}));
