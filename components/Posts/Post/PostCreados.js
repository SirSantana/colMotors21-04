import {
  Card,
  Button,
  Divider,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useRouter } from "next/router";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import moment from "moment";


export default function PostCreador({ OnePost }) {
  // const classes = useStyles();
  // const [visibleDelete, setVisibleDelete] = useState(false);
  // const [cotizar, setCotizar] = useState(false);
  // const router = useRouter();
  // const [user, setUser] = useState(null);
  // const nombreCreador = OnePost?.nombreCreador?.toString();


  // const handleCotizar = (e) => {
  //   setCotizar(cotizar ? false : true);
  //   if (user?.result) {
  //     router.push(`/posts/${OnePost._id}`);
  //   } else {
  //     router.push("/auth");
  //   }
  // };

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, []);

  return (
    <>
      {/* <div className={classes.container}>
        <div className={classes.card}>
          <Card sx={{ width: "345px" }} className={classes.card} elevation={2}>
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
      </div> */}

    </>
  );
}
