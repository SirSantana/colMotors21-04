import Link from "next/link";

import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Divider,
  IconButton,
  Avatar,
  CardHeader,
} from "@material-ui/core";
import Share from "@material-ui/icons/Share";
import Delete from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";
import { FavoriteBorder } from "@material-ui/icons";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import Build from "@material-ui/icons/Build";
import Person from "@material-ui/icons/Person";
import Place from "@material-ui/icons/Place";
import styles from '../../../styles/Button.module.css'

import { useEffect, useState } from "react";
import moment from "moment";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


export default function PostCo({OnePost}) {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [imagen, setImagen] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false)
  const [message, setMessage] = useState(null)

  // const dispatch = useDispatch();
  const router = useRouter();
  const idCreator = OnePost?.creator;
  const nombreCreador = OnePost?.nombreCreador?.toString();

  const handleDelete=()=>{
    deletePost(OnePost._id)
  }

  async function deletePost(id){
    try {
      const res = await fetch(`/api/posts/${id}`,
      {
        method:'DELETE',
        headers:{'Content-type': 'application/json'},
        // body: JSON.stringify(id)
      })
       if(res){
        router.push("/home")
        setMessage('Eliminado correctamente')
       }
        
    } catch (error) {
      console.log(error);
    }
  }
  const handleFavorite = (e) => {
    // dispatch(favoritePost(Post._id));
  };
  // const handleDelete = () => {
  //   dispatch({type: DELETE});
  //   router.push("/postEliminado");
  // };
  const handleCotizar = (e) => {
    if (user?.result) {
      router.push(`/posts/${OnePost._id}`);
    } else {
      router.push("/auth");
    }
  };

  // const Likes = () => {
  //   if (Post.favorites.length > 0) {
  //     return Post.favorites.find(
  //       (favorite) => favorite === user?.result?._id
  //     ) ? (
  //       <>
  //         <FavoriteIcon fontSize="small" />
  //         &nbsp;
  //         {Post.favorites.length > 2
  //           ? `Tu y  ${Post.favorites.length - 1} mas`
  //           : `${Post.favorites.length} ${Post.favorites.length > 1 ? "" : ""}`}
  //       </>
  //     ) : (
  //       <>
  //         <FavoriteBorderIcon fontSize="small" />
  //         &nbsp;{Post.favorites.length} {Post.favorites.length === 1 ? "" : ""}
  //       </>
  //     );
  //   }

  //   return (
  //     <>
  //       <FavoriteBorderIcon fontSize="small" />
  //       &nbsp;
  //     </>
  //   );
  // };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <>
    {visibleDelete === true &&
    <>
    <Card sx={{ maxWidth: "320px" }}  className={classes.card1} elevation={2}>
    <Typography variant="body1">Esta seguro que quiere eliminar esta cotizacion?</Typography>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <Button variant="contained" color='secondary' onClick={handleDelete}>Si</Button>
      <Button variant="contained" color='primary' onClick={()=> setVisibleDelete(false)}>Cancelar</Button>
      </div>
    </Card>
      
      </>
       }
       {/* <Link href={`/posts/${Post._id}`}> */}
       {/* <a> */}
       <Card sx={{ maxWidth: 345 }} className={classes.card} elevation={2}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              src={`/images/${OnePost?.marca}.png`}
              className={classes.purple}
              alt={OnePost?.marca}
            >
              {nombreCreador?.substr(0, 1)}
            </Avatar>
          }
          title={OnePost?.referencia}
          classes={{ subheader: classes.subheader, title: classes.title }}
          subheaderTypographyProps={{ variant: "body2" }}
          subheader={moment(OnePost?.date).fromNow()}
        />
        <Divider></Divider>

        <CardContent style={{ width:'90%', display:'flex', flexDirection:'column',gap:'10px' }}>
          <div style={{ display: "flex", flexDirecction: "row",alignItems:'center', }}>
            {/* <Person style={{color: '#1b333d'}}/>
            <Typography
              style={{ marginLeft: "5px" }}
              className={classes.typography}
            >
              {nombreCreador}
            </Typography> */}
            <Avatar
             className={classes.purple2}
             alt={OnePost?.creador}
             >
              {nombreCreador?.substr(0, 1)}

            </Avatar>
            <Typography
              style={{ marginLeft: "5px" }}
              className={classes.typography}
            >
              {nombreCreador}
            </Typography> 
          </div>
          <div style={{ display: "flex", flexDirecction: "row", alignItems:'center',  }}>
            <Build style={{color: '#1b333d'}}/>
            <Typography
              style={{ marginLeft: "5px" }}
              className={classes.typography1}
            >
              {OnePost?.repuesto}
            </Typography>
          </div>
          {OnePost?.selectedFile ? (
            <Button
              className={classes.button}
              color={imagen ? "secondary" : "primary"}
              variant="contained"
              onClick={() => (imagen ? setImagen(false) : setImagen(true))}
            >
              {imagen ? "X" : "Revisa la foto"}
            </Button>
          ) : null}
          {imagen ? (
            <>
              <CardMedia className={classes.media} image={OnePost?.selectedFile} />
            </>
          ) : null}
          
        </CardContent>
        <CardActions style={{width:'90%', paddingLeft:'16px', paddingBottom:'5px'}}>
          <div style={{ display: "flex", flexDirecction: "row",alignItems:'center',}}>
            <Place style={{color: '#1b333d'}}/>
            <Typography
              style={{ marginLeft: "5px" }}
              variant="body1"
            >
              {OnePost?.lugar}
            </Typography>
          </div>
          {/* <Button
            size="small"
            disabled={!user?.result}
            onClick={handleFavorite}
          > */}
            {/* <Likes /> */}
          {/* </Button> */}
          {/* <IconButton aria-label="share">
            <Share />
          </IconButton> */}

          {user?.result?._id === idCreator && (
            <Link href={`/posts/${OnePost?._id}`}>
            <a>
            <Button size="small" onClick={()=> setVisibleDelete(true)}>
              <Delete fontSize="small" />
            </Button>
            </a>
            </Link>
          )}
        </CardActions>

        {user?.result._id === idCreator ? (
          <Button
            color="primary"
            variant="contained"
            className={classes.cotizar}
            onClick={handleCotizar}
          >
            Mira las Cotizaciones
          </Button>
        ) : (
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            className={classes.cotizar}

            onClick={handleCotizar}
          >
            Cotiza Ya!
          </Button>
        )}
      </Card>

       {/* </a> */}
       {/* </Link> */}
      
    </>
  );
}
