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
import PostPreguntas from '../MiCuenta/PostPreguntas'

export default function MiCuenta() {
  const {posts} = useSelector(state=> state.posts)
  const classes = useStyles();
  const [user, setUser] = useState(null)
  const userId = user?.result?._id ;
  const findPosts = posts?.filter((post) => post.creator[0] === userId);

  
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
  console.log(user);
  console.log(findPosts);
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
      <Grid container spacing={2}>
        
            <Grid item xs>
               <Grid className={classes.grid} >
              {findPosts.map((post) => (
                <PostPreguntas post={post} key={post._id} />
              ))}
            </Grid> 
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


// export async function getServerSideProps({params}){
//   console.log(params);
//   try {
//     await DBConnect();
//     const res = await userModel.findById(params.id);
//     const quest = res.toObject();
//     quest._id = quest._id.toString();
//     return {
//       props: { quest },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }