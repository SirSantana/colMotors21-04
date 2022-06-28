import { TextField } from "@material-ui/core";
import { useState } from "react";
import MenuLogos from "../../../utils/MenuLogos/MenuLogos";



export default function FormAddVehiculos(){
  const [marcaa, setMarca] = useState(null);

    return(
        <>
        <form>
        <MenuLogos marca={marcaa} setMarca={setMarca}/>
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              value={postData.referencia}
              onChange={handleChange}
              multiline
              minRows={2}
              className={classes.card}
        />
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              value={postData.referencia}
              onChange={handleChange}
              multiline
              minRows={2}
              className={classes.card}
        />
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              value={postData.referencia}
              onChange={handleChange}
              multiline
              minRows={2}
              className={classes.card}
        />
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              value={postData.referencia}
              onChange={handleChange}
              multiline
              minRows={2}
              className={classes.card}
        />

        </form>
        </>
    )
}