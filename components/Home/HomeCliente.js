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
import PrevPosts from "../Posts/Post/PrevPosts";


export default function HomeCliente({user, posts, createPosts}){
  const classes = useStyles();
  const router = useRouter();

  const { id } = router.query;
    return(
        <>
         {user?.result?.role?.length===1 &&
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
                 <Typography className={classes.typography} style={{lineHeight:'20px'}}>
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
             <Grid item xs={12} sm={6} md={9} style={{ paddingTop: "10px" }}>
               <Form createPosts={createPosts} user={user} />
             </Grid>
           </Grid>
         </Container>
         }
        </>
    )
}