import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  divContainer: {
    marginBottom: "10px",
    display: "flex",
    gap: "10px",
    width: "95%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    bottom: "3vh",
    [theme.breakpoints.down('xs')]: {
        position: "absolute",

    },
  },
  divContainer2:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    [theme.breakpoints.down('xs')]: {
        width: "86%",

    },
  }
}));
