import { AttachMoney, Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { theme } from "../../../utils/theme";

export default function EsteMes({ gasolina, setVisibleEdit }) {
  const classes = useStyles();

  let galon = [];
  let kmRecorridos = [];
  let kmPrecio = [];
  let date = new Date();
  let gasolinaMes = [];
  let fechaPosts;
  let totales = {
    kilometrosRecorridos: 0,
    dineroGastado: 0,
    precioKm: 0,
    kmGalones: 0,
  };

  if (gasolina !== undefined && gasolina.length > 1) {
    fechaPosts = gasolina.filter(
      (el) =>
        el.fecha.split(" ", 2)[1] ===
        date.toLocaleString("en-US", { month: "short" })
    );

    for (let i = 0; i < gasolina.length - 1; i++) {
      if (
        gasolina[i].fecha.split(" ", 2)[1] ===
        date.toLocaleString("en-US", { month: "short" })
      ) {
        gasolinaMes.push(gasolina[i]);
        let kilometrosRec =
          gasolina[i + 1].kilometraje.replace(/\./g, "") -
          gasolina[i].kilometraje.replace(/\./g, "");
        kmRecorridos.push(kilometrosRec);

        let precioKm =
          gasolina[i].dineroGastado.replace(/\./g, "") / kilometrosRec;
        kmPrecio.push(parseFloat(precioKm.toFixed(2)));

        let galonKm = gasolina[i].dineroGastado.replace(/\./g, "") / 9000;
        let galonDi = kilometrosRec / galonKm;
        gasolina[i].dineroGastado.replace(/\./g, "");
        galon.push(parseFloat(galonDi.toFixed(2)));
        totales.kilometrosRecorridos += kilometrosRec;
        totales.dineroGastado += Number(
          gasolina[i].dineroGastado.replace(/\./g, "")
        );
        totales.precioKm += precioKm;
        totales.kmGalones += parseFloat(galon);
      }
    }
  }

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <div
          className={classes.div1}
        >
          <AttachMoney fontSize="medium" />
          <h3 style={{ margin: 0, fontWeight: "700" }}>Total Gastado</h3>
        </div>
        {gasolinaMes.map((el) => {
          let myDate = new Date(el.fecha);
          return (
            <>
              <div key={el._id} className={classes.divs}>
                <h4 className={classes.texto7}>
                  {myDate.toLocaleDateString()}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ fontWeight: "500", color: "black" }}
                >
                  ${" "}
                  {el.dineroGastado.toString().length <= 3
                    ? el.dineroGastado + ".000"
                    : el.dineroGastado}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ color: "#f50057", fontWeight: "500" }}
                >
                  {el.tipoGasolina}
                </h4>
                <Delete />
              </div>
            </>
          );
        })}
        <div
          className={classes.divColumn}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "30px", height: "35px" }}
              src={`/images/distance.png`}
              alt={"distancia"}
            />
            <h3 style={{ margin: 0, fontWeight: "700" }}>
              Distancia Recorrida
            </h3>
          </div>

          <div className={classes.divs}>
            <section style={{ width: "33%" }}>
              {gasolinaMes.map((el) => {
                let myDate = new Date(el.fecha);
                return (
                  <h4
                    key={el._id}
                    className={classes.texto7}
                    style={{ marginBottom: "10px" }}
                  >
                    {myDate.toLocaleDateString()}
                  </h4>
                );
              })}
            </section>
            <section>
              {kmRecorridos.map((el) => {
                return (
                  <>
                    <h4
                      key={el._id}
                      className={classes.texto7}
                      style={{
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "10px",
                      }}
                    >
                      {el} Kilometros
                    </h4>
                  </>
                );
              })}
            </section>
          </div>
        </div>

        <div
         className={classes.divColumn}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "28px", height: "28px" }}
              src={`/images/Combustible.png`}
              alt={"combustible"}
            />
            <h3 style={{ margin: 0, fontWeight: "700", marginBottom: "10px" }}>
              Promedio Individual
            </h3>
          </div>
          <div
          className={classes.div1}
            style={{ justifyContent: "space-between", }}
          >
            <section>
              {gasolinaMes.map((el) => {
                let myDate = new Date(el.fecha);
                return (
                  <>
                    <div key={el._id} className={classes.divs}>
                      <h4 className={classes.texto7}>
                        {myDate.toLocaleDateString()}
                      </h4>
                    </div>
                  </>
                );
              })}
            </section>
            <section>
              {kmPrecio.map((el) => {
                return (
                  <>
                    <h4
                      key={el._id}
                      className={classes.texto7}
                      style={{
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "10px",
                      }}
                    >
                      1Km/$ {el}
                    </h4>
                  </>
                );
              })}
            </section>
            <section>
              {galon.map((el) => {
                return (
                  <>
                    <h4
                      key={el._id}
                      className={classes.texto7}
                      style={{
                        fontWeight: "500",
                        color: "black",
                        marginBottom: "10px",
                      }}
                    >
                      1gl/{el} Kms
                    </h4>
                  </>
                );
              })}
            </section>
          </div>
        </div>

        <div
          className={classes.divColumn}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "28px", height: "28px" }}
              src={`/images/Combustible.png`}
              alt={"combustible"}
            />
            <h3 style={{ margin: 0, fontWeight: "700", marginBottom: "10px" }}>
              Promedio Mensual
            </h3>
          </div>
          <div className={classes.div2}>
            <section
            className={classes.div1}
              style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Kilometros Recorridos
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                {totales.kilometrosRecorridos} Kms
              </h4>
            </section>

            <section
              className={classes.div1}
              style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Dinero Gastado
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                $ {totales.dineroGastado}
              </h4>
            </section>

            <section
             className={classes.div1}
             style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Precio por Km
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  fontWeight: "500",
                  marginBottom: "10px",

                  color: "black",
                }}
              >
                ${" "}
                {parseFloat((totales.precioKm / gasolinaMes.length).toFixed(2))}
              </h4>
            </section>

            <section
              className={classes.div1}
              style={{ justifyContent: "space-between", marginBottom:0 }}
            >
              <h4
                className={classes.texto7}
                style={{ margin: 0, fontWeight: "500" }}
              >
                Kilometros por Galon
              </h4>
              <h4
                className={classes.texto7}
                style={{
                  margin: 0,
                  fontWeight: "500",
                  marginBottom: "10px",
                  color: "black",
                }}
              >
                {parseFloat(
                  (totales.kmGalones / gasolinaMes.length).toFixed(2)
                )}{" "}
                Kms
              </h4>
            </section>
          </div>
        </div>

        <Button
          onClick={() => setVisibleEdit(true)}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Editar
        </Button>
      </div>
    </>
  );
}
