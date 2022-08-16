import { Button,Dialog,Divider,Paper,Typography } from "@material-ui/core";
import { Close, Error, Check } from "@material-ui/icons";

import useStyles from '../stylesCard.js'

export default function VisibleDelete({message, handleDelete, setVisibleDelete,visibleDelete}){
    const classes = useStyles()
    console.log('holas');
    return(
        <>
        <Dialog
      open={visibleDelete}
      onClose={()=> setVisibleDelete()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      // TransitionComponent={Transition}
      keepMounted
      
    >
      <div className={classes.paper2}>

            <Error style={{ paddingRight: "10px" }} />
            <Typography
              className={classes.typo}
              style={{ fontSize: "14px", color: "white" }}
            >
              {message
                ? 'Se ha eliminado correctamente'
                : "Esta seguro que quiere eliminarla?"}{" "}
            </Typography>

            <br />
            {message ? null : (
              <>
                <div style={{display:'flex'}}>
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
                </div>
              </>
            )}
      </div>

          </Dialog>
        </>
    )
}