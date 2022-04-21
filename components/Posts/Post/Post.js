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
import { FavoriteBorder } from "@material-ui/icons/";
import { useEffect, useState } from "react";
import moment from "moment";
import useStyles from "./styles";
import { useRouter } from "next/router";
import logoChevrolet from '../../../public/images/LOGO_CHEVROLET.png'


export default function PostCo({ Post }) {
  const classes = useStyles();
  const { marca, repuesto, selectedFile, date, likes } = Post;
  const [user, setUser] = useState(null);
  const [imagen, setImagen] = useState(false);
  // const dispatch = useDispatch();
  const router = useRouter();
  const idCreator = Post?.creator[0];
  const nombreCreador = Post?.nombreCreador.toString();

  const handleFavorite = (e) => {
    // dispatch(favoritePost(Post._id));
  };
  const handleDelete = () => {
    // dispatch(deletePost(Post._id));
    router.push("/postEliminado");
  };
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
      <Card sx={{ maxWidth: 345 }} className={classes.card} elevation={2}>
        <CardHeader
          className={classes.header}
          avatar={
            <Avatar src={'/images/LOGO_CHEVROLET.png'} className={classes.purple} alt={Post?.marca}>
              {nombreCreador?.substr(0, 1)}
            </Avatar>
          }
          title={marca}
          subheader={moment(date).fromNow()}
        />
        <Divider></Divider>

        <CardContent>
          <Typography variant="body2">{repuesto}</Typography>
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
        <CardActions disableSpacing>
          <Button
            size="small"
            disabled={!user?.result}
            onClick={handleFavorite}
          >
            {/* <Likes /> */}
          </Button>
          <IconButton aria-label="share">
            <Share />
          </IconButton>

          {user?.result?._id === idCreator && (
            <Button size="small" onClick={handleDelete}>
              <Delete fontSize="small" />
            </Button>
          )}
        </CardActions>

        {user?.result._id === idCreator ? (
          <Button
            color="primary"
            variant="contained"
            className={classes.cotizar}
            fullWidth
            onClick={handleCotizar}
          >
            Mira las Cotizaciones
          </Button>
        ) : (
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            onClick={handleCotizar}
          >
            Cotiza Ya!
          </Button>
        )}
      </Card>
    </>
  );
}
