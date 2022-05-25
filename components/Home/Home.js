import {
    Container,
    Typography,
    Grow,
    Grid,
    Paper,
    AppBar,
  } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
import Link from 'next/link'
import { getPosts } from "../../reducers/Actions/postActions";
import { useDispatch } from "react-redux";


  export default function HomeComponent({createPosts}) {
    const classes = useStyles();
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('profile')))
      dispatch(getPosts())
    },[dispatch])
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
    
            <Grid item xs={12} sm={6} md={9}  >
              {/* <AppBar
                className={classes.appBarSearch}
                position="static"
                color="primary"
              >
                
              </AppBar>     */}
              <Paper raised="true" elevation={6} className={classes.card1}>
                <Typography className={classes.typography}>
                  Cotizaciones 
                </Typography>
                <Link href={'/home'}>
                <a>
                <Refresh fontSize="medium"/>
                </a>
                </Link>
                
              </Paper>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Form createPosts={createPosts} user={user}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
      {/* :
      <h2>  CREAR PAGINA DE REDIRECCION</h2>
      } */}
      </>
    );
  }

  