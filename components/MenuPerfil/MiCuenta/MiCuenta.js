import {
  Grid,
  Paper,
  Typography,
  ButtonBase,
  CardMedia,
  Button,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import PostPreguntas from './PostPreguntas'

export default function MiCuenta({ Posts}) {
  const classes = useStyles();
  const [user, setUser] = useState(null)
  const userId = user?.result?._id;
  const findPosts = Posts?.filter((post) => post.creator === userId);

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
  return (
    <>
        <Paper className={classes.section} >
          <Typography variant="h5" component="h2" className={classes.navbar}>
            Mis Preguntas
          </Typography>
        </Paper>

      {findPosts?.length > 0 
      ? 
      <Paper className={classes.container} sx={{ p: 2, margin: 'auto', maxWidth: 900, flexGrow: 1 }}>
      <Grid container spacing={2} className={classes.grid}>
        
            <Grid item xs>
              {findPosts.map((post) => (
                <PostPreguntas post={post} key={post._id} />
              ))}
        </Grid>
      </Grid>
    </Paper>
      
      :<Paper style={{maxWidth: 430, display: 'flex'}} sx={{ p: 2, margin: 'auto', maxWidth: 300, flexGrow: 1 }} elevation={6}>
        <Typography style={{marginRight: '22px'}} gutterBottom variant="subtitle1" component="div">
            <strong>Aún no has hecho la primera cotizacion</strong></Typography>
            <Button color='primary' variant='contained'>Cotiza aquí</Button>
      </Paper>
      }
      
            
    </>
  );
}


