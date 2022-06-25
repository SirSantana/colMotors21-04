import { Add } from "@material-ui/icons";
import useStyles from "../components/MenuPerfil/Perfil/stylesCliente.js";

export default function AssestsUser({ image, text }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container9}>
        {image === null ? (
          <img
            src={`${image}?.png`}
            alt={image}
            style={{
              height: "30%",
              width: "30%",
              margin: "25px 35px 5px 35px",
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
