import { Button,Divider,Typography } from "@material-ui/core";
import {ShareIcon} from '@material-ui/icons';
import useStyles from './stylesPost'
import {useDispatch} from 'react-redux'
import Image from 'next/image'
import { useEffect } from "react";
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function PostPreguntas({post}){
    const router = useRouter()
    const dispatch = useDispatch()
    const classes = useStyles()
    const handleDelete=()=>{
        deletePost(post?._id)
        router.push("/home")
    }

    async function deletePost(id){
        try {
          const res = await fetch(`/api/posts/${id}`,{
            method:'DELETE',
            headers:{'Content-type': 'application/json'},
            // body: JSON.stringify(id)
          })
           if(res){
            router.push("/home")
            setMessage('Eliminado correctamente')
           }
            
        } catch (error) {
          console.log(error);
        }
      }

    return(
        <>
        <div>
        <Typography gutterBottom variant="h6" component="div">
            <strong>Auto:</strong> {post?.marca}
        </Typography>
        </div>
        <div>
        <Typography variant="h6" gutterBottom>
        <strong>Descripcion:</strong> {post?.repuesto}
        </Typography>
        </div>
        
        {
          post?.selectedFile &&
          <div>
          <Image 
          src={post?.selectedFile}
          width='100px'
          height='100px'
          />
        </div>
        }
        <div>
        <Typography variant="body1" color="black">
        <strong>Fecha:</strong> {post?.date}
        </Typography>
        </div>
        <div  className={classes.buttons}>
        <Link href={`/posts/${post?._id}`}>
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