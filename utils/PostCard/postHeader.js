
import { Avatar, CardHeader } from "@material-ui/core";
import moment from "moment";
import useStyles from '../stylesCard.js'

export default function PostHeader({PostHeader}){
    const {marca, referencia, date} = PostHeader
    const classes = useStyles()
    return(
        <>
        <CardHeader
              className={classes.header}
              avatar={
                <Avatar
                  src={`/images/${marca}.png`}
                  className={classes.purple}
                  alt={marca}
                ></Avatar>
              }
              title={referencia}
              classes={{ subheader: classes.subheader2, title: classes.title }}
              subheaderTypographyProps={{ variant: "body2" }}
              subheader={moment(date).fromNow()}
            />
        </>
    )
}