import { AttachMoney, CalendarToday, Delete, LocalGasStationOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { theme } from "../../../utils/theme";

export default function EsteMes({ gasolina, setVisibleEdit, setPromedio }) {
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
  console.log(date.toLocaleString("en-US", { month: "short" }));
  let fechaString = date.toLocaleString("en-US", { month: "short" })
  let gasolinaMensual = gasolina.filter(el=> el.fecha.split(" ", 2)[1] === fechaString)

  if (gasolina !== undefined && gasolina.length > 1) {
    fechaPosts = gasolina.filter(
      (el) =>
        el.fecha.split(" ", 2)[1] ===
        fechaString
    );

    for (let i = 0; i < gasolina.length - 1; i++) {
      if (
        gasolina[i].fecha.split(" ", 2)[1] ===
        fechaString
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
        setPromedio(parseFloat((totales.precioKm / gasolinaMes.length).toFixed(2)))
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
          <div style={{backgroundColor:'#f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'left'}}>
            <CalendarToday style={{color:'white', marginRight:'10px'}}/>
              <h3 className={classes.texto}>17 JULIO 2022</h3>
            </div>
            <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
                <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'white', width:'40%', alignItems:'center', padding:'10px 0'}}>
                <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'#f50057'}}/>
                <h3 className={classes.texto} style={{fontSize:'24px', color:'black'}}>$ 90.000</h3>
                <h6 className={classes.texto} style={{color:'gray',fontSize:'18px'}}>+ 23.000</h6>
                </div>
                <div style={{display:'flex', flexDirection:'column', width:'60%', alignItems:'center', justifyContent:'center'}}>
                    <h3 className={classes.texto1}>EN PROGRESO</h3>
                </div>
            </div>


          </div>
          

          <div style={{border:'1px solid #f50057', marginBottom:'20px', width:'90%',height:'fit-content',padding:'20px', display:'flex', flexDirection:'column', borderRadius:'10px'}}>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <section style={{display:'flex', flexDirection:'row'}}>
              <CalendarToday style={{ marginRight:'10px'}}/>
              <h3 className={classes.texto} style={{color:'black', fontWeight:'700'}}>17 JULIO 2022</h3>
              </section>
              <h3 className={classes.texto1} style={{color:'white', fontWeight:'600', backgroundColor:'#f50057',borderRadius:'10px', padding:'5px 12px'}}>CORRIENTE</h3>
              
            </div>
            <div style={{display:'flex', flexDirection:'row', margin:'20px 0'}}>
                <div style={{borderRadius:'10px',display:'flex', flexDirection:'column',backgroundColor:'#f50057', width:'40%', alignItems:'center', padding:'10px 0'}}>
                <LocalGasStationOutlined fontSize='large' style={{fontSize:'60px', color:'white' }}/>
                <h3 className={classes.texto} style={{fontSize:'24px'}}>$ 90.000</h3>
                <h6 className={classes.texto} style={{fontSize:'18px', fontWeight:'400'}}>+ 23.000</h6>
                </div>
                <div style={{display:'flex', flexDirection:'column', width:'60%', alignItems:'center', justifyContent:'center'}}>
                    <section style={{marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}> Distancia Recorrida</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}> 160 Kms</h3>
                    </section>
                    <section style={{marginBottom:'10px'}}>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}> Distancia Recorrida</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}> 160 Kms</h3>
                    </section>
                    <section>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'18px', fontWeight:'600'}}> Distancia Recorrida</h3>
                      <h3 className={classes.texto} style={{color:'black', fontSize:'16px',fontWeight:'400'}}> 160 Kms</h3>
                    </section>
                </div>
            </div>


          </div>




        {/* <div
          className={classes.div1}
        >
          <AttachMoney fontSize="medium" />
          <h3 style={{ margin: 0, fontWeight: "700" }}>Total Gastado</h3>
        </div>
        {gasolinaMensual.map((el) => {
          let myDate = new Date(el.fecha);
          return (
            <>
              <div key={el._id} className={classes.divs}>
                <h4 className={classes.texto7}>
                  {myDate.toLocaleDateString()}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ fontWeight: "500", color: "#f50057" }}
                >
                  ${" "}
                  {el.dineroGastado.toString().length <= 3
                    ? el.dineroGastado + ".000"
                    : el.dineroGastado}
                </h4>
                <h4
                  className={classes.texto7}
                  style={{ color: "black", fontWeight: "500" }}
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
                        color: "#f50057",
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
                        color: "#f50057",
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
                        color: "#f50057",
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
                  color: "#f50057",
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
                  color: "#f50057",
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

                  color: "#f50057",
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
                  color: "#f50057",
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
        </Button> */}
      </div>
    </>
  );
}
