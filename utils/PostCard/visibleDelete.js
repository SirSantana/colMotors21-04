import { Button,Divider,Paper,Typography } from "@material-ui/core";
import { Close, Error, Check } from "@material-ui/icons";

import useStyles from '../stylesCard.js'

export default function VisibleDelete({message, handleDelete, setVisibleDelete}){
    const classes = useStyles()
   
    return(
        <>
        <Paper className={classes.paper2} elevation={3}>
            <Error style={{ paddingRight: "10px" }} />
            <Typography
              className={classes.typo}
              style={{ fontSize: "14px", color: "white" }}
            >
              {message
                ? 'Se ha eliminado correctamente'
                : "Esta seguro que quiere eliminar esta cotizacion?"}{" "}
            </Typography>

            <br />
            {message ? null : (
              <>
                <Button
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => setVisibleDelete(false)}
                >
                  <Close fontSize="medium" />
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleDelete}
                >
                  <Check fontSize="medium" />
                </Button>
              </>
            )}
          </Paper>
        </>
    )
}