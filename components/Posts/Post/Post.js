import { Card, Button, Typography, Divider, CardHeader, Avatar } from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import FormCotizacion from "../../FormCotizacion/FormCotizacion";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import Image from "next/image";
import moment from "moment";
import { useDispatch } from "react-redux";
import iconCar from '../../../public/images/favicon.ico.png'
export default function PostCo({ OnePost, createCotizacion }) {
  const classes = useStyles();
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [message, setMessage] = useState(null);
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter();
  const nombreCreador = OnePost?.nombreCreador?.toString();
  const [user, setUser]= useState(null)
  const dispatch = useDispatch()



  const { id } = router.query;
  const idCreator = OnePost?.creator;

  const handleDelete = () => {
    deletePost(OnePost._id);
  };

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
  
  const handleCotizar = (e) => {
    setCotizar(cotizar ? false : true);
    if (user?.result) {
      router.push(`/posts/${OnePost._id}`);
    } else {
      router.push("/auth");
    }
  };
  useEffect(() => {

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [OnePost]);
  
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
            {/* <PostHeader OnePost={OnePost} /> */}
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

            <PostContent OnePost={OnePost} />

            <PostActions
              user={user}
              OnePost={OnePost}
              setVisibleDelete={setVisibleDelete}
            />

            {user?.result?._id === idCreator ? (
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
                3 Vendedores ya cotizaron!
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

        {/* {user?.result._id !== OnePost.creator ? id !== undefined ? (
          <div className={classes.cotizarr}>
            {id !== undefined && (
              <FormCotizacion user={user} OnePost={OnePost}  createCotizacion={createCotizacion}/>
            )}
          </div>
        ) : (
          <div>
            {id !== undefined && (
              <FormCotizacion user={user} OnePost={OnePost} createCotizacion={createCotizacion}/>
            )}
          </div>
        )
        : null
        } */}

        {user?.result._id !== OnePost.creator 
        ? id !== undefined ?
          OnePost ?
          <h2>Ya cotizaste</h2>
          :
          <div className={classes.cotizarr}>
              <FormCotizacion user={user} OnePost={OnePost}  createCotizacion={createCotizacion}/>
          </div>
          :null
        : null
        }
      </div>

      {/* </a> */}
      {/* </Link> */}
    </>
  );
}
