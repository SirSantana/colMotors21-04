import {
  Card,
  Button,
  Typography,
  Divider,
  CardHeader,
  Avatar,
  Paper,
  ButtonBase,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import FormCotizacion from "../../FormCotizacion/FormCotizacion";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import Image from "next/image";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Check, Close, Error } from "@material-ui/icons";
import {
  getCotizacion,
  getCotizaciones,
} from "../../../reducers/Actions/cotizacionesActions";
import CotizacionVendedor from "./CotizacionVendedor";

export default function PostCo({ OnePost }) {
  const classes = useStyles();
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [message, setMessage] = useState(null);
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null);
  const nombreCreador = OnePost?.nombreCreador?.toString();
  const dispatch = useDispatch();
  const { id } = router.query;
  const idCreator = OnePost?.creator;


  async function deletePost(id) {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        // body: JSON.stringify(id)
      });
      if (res) {
        setMessage("Se ha eliminado correctamente");
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = () => {
    deletePost(OnePost._id);
  };

  const handleCotizar = (e) => {
    setCotizar(cotizar ? false : true);
    if (user?.result) {
      router.push(`/posts/${OnePost._id}`);
    } else {
      router.push("/auth");
    }
  };

  let cotiza = OnePost.cotizaciones;
  let arrayCotizaciones = [];
  let cotizacionCreada;
  arrayCotizaciones.push(cotiza.split(","));

  if (OnePost.cotizaciones.length > 0) {
    cotizacionCreada = user?.result?.cotizaciones?.find(
      (ele) => ele == arrayCotizaciones[0]?.find((item) => item == ele)
    );
  }
 

 console.log('OnePost', OnePost);
 console.log('user', user);
 console.log('cotizacionCreada', cotizacionCreada);
 console.log('arrayCotizaciones', arrayCotizaciones);


  // if(OnePost.cotizaciones.length > 0){
  // VERIFICAR COTIZACIONES EN POST USER Y ONEPOST
  // }



  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  },[]);

  return (
    <>
      {visibleDelete === true && (
        <>
          <Paper className={classes.paper2} elevation={3}>
            <Error style={{ paddingRight: "10px" }} />
            <Typography
              className={classes.typo}
              style={{ fontSize: "14px", color: "white" }}
            >
              {message
                ? message
                : "Esta seguro que quiere eliminar esta cotizacion?"}{" "}
            </Typography>

            <br />
            {message ? null : (
              <>
                <Button
                  variant="contained"
                  style={{ marginRight: "10px" }}
                  onClick={() => setVisibleDelete(false)}
                >
                  <Close fontSize="medium" />
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleDelete}
                >
                  <Check fontSize="medium" />
                </Button>
              </>
            )}
          </Paper>
        </>
      )}

      <div className={classes.container}>
        <div className={classes.card}>
          {id !== undefined && (
            <div className={classes.header1}>
              <Typography gutterBottom className={classes.typo}>
                {user?.result._id === idCreator ? (
                  <b>Tu Cotización</b>
                ) : (
                  <b>Cotización Cliente</b>
                )}
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
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
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
                {Math.round(OnePost.cotizaciones.length / 24)+ ' Cotizaciones'}
              </Button>
            ) : (
              <Button
                color={cotizacionCreada ? 'primary': 'secondary'}
                variant="contained"
                fullWidth
                className={classes.cotizar}
                onClick={handleCotizar}
              >
                {cotizacionCreada ? "Ya Cotizaste" : "Cotiza ya!"}
              </Button>
            )}
          </Card>
        </div>

        {user?.result._id !== OnePost.creator && !cotizacionCreada ? (
          id !== undefined ? (
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
        ) : null}

        {cotizacionCreada && id !== undefined ? (
          <div className={classes.cotizarr}>
            <CotizacionVendedor user={user} OnePost={OnePost} el={cotizacionCreada}/>
          </div>
        ) : null}
          {/* <Button variant="contained" color='secondary' onClick={()=> router.push("/home")}>Regresa</Button> */}

      </div>

      {/* </a> */}
      {/* </Link> */}
    </>
  );
}
