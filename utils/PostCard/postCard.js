import {
  Card,
  Divider,
  Paper,
  Typography,
} from "@material-ui/core";
import useStyles from "../stylesCard.js";
import PostHeader from "./postHeader.js";
import PostsContent from "./postContent.js";
import PostsActions from "./postActions.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostButton from "./postButtons.js";

export default function PostCard({ Post, User,setVisibleDelete }) {
  const classes = useStyles();
  const [cotizar, setCotizar] = useState(false);
  const router = useRouter(); 
  const idCreator = Post?.creator;
  const [messageCotizar, setMessageCotizar] = useState(null)
  const numeroCotizaciones = Math.round(Post?.cotizaciones?.length / 24)

  console.log(User);


  let cotiza = Post?.cotizaciones;
  let arrayCotizaciones = [];
  let cotizacionCreada;
  // if(cotiza?.length>0){
  // arrayCotizaciones.push(cotiza?.split(","));

  // }
  if (Post?.cotizaciones?.length > 0) {
    cotizacionCreada = User?.result?.cotizaciones?.find(
      (ele) => ele == arrayCotizaciones[0]?.find((item) => item == ele)
    );
  }

  const handleCotizar = (e) => {
    setCotizar(cotizar ? false : true);
    if (User?.result) {
      router.push(`/posts/${Post._id}`);
    } else {
      router.push("/auth");
    }
  };

  const postHeader ={
      marca:Post?.marca,
      referencia:Post?.referencia,
      date:Post?.date
  }
  const postActions={
    lugar:Post?.lugar,
    postId:Post?._id,
    userId:User?.result._id,
    postIdCreator:Post?.creator,
    setVisibleDelete:setVisibleDelete
  }
  return (
    <>
      <div className={classes.container}>
          <Card className={classes.card} elevation={2}>
            {/* <PostHeader OnePost={OnePost} /> */}
            <PostHeader PostHeader={postHeader}/>

            <Divider></Divider>

            <PostsContent Post={Post}/> 
            
            <PostsActions postData={postActions}/> 
            
            {messageCotizar!== null &&
            <Paper className={classes.paper2} style={{width:'250px'}} elevation={3}>
            <Typography
            className={classes.typo}
            style={{ fontSize: "14px", color: "white" }}
              >
              {messageCotizar}
            </Typography>
            </Paper>
            }
            <PostButton userId={User?.result._id} userRole={User?.result.role.length} setMessageCotizar={setMessageCotizar} idCreator={idCreator} handleCotizar={handleCotizar} cotizacionCreada={cotizacionCreada} numeroCotizaciones={numeroCotizaciones}/>
            
            
          </Card>
      </div>
    </>
  );
}
