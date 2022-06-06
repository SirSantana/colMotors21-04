import {
  Container,
  Typography,
  Grow,
  Grid,
  Paper,
  AppBar,
  Button,
} from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import PrevPosts from "../Posts/Post/PrevPosts";

export default function HomeComponent({ createPosts, posts }) {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const [visible, setVisible] = useState(false)
  const [visibleMo2, setVisibleMo2] = useState(false)
  const [visibleMo3, setVisibleMo3] = useState(false)


  let vis;
  // setTimeout(()=>{
  //   clearTimeout(vis)
  //   setVisible(false)
  // },10000)

  const handleChangeModal=(e)=>{
    clearInterval(vis)
    setVisible(false)
    setVisibleMo2(true)

  }


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    setTimeout(() => {
     vis = setVisible(true)
    },1000);
  }, []);

  

 
  return (
    <>
      {/* {user? */}
      <Grow in>
        <Container className={classes.container} maxWidth="lg">
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={8}
            className={classes.gridContainer}
          >
            <Grid item xs={12} sm={6} md={9}>
              {/* <AppBar
                className={classes.appBarSearch}
                position="static"
                color="primary"
              >
                
              </AppBar>     */}
              <Paper raised="true" elevation={6} className={classes.card1}>
                <Typography className={classes.typography}>
                  {id ? "Tus Cotizaciones" : "Cotizaciones de la comunidad"}
                </Typography>
                <Link href={"/home"}>
                  <a>
                    <Refresh fontSize="medium" />
                  </a>
                </Link>
              </Paper>
              {id ? (
                <PrevPosts posts={posts} />
              ) : (
                <Posts posts={posts} user={user} />
              )}

              {id && (
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: "20px" }}
                  onClick={() => router.push("/home")}
                >
                  Mira las cotizaciones de la comunidad
                </Button>
              )}
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{ paddingTop: "10px" }}>
              <Form createPosts={createPosts} user={user} />
            </Grid>
          </Grid>
          <div>
            {visible && <div id="myModal" className={classes.modal}>
              <div className={classes.modalContent}>
                <span className={classes.close}>&times;</span>
                <p>Bievenido a colMotors, aqui podras cotizar tus repuestos.</p>
                <h4>Te ensañare como hacerlo, sigue los pasos</h4>
                <Button onClick={handleChangeModal} variant="contained" color="primary">Siguiente</Button>
              </div>
            </div>}
         
            {
              visibleMo2 ?
              <div div id="myModal" className={classes.modal}>
            <div className={classes.modalContent2}>
                <span className={classes.close}>&times;</span>
                <h2>Llena el formulario &rarr;</h2>
                <p>Hecha un vistazo a la derecha, ahi tienes el formulario, recuerda llenar todos los campos y ser lo mas especifico posible</p>
                <p>Y por ultimo dale click al Boton de 'Cotiza'</p>
                <Button onClick={()=> {setVisibleMo2(false), setVisibleMo3(true)}} variant="contained" color="primary">Siguiente</Button>
              </div>
            </div>
            :null
            }
             {
              visibleMo3 ?
              <div div id="myModal" className={classes.modal}>
            <div className={classes.modalContent}>
                <span className={classes.close}>&times;</span>
                <h2>La comunidad </h2>
                <p>Si te preguntas, qué son las cotizaciones de abajo.
                  Son las mas recientes cotizaciones de la comunidad, podras comentar o charlar
                  con esa persona 
                </p>
                <p></p>
                <Button variant="contained" onClick={()=> setVisibleMo3(false)} color="primary">Siguiente</Button>
              </div>
            </div>
            :null
            }
          </div>

            {/* <Paper className={classes.paper2} elevation={3}>
              <Typography
                className={classes.typo}
                style={{ fontSize: "14px", color: "white" }}
              >
                Bienvenido a colMotors
              </Typography>

              <br />
            </Paper> */}
        </Container>
      </Grow>
      {/* :
      <h2>  CREAR PAGINA DE REDIRECCION</h2>
      } */}
    </>
  );
}
