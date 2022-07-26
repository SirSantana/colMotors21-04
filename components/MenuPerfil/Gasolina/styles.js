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
  }
}));