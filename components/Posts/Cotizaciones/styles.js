import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  divContainer: {
    marginBottom: "10px",
    display: "flex",
    gap: "10px",
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    bottom: "3vh",
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
    },
  },
  divContainer2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
    [theme.breakpoints.down("xs")]: {
      width: "86%",
    },
  },
  comentarios: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "15px",
    backgroundColor: "#949494",
    color: "white",
    marginTop: "10px",
    height: "100%",
  },
  sectionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#1b333d",
  },
  containerComents: {
    width: "90%",
    maxHeight: "300px",
    overflowY: "auto",
    background: "#949494",
    display: "flex",
    margin: "0 auto",
    marginTop: "5px",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      maxHeight: "none",
      height: "68%",
    },
  },
  container3: {
    borderRadius: "10px",
    backgroundColor: "#464646",
    marginBottom: "10px",
    padding: "5px",
  },
  typo: {
    fontFamily: " -apple-system, BlinkMacSystemFont, Segoe UI,",
    fontWeight: "600",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
    color: "white",
    textAlign: "left",
    width: "100%",
    marginBottom: "5px",
  },
  card1: {
    width:'97%',
    margin: "0",
    textAlign: "left",
    color: "#f1f1f1",
    justifyContent: "center",
    textDecoration: "none",
    borderRadius: "10px",
    backgroundColor:'#f1f1f1',
    marginRight:'5px'
  },
  container4:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "30px",
    lineHeight: "15px",
  },
  purple2: {
    margin:0,
    backgroundColor: '#949494',
    color:'white',
    fontSize:'22px'

  },
  container5:{
      display:'flex',
      fledDirection:'row'
  }
}));
