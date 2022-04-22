import {
    Container,
    Typography,
    Grow,
    Grid,
    Paper,
    AppBar,
  } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import useStyles from "./styles";
  
  export default function HomeComponent({user, Postss}) {
    const router = useRouter()
    const classes = useStyles();

    
    
   
    
  
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
            <Grid item xs={12} sm={6} md={9} >
              {/* <AppBar
                className={classes.appBarSearch}
                position="static"
                color="primary"
              >
                
              </AppBar>     */}
              <Paper  raised="true" elevation={6} className={classes.card1}>
                <Typography className={classes.typography}>
                  Cotizaciones 
                </Typography>
              </Paper>
              <Posts Postss={Postss}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Form/>
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