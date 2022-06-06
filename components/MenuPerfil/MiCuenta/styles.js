import { makeStyles } from "@material-ui/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  media: {
    borderRadius: "20px",
    width: "100%",
    maxHeight: "600px",
  },
  img:{ 
   maxWidth: '200px'
  },
  
  card: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
  },
  section: {
    width:'300px',
    maxWidth:'600px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    background:"#1b333d",
    marginBottom:'10px',
    borderRadius: 5,

  },
  imageSection: {
    marginLeft: "10px",
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  navbar: {
    background: "#1b333d",
    color: "white",
    padding: "5px",
    fontWeight:'600',


  },
  container: {
    borderRadius: 5,
    display: 'flex',
    width: '600px',
    padding:'20px',
    [theme.breakpoints.down("sm")]: {
      margin:0,
      width: "75%",
    },
  },

}));
