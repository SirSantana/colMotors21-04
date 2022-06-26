
import { Avatar, CardHeader } from "@material-ui/core";
import moment from "moment";
import useStyles from '../stylesCard.js'

export default function PostHeader({Post}){
    const classes = useStyles()
    return(
        <>
        <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                  src={`/images/${Post?.marca}.png`}
                  className={classes.purple}
                  alt={Post?.marca}
                ></Avatar>
              }
              title={Post?.referencia}
              classes={{ subheader: classes.subheader2, title: classes.title }}
              subheaderTypographyProps={{ variant: "body2" }}
              subheader={moment(Post?.date).fromNow()}
            />
        </>
    )
}