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
import logoChevrolet from "../../../public/images/LOGO_CHEVROLET.png";
import { DELETE } from "../../../reducers/types";

export default function PostCo({ Post, setDelete}) {
  const classes = useStyles();
  const { marca, repuesto, selectedFile, date, likes } = Post;
  const [user, setUser] = useState(null);
  const [imagen, setImagen] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false)


  // const dispatch = useDispatch();
  const router = useRouter();
  const idCreator = Post?.creator[0];
  const nombreCreador = Post?.nombreCreador.toString();

  const handleFavorite = (e) => {
    // dispatch(favoritePost(Post._id));
  };
  // const handleDelete = () => {
  //   dispatch({type: DELETE});
  //   router.push("/postEliminado");
  // };
  const handleCotizar = (e) => {
    if (user?.result) {
      router.push(`/posts/${Post._id}`);
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
      <Button variant="contained" color='secondary' onClick={()=> setDelete(true)}>Si</Button>
      <Button variant="contained" color='primary' onClick={()=> setVisibleDelete(false)}>Cancelar</Button>
      </div>
    </Card>
      
      </>
       }
      <Card sx={{ maxWidth: 345 }} className={classes.card} elevation={2}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar
              src={"/images/LOGO_CHEVROLET.png"}
              className={classes.purple}
              alt={Post?.marca}
            >
              {nombreCreador?.substr(0, 1)}
            </Avatar>
          }
          title={marca}
          classes={{ subheader: classes.subheader, title: classes.title }}
          subheaderTypographyProps={{ variant: "body2" }}
          subheader={moment(date).fromNow()}
        />
        <Divider></Divider>

        <CardContent style={{ width:'90%', display:'flex', flexDirection:'column',gap:'10px' }}>
          <div style={{ display: "flex", flexDirecction: "row",alignItems:'center', }}>
            <Person style={{color: '#1b333d'}}/>
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
              {repuesto}
            </Typography>
          </div>
          {selectedFile ? (
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
              <CardMedia className={classes.media} image={Post.selectedFile} />
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
              Bogotá.Co
            </Typography>
          </div>
          <Button
            size="small"
            disabled={!user?.result}
            onClick={handleFavorite}
          >
            {/* <Likes /> */}
          </Button>
          {/* <IconButton aria-label="share">
            <Share />
          </IconButton> */}

          {user?.result?._id === idCreator && (
            <Link href={`/posts/${Post._id}`}>
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
    </>
  );
}
