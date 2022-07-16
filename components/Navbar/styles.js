import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    fontFamily: "-apple-system, Segoe UI,",
    borderRadius: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px",
    maxWidth: "800px",
    height:'60px',
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "0",
      width: "100vw",
      borderRadius: 0,
      margin: 0,
    },
  },
  img: {
    height: "50px",
    width: "50px",
    margin: "0 auto",
  },
  heading: {
    margin:0,
    marginLeft: "15px",
    textDecoration: "none",
    fontSize: "3em",
    fontWeight: 600,
    fontFamily: " -apple-system, BlinkMacSystemFont, Segoe UI,",
    color: "#1b333d",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.0em",
    },
  },
  a: {
    display: "flex",
    flexDirection: "row",
    fontFamily: " -apple-system, BlinkMacSystemFont, Segoe UI,",
    alignItems: "center",
    justifyContent: "center",
  },

  brandContainer: {
    display: "flex",
    textDecoration: "none",
  },
  divButton: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: "5px",
    },
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    marginBottom: "5px",
    width: "100%",
    height:'100px',
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      marginTop:0,
    height:'60px',

    },
  },
}));
