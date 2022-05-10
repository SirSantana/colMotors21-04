import { CardHeader, Avatar } from "@material-ui/core";
import useStyles from "./styles";
import moment from "moment";


export default function PostHeader({OnePost}){
  const classes = useStyles();
  const nombreCreador = OnePost?.nombreCreador?.toString();

    return(
        <>
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
        </>
    )
}