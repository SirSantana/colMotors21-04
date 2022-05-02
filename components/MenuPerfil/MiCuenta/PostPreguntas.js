import { Button, Card, CardActions, Divider, IconButton, Typography } from "@mui/material";
import {ShareIcon} from '@material-ui/icons';
import { deletePost } from "../../../Reducers/Actions/postActions";
import useStyles from './stylesPost'
import {useDispatch} from 'react-redux'
import { useEffect } from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function PostPreguntas({post}){
    const router = useRouter()
    const dispatch = useDispatch()
    const handleDelete=()=>{
        dispatch(deletePost(post._id))
        router.push("/home")
    }


    return(
        <>
        <div>
        <Typography gutterBottom variant="h6" component="div">
            <strong>Auto:</strong> {post.marca}
        </Typography>
        </div>
        <div>
        <Typography variant="h6" gutterBottom>
        <strong>Descripcion:</strong> {post.repuesto}
        </Typography>
        </div>
        
        <div>
        <Typography variant="body1" color="secondary">
        <strong>Fecha:</strong> {post.date}
        </Typography>
        </div>
        <div>
        <Link href={`/posts/${post._id}`}>
        <a>
            <Button style={{marginRight:"10px", marginTop:'10px'}} color='primary' variant='contained'>Ver Cotizacion</Button>
        </a>
        </Link>

        <Button style={{ marginTop:'10px'}} color='secondary' variant='contained' onClick={handleDelete} >
            Eliminar
        </Button>
        </div>
        <Divider style={{ margin: "20px 0" }} />
        
        </>
    )
}