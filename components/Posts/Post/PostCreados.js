import {
  Card,
  Button,
  Typography,
  Divider,
  CardHeader,
  Avatar,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import FormCotizacion from "../../FormCotizacion/FormCotizacion";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Check, Close, Error } from "@material-ui/icons";
import SentimentVeryDissatisfied from "@material-ui/icons/SentimentVeryDissatisfied";
import SentimentVerySatisfied from "@material-ui/icons/SentimentVerySatisfied";

export default function PostCreador({ OnePost }) {
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
  const [visiCoti, setVisiCoti] = useState(true);

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

  let cotiza = OnePost?.cotizaciones;
  let arrayCotizaciones = [];
  let cotizacionCreada;
  if (cotiza.length > 0) {
    arrayCotizaciones.push(cotiza?.split(","));
  }
  if (OnePost.cotizaciones.length > 0) {
    cotizacionCreada = user?.result?.cotizaciones?.find(
      (ele) => ele == arrayCotizaciones[0]?.find((item) => item == ele)
    );
  }

  // let cotizacionesCliente;
  // if(OnePost.cotizaciones.length > 0  ){
  //   cotizacionesCliente = One
  // }

  const handleIr = () => {
    setVisiCoti(false);
    if (arrayCotizaciones.length >= 1 && cotizacionCreada === undefined) {
      router.push({
        pathname: `/cotizaciones/${arrayCotizaciones[0]}`,
        query: {
          idd: OnePost._id,
        },
      });
    } else {
      router.push({
        pathname: `/cotizaciones/${cotizacionCreada}`,
        query: {
          idd: OnePost._id,
          cliente: "vendedor",
        },
      });
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.card}>
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

            <Button
              color="primary"
              variant="contained"
              className={classes.cotizar}
              onClick={handleCotizar}
            >
              Mira las Cotizaciones
            </Button>
          </Card>
        </div>
      </div>

      {/* </a> */}
      {/* </Link> */}
    </>
  );
}
