import { makeStyles } from "@material-ui/styles";
import { width } from "@material-ui/system";

export default makeStyles((theme) => ({
  div1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "50vh",
  },
  img1: {
    width: "50px",
    height: "50px",
    marginBottom: "20px",
  },
  div2: {
    marginTop: "20px",
    width: "96%",
    display: "flex",
    margin: "20px auto 0 auto",
    alignItems: "center",
    justifyContent: "center",
  },
  div3: {
    display: "flex",
    width: "300px",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  div4: {
    display: "flex",
    width: "84vw",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    width: "300px",
    flexDirection: "column",
    height: "fit-content",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    marginBottom: "10px",
  },
  typo:{
    fontSize: "16px",
    color: "black",
    marginRight: "8px",
    marginBottom: "10px",
  },
  Buscador: {
    background:
      "url(https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-19-32.png) no-repeat 0px 5px",
    backgroundSize: "40px",
    backgroundColor: "white",
    width: "500px",
    border: " transparent",
    borderRadius: "10px",
    borderBottom: "solid 1px #ccc",
    height: "50px",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 10px 10px 40px",
    outline: "none",
    fontSize: "18px",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      backgroundSize: "36px",
      fontSize: "16px",
    },
  },
  button: {
    marginRight: "20px",
    [theme.breakpoints.down("xs")]: {
      width: "48%",
      fontSize: "12px",
      padding: "5px",
    },
  },
  contenedor: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
    },
  },
}));
