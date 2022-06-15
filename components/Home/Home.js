import {
  Container,
  Typography,
  Grow,
  Grid,
  Paper,
  AppBar,
  Button,
} from "@material-ui/core";
import { Refresh, Error } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import PrevPosts from "../Posts/Post/PrevPosts";
import { handleLogout } from "../../utils/handleLogout";

export default function HomeComponent({ createPosts, posts }) {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  // let vis;
  // setTimeout(()=>{
  //   clearTimeout(vis)
  //   setVisible(false)
  // },10000)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
      // setTimeout(() => {
      //   vis = setVisible(true)
      //  },1000);
  }, []);

  return (
    <>
      {/* {user? */}
      {user?.result?.status === undefined && 
      <>
      <Paper style={{display:'flex', width:'300px',flexDirection:'column', height:'fit-content', justifyContent:'center', alignItems:'center', padding:'10px', marginBottom:'10px'}} elevation={3}>
          <div style={{display:'flex', width:'300px',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
          <Error style={{ paddingRight: "10px", color:'#f50057' }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "16px", color: "black", marginRight: "8px" }}
          >
            Ingresa a tu correo y valida la cuenta
          </Typography>

          </div>
          <Button variant="contained" color='secondary' onClick={()=> handleLogout(setUser, router,dispatch)}>
            Ya la valide
          </Button>
        </Paper>
      
      </>}
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
        </Container>
      </Grow>
    </>
  );
}
