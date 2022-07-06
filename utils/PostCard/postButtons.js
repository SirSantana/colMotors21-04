import { Button } from "@material-ui/core";
import useStyles from "../stylesCard.js";
import { useRouter } from "next/router";


export default function PostButton({userId, userRole,setMessageCotizar, idCreator, handleCotizar, cotizacionCreada, numeroCotizaciones }){
const classes = useStyles();
const router = useRouter(); 
const { id } = router.query;
    return(
        <>
        {userId === idCreator ? (
              <Button
                color="primary"
                variant="contained"
                className={classes.cotizar}
                onClick={handleCotizar}
              >
                Ver cotizaciones
              </Button>
            ) : id !== undefined ? (
              <Button
                color="primary"
                variant="contained"
                fullWidth
                className={classes.cotizar}
                onClick={handleCotizar}
              >
                {numeroCotizaciones+ ' Cotizaciones'}
              </Button>
            ) : (
              userRole >1 ? <Button
              color={cotizacionCreada ? 'primary': 'secondary'}
              variant="contained"
              fullWidth
              className={classes.cotizar}
              onClick={handleCotizar}
            >
              {cotizacionCreada ? "Ya Cotizaste" : "Cotiza ya!"}
            </Button>
            :
            <Button
              color={cotizacionCreada ? 'primary': 'secondary'}
              fullWidth
              variant="outlined"
              className={classes.cotizar}
              onClick={()=>router.push("/form")}
            >
              Crea tu cotizacion
            </Button>
            )}
        </>
    )
}