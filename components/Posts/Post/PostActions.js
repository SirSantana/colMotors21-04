import { Button, CardActions, Typography } from "@material-ui/core";
import { Delete, Place } from "@material-ui/icons";
import useStyles from "./styles";
import Link from "next/link";




export default function PostActions({OnePost, user, setVisibleDelete}){
  const classes = useStyles();
  const idCreator = OnePost?.creator;

    return(
        <>
        <CardActions style={{width:'90%', paddingLeft:'16px', paddingBottom:'5px'}}>
          <div style={{ display: "flex", flexDirecction: "row",alignItems:'center',}}>
            <Place style={{color: '#1b333d'}}/>
            <Typography
              style={{ marginLeft: "5px" }}
              variant="body1"
            >
              {OnePost?.lugar}
            </Typography>
          </div>
          {/* <Button
            size="small"
            disabled={!user?.result}
            onClick={handleFavorite}
          > */}
            {/* <Likes /> */}
          {/* </Button> */}
          {/* <IconButton aria-label="share">
            <Share />
          </IconButton> */}

          {user?.result?._id === idCreator && (
            <Link href={`/posts/${OnePost?._id}`}>
            <a>
            <Button size="small" onClick={()=> setVisibleDelete(true)}>
              <Delete fontSize="small" />
            </Button>
            </a>
            </Link>
          )}
        </CardActions>
        </>
    )
}