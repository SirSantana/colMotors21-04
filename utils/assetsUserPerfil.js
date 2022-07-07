import { Add } from "@material-ui/icons";
import useStyles from "../components/MenuPerfil/Perfil/stylesCliente.js";

export default function AssestsUser({ image, text, setVisibleEdit }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container9} >
        {image !== "icono" ? (

          <img
            src={`${image}.png`}
            onClick={()=> setVisibleEdit(true)}
            alt={image}
            style={{
              height: "30%",
              width: "30%",
              margin: "25px 35px 5px 35px",
              cursor:'pointer'
            }}
          />

        ) : (

          <Add
            fontSize="large"
            style={{
              heigth: "90px",
              color: "#f1f1f1",
              margin: "25px 32px 5px 32px",
            }}
          />

        )}
    
        <h5 className={classes.texto5} style={{ margin: "0",lineHeight:'12px', }}>
          {text}
        </h5>
      </div>
    </>
  );
}
