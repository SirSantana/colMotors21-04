import { Card, Button, Typography, Divider } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import FormCotizacion from "../../FormCotizacion/FormCotizacion";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import Image from "next/image";

export default function PostCo({ OnePost }) {
  console.log(OnePost);
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [message, setMessage] = useState(null);
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter();

  const { id } = router.query;
  // const dispatch = useDispatch();
  const idCreator = OnePost?.creator;

  const handleDelete = () => {
    deletePost(OnePost._id);
  };
  console.log("Render");

  async function deletePost(id) {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        // body: JSON.stringify(id)
      });
      if (res) {
        router.push("/home");
        setMessage("Eliminado correctamente");
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
    setCotizar(cotizar ? false : true);
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
      {visibleDelete === true && (
        <>
          <Card
            sx={{ maxWidth: "300px" }}
            className={classes.card1}
            elevation={2}
          >
            <Typography variant="body1">
              Esta seguro que quiere eliminar esta cotizacion?
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDelete}
              >
                Si
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setVisibleDelete(false)}
              >
                Cancelar
              </Button>
            </div>
          </Card>
        </>
      )}

      <div className={classes.container}>
        <div className={classes.card}>
          {id !== undefined && (
            <div className={classes.header1}>
              <Typography gutterBottom className={classes.typo}>
                {user?.result._id === idCreator ? <b>Tu Cotización</b> : <b>Cotización Cliente</b>}
                
              </Typography>
            </div>
          )}

          <Card sx={{ width: "345px" }} className={classes.card} elevation={2}>
            <PostHeader OnePost={OnePost} />

            <Divider></Divider>

            <PostContent OnePost={OnePost} />

            <PostActions
              user={user}
              OnePost={OnePost}
              setVisibleDelete={setVisibleDelete}
            />

            {user?.result._id === idCreator ? (
              <Button
                color="primary"
                variant="contained"
                className={classes.cotizar}
                onClick={handleCotizar}
              >
                Mira las Cotizaciones
              </Button>
            ) : id !== undefined ? (
              <Button
                color="primary"
                variant="contained"
                fullWidth
                className={classes.cotizar}
              >
                3 Vendedores ya cotizaron
              </Button>
            ) : (
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                className={classes.cotizar}
                onClick={handleCotizar}
              >
                Cotiza ya!
              </Button>
            )}
          </Card>
        </div>

        {user?.result._id !== OnePost.creator ? id !== undefined ? (
          <div className={classes.cotizarr}>
            {id !== undefined && (
              <FormCotizacion user={user} OnePost={OnePost} />
            )}
          </div>
        ) : (
          <div>
            {id !== undefined && (
              <FormCotizacion user={user} OnePost={OnePost} />
            )}
          </div>
        )
        : null
        }
      </div>

      {/* </a> */}
      {/* </Link> */}
    </>
  );
}
