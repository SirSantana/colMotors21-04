
import { Button, CardActions, Typography } from '@material-ui/core'
import { Delete, Place } from '@material-ui/icons'
import Link from 'next/link'
import {useRouter} from 'next/router'

import useStyles from '../stylesCard.js'

export default function PostsActions({postData}){
  const {lugar, postId, userId, postIdCreator, setVisibleDelete} = postData
  const classes = useStyles();
  const router = useRouter()
  const {id} = router.query
  
    return(
        <>
        <CardActions style={{width:'90%', paddingLeft:'16px', paddingBottom:'5px'}}>
      
          <div style={{ display: "flex", flexDirecction: "row",alignItems:'center',}}>
            <Place style={{color: 'gray', width:'30px', height:'30px'}}/>
            <Typography
              style={{ marginLeft: "5px", color:'gray' }}
              variant="body1"
            >
              {lugar}
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

          {setVisibleDelete !== undefined ? 
          userId === postIdCreator && 
            id !== undefined &&
            <Button size="small" onClick={()=> setVisibleDelete(true)}>
            <Delete fontSize="small" />
          </Button>
          :null}
          
        </CardActions>
        </>
    )
}