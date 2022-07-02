import {
    Container,
    Typography,
    Grow,
    Grid,
    Paper,
    AppBar,
    Button,
  } from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import Link from "next/link";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import { Refresh, Error } from "@material-ui/icons";
import { useEffect, useState } from "react";
import Vehiculos from "../MenuPerfil/Perfil/Vehiculos";
import PostCard from "../../utils/PostCard/postCard";


export default function HomeCliente({user}){
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;

 
    return(
        <>
        {/* <div className={classes.divv1}>
          <div className={classes.divv2}>
          <Vehiculos userMarca={user?.result.marca} owner={user?.result._id}/>
          </div>
          <div className={classes.divv3} style={{}}>
            {posts?.map((Post)=>(
                <PostCard Post={Post} User={user}/>
              )
          )}
          </div>
          <div className={classes.divv4}>
          <Form  user={user} />
          </div>


        </div> */}

         {user?.result?.role?.length===1 &&
         <Container className={classes.container2} maxWidth="lg">
           <Grid
           spacing={2}
             container
             className={classes.gridContainer}
           >
             <Grid item xs={12} sm={6} md={9}>
               <Paper raised="true" elevation={6} className={classes.card1}>
                 <Typography className={classes.typography} style={{lineHeight:'20px'}}>
                   {id ? "Tus Cotizaciones" : "Cotizaciones de la comunidad"}
                 </Typography>
                 <Link href={"/home"}>
                   <a>
                     <Refresh fontSize="medium" />
                   </a>
                 </Link>
               </Paper>
                 <Posts user={user}/>
 
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
               <Form  user={user} />
             </Grid>
           </Grid>
         </Container>
         }
        </>
    )
}