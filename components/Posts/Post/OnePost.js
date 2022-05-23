import { Avatar, Button, Card, CardActions, CardHeader, Divider, Typography } from "@material-ui/core";
import PostContent from "./PostContent";
import useStyles from "./styles";
import moment from "moment";
import { Place } from "@material-ui/icons";



export default function OnePost({Post, user}){
    const classes = useStyles();

  const nombreCreador = Post?.nombreCreador?.toString();
    console.log(Post);
    return(
        <>
        <div className={classes.card}>
            <div className={classes.header1}>
              <Typography gutterBottom className={classes.typo}>
                  <b>Cotización Cliente</b>
              </Typography>
            </div>
          <Card sx={{ width: "345px" }} className={classes.card} elevation={2}>
            {/* <PostHeader OnePost={OnePost} /> */}
            <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                  src={`/images/${Post?.marca}.png`}
                  className={classes.purple}
                  alt={Post?.marca}
                >
                  {nombreCreador?.substr(0, 1)}
                </Avatar>
              }
              title={Post?.referencia}
              classes={{ subheader: classes.subheader2, title: classes.title2 }}
              subheaderTypographyProps={{ variant: "body2" }}
              subheader={moment(Post?.date).fromNow()}
            />

            <Divider></Divider>

            <PostContent OnePost={Post} />

              <CardActions>
            <div style={{ display: "flex", flexDirecction: "row",alignItems:'center',}}>
            <Place style={{color: '#1b333d', width:'30px', height:'30px'}}/>
            <Typography
              style={{ marginLeft: "5px" }}
              variant="body1"
            >
              {Post?.lugar}
            </Typography>
            </div>
            </CardActions>
            <Button
                color="primary"
                variant="contained"
                fullWidth
                className={classes.cotizar}
              >
                {Math.round(Post.cotizaciones.length / 24)+ ' Cotizaciones'}
              </Button>
            </Card>
        </div>
        </>
    )
}