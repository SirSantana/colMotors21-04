import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container1: {
    width: "50vw",
    marginTop: "20px",

    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "96vw",
      height: "100vh",
    },
  },

  container2: {
    width: "100%",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    backgroundColor: "#f1f1f1",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",

    [theme.breakpoints.down("sm")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  container3: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: "100px",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      marginRight: "0",
    },
  },
  container4: {
    backgroundColor: "#464646",
    borderRadius: "10px",
    display: "flex",
    padding: "10px",
    textAlign: "center",
    flexDirection: "row",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",
    width: "30%",
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  div1: {
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0",
    },
  },
  div2: {
    margin: "20px",
    border: "3px solid lightGray",
    borderRadius: "10px",
    width: "90%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // backgroundImage:"url('https://www.1zoom.me/es/wallpaper/560376/z1933.9/')",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      padding: 0,
    },
  },
  container5: {
    color: "#f1f1f1",
    borderRadius: "10px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",

    backgroundColor: "#1b333d",
    width: "30%",
    padding: "10px",
    margin: "20px 10px 10px 10px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2%",
      padding: "7px",
    },
  },
  container6: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f1f1f1",
    borderRadius: "10px",
    height: "100%",
    width: "70%",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
      margin: "0 auto",
    },
  },

  container7: {
    display: "flex",
    flexDirection: "row",
    height: "fit-content",
    width: "100%",
    marginLeft: "10px",
    background: "none",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      margin: 0,
    },
  },
  container8: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "10px",
    height: "100%",
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      marginTop: "20px",
      width: "100%",
    },
  },
  container9: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#464646",
    borderRadius: "10px",
    height: "100px",
    width: "70%",
    maxWidth: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "30px",
    textAlign: "center",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 37px 29px 0px",
  },
  img: {
    borderRadius: "10px",
    height: "80px",
    width: "100px",
  },
  img2: {
    borderRadius: "10px",
    height: "250px",
    width: "100%",
    margin: "0",
    objectFit:'cover',
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    height: "180px",

    },
  },
  conta1: {
    backgroundColor: "#f1f1f1",
    marginTop: "20px",
    borderRadius: "10px",
    width: "40%",
    color: "#464646",
    padding: "30px",
    height: "fit-content",
    paddingTop: "0px",
    margin:'0 auto',
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    padding: "10px",

    },
  },
  icon: {
    borderRadius: "10px",
    height: "15%",
    width: "20%",
    color: "gray",
    fontSize: "20px",
    margin: "0 auto",
    padding: "20%",
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      height: "15%",
    },
  },

  avatar: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    background: "gray",
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
  texto2: {
    margin: 0,
    marginLeft: "10px",
    color: "gray",
  },
  texto3: {
    margin: 0,
    marginLeft: "10px",
    lineHeight: "24px",
  },
  texto4: {
    marginLeft: "10px",
    color: "gray",
    marginBottom: "5px",
    marginTop: 0,
  },
  nombre1: {
    margin: "0px 10px 0px 10px",
    color: "#black",
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "14px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "5px",
    },
  },
  texto5: {
    margin: 0,
    marginLeft: "10px",
    color: "#f1f1f1",
    fontSize: "14px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "5px",
    },
  },
  texto6: {
    margin: 0,
    color: "gray",
    fontSize: "12px",
    textAlign: "center",
  },
}));
