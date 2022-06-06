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

  let vis;
  setTimeout(()=>{
    clearTimeout(vis)
    setVisible(false)
  },10000)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
    setTimeout(() => {
     vis =  setVisible(true)
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
                <p>Some text in the Modal..</p>
              </div>
            </div>}
            {/* <Paper className={classes.paper2} elevation={3}>
              <Typography
                className={classes.typo}
                style={{ fontSize: "14px", color: "white" }}
              >
                Bienvenido a colMotors
              </Typography>

              <br />
            </Paper> */}
          </div>
        </Container>
      </Grow>
      {/* :
      <h2>  CREAR PAGINA DE REDIRECCION</h2>
      } */}
    </>
  );
}
