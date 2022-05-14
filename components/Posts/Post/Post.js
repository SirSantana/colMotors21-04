import { Card, Button, Typography, Divider, CardHeader, Avatar, Paper, ButtonBase } from "@material-ui/core";
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
import { Check, Close, Error } from "@material-ui/icons";



export default function PostCo({ OnePost }) {
  const classes = useStyles();
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [message, setMessage] = useState(null);
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState(null)
  const nombreCreador = OnePost?.nombreCreador?.toString();
  const dispatch = useDispatch()



  const { id } = router.query;
  const idCreator = OnePost?.creator;
  console.log(idCreator);
  console.log(user);

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
  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
  return (
    <>
      {visibleDelete === true && (
        <>

          <Paper className={classes.paper2} elevation={3}>
          <Error style={{paddingRight:'10px'}}/>
        <Typography className={classes.typo} style={{fontSize:'14px', color:'white'}}>Esta seguro que quiere eliminar esta cotizacion?</Typography>
       <br/>
       <Button variant='contained' style={{marginRight:'10px'}} onClick={() => setVisibleDelete(false)}><Close fontSize='medium'/></Button>
        <Button variant='outlined'  color='primary' onClick={handleDelete}><Check fontSize='medium' /></Button>

    </Paper>
          
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
        } */}

        {user?.result._id !== OnePost.creator 
        ? id !== undefined ?
          OnePost ?
          <h2>Ya cotizaste</h2>
          :
          <div className={classes.cotizarr}>
              <FormCotizacion user={user} OnePost={OnePost}/>
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
