import {AttachMoney,Delete,} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import useStyles from "../Perfil/stylesCliente";
import { theme } from "../../../utils/theme";

export default function EsteMes({ gasolina, setVisibleEdit }) {
  const classes = useStyles();

  let galon = [];
  let kmRecorridos = [];
  let kmPrecio = [];
  if (gasolina !== undefined && gasolina.length > 1) {
    for (let i = 0; i < gasolina.length - 1; i++) {
      let kilometrosRec = gasolina[i + 1].kilometraje - gasolina[i].kilometraje;
      kmRecorridos.push(kilometrosRec);

      let precioKm = gasolina[i].dineroGastado / kilometrosRec;
      kmPrecio.push(parseFloat(precioKm.toFixed(2)));

      let galonKm = gasolina[i].dineroGastado / 9000;
      let galonDi = kilometrosRec / galonKm;
      galon.push(parseFloat(galonDi.toFixed(2)));
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
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "10px",
          }}
        >
          <AttachMoney fontSize="medium" />
          <h3 style={{ margin: 0, fontWeight: "500" }}>Total Gastado</h3>
        </div>
        {gasolina.map((el) => {
          let myDate = new Date(el.fecha);
          return (
            <>
              <div
                style={{
                  display: "flex",
                  marginBottom: "10px",
                  flexDirection: "row",
                  marginLeft: "30px",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 className={classes.texto7}>
                  {myDate.toLocaleDateString()}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ fontWeight: "500", color: "black" }}
                >
                  $. {el.dineroGastado.toString().length <= 3
                    ? el.dineroGastado + ".000"
                    : el.dineroGastado}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ color: "#f50057", fontWeight: "600" }}
                >
                  {el.tipoGasolina}
                </h4>
                <Delete />
              </div>
            </>
          );
        })}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            alignContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "30px", height: "35px" }}
              src={`/images/distance.png`}
              alt={"distancia"}
            />
            <h3 style={{ margin: 0, fontWeight: "500" }}>
              Distancia Recorrida
            </h3>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: "30px",
            }}
          >
            <section style={{ width: "33%" }}>
              {gasolina.map((el) => {
                let myDate = new Date(el.fecha);
                return (
                  <h4
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
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            alignContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "28px", height: "28px" }}
              src={`/images/Combustible.png`}
              alt={"combustible"}
            />
            <h3 style={{ margin: 0, fontWeight: "500", marginBottom:'10px' }}>Promedio Individual</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <section>
              {gasolina.map((el) => {
                let myDate = new Date(el.fecha);
                return (
                  <>
                    <div
                      style={{
                        display: "flex",
                        marginBottom: "10px",
                        flexDirection: "row",
                        marginLeft: "30px",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
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
                      className={classes.texto7}
                      style={{ fontWeight: "500", color: "black", marginBottom:'10px' }}
                    >
                      1Km/$. {el}
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
                      className={classes.texto7}
                      style={{ fontWeight: "500", color: "black", marginBottom:'10px' }}
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
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "10px",
            alignContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              style={{ width: "28px", height: "28px" }}
              src={`/images/Combustible.png`}
              alt={"combustible"}
            />
            <h3 style={{ margin: 0, fontWeight: "500", marginBottom:'10px' }}>Promedio Mensual</h3>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft:'30px',
            }}
          >
              <section style={{display:'flex', flexDirection:'row',justifyContent: "space-between",}}>
            <h4 style={{ margin:0, fontWeight: "500" }}>Kilometros Recorridos</h4>
            <h4 style={{ margin: 0, fontWeight: "500", marginBottom:'10px', color:'gray' }}>1000 Kms</h4>
              </section>

              <section style={{display:'flex', flexDirection:'row', justifyContent: "space-between",}}>
            <h4 style={{ margin:0, fontWeight: "500" }}>Dinero Gastado</h4>
            <h4 style={{ margin: 0, fontWeight: "500", marginBottom:'10px', color:'gray' }}>$ 340.000</h4>
              </section>

              <section style={{display:'flex', flexDirection:'row', justifyContent: "space-between",}}>
            <h4 style={{ margin:0, fontWeight: "500" }}>Precio por Km</h4>
            <h4 style={{ margin: 0, fontWeight: "500", marginBottom:'10px', color:'gray' }}>$ 180</h4>
              </section>

              <section style={{display:'flex', flexDirection:'row', justifyContent: "space-between",}}>
            <h4 style={{ margin:0, fontWeight: "500" }}>Kilometros por Galon</h4>
            <h4 style={{ margin: 0, fontWeight: "500", marginBottom:'10px', color:'gray' }}>2.02 Kms</h4>
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
