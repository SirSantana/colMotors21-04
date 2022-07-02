import { Button, Paper, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useRouter } from "next/router";
import useStyles from '../utils/stylesCard.js'

export default function DeletePost() {
    const router = useRouter()
    const classes = useStyles()
  return (
    <>
        <Paper className={classes.paper2} style={{display:'flex', flexDirection:'column'}} elevation={3}>

      <Typography
        className={classes.typo}
        style={{ fontSize: "14px", color: "white" }}
      >
        Se ha eliminado correctamente
      </Typography>
      <Button
        variant="contained"
        style={{ marginRight: "10px" }}
        onClick={()=>router.push("/home")}
      >
        Regresar
      </Button>
    </Paper> 
    </>
  );
}
