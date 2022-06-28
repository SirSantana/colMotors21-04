import { TextField } from "@material-ui/core";
import { useState } from "react";
import MenuLogos from "../../../utils/MenuLogos/MenuLogos";
import useStyles from "./styles";



export default function FormAddVehiculos(){
  const [marcaa, setMarca] = useState(null);
  const classes = useStyles()

    return(
        <>
        <form style={{display:'flex',flexDirection:'column',  gap:'20px'}}>
        <MenuLogos marca={marcaa} setMarca={setMarca}/>
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              // value={postData.referencia}
            //   onChange={handleChange}
              minRows={1}
        />
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              // value={postData.referencia}
            //   onChange={handleChange}
              minRows={1}

        />
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              // value={postData.referencia}
            //   onChange={handleChange}
              minRows={1}

        />
        <TextField
              name="referencia"
              label="Coloca aquí la Referencia/Modelo.(Corsa 1.3 Modelo 96)"
              variant="outlined"
              fullWidth
              // value={postData.referencia}
            //   onChange={handleChange}
              minRows={1}

        />

        </form>
        </>
    )
}