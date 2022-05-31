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
import { useDispatch, useSelector } from "react-redux";
import { Axios } from "axios";
import Buscador from "../Navbar/Buscador";


  export default function HomeComponent({createPosts, posts}) {
    const classes = useStyles();
    const [user, setUser] = useState(null)
    const dispatch = useDispatch()

      console.log(posts);
    useEffect(()=>{
      setUser(JSON.parse(localStorage.getItem('profile')))
    },[])
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
              <Posts posts={posts} />
            </Grid>
            <Grid item xs={12} sm={6} md={3} style={{paddingTop:'10px'}}>
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

  