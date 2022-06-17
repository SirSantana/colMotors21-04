import { Avatar, Button, CardContent, CardMedia, Typography } from "@material-ui/core";
import useStyles from "./styles";
import Build from "@material-ui/icons/Build";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PostContent({OnePost}){
    const classes = useStyles();
    const [imagen, setImagen] = useState(false);

  console.log(OnePost);
  const nombreCreador = OnePost?.nombreCreador?.toString();
  
  let name = OnePost?.nombreCreador?.toString();
  let indice;
  for (let letter in name) {
    if (name[letter] === " ") {
      indice = letter + name[letter];
    }
  }
  let secondLetter = name.slice(indice, parseInt(indice) + 2);
  let twoLetters = name[0] + secondLetter
  let two = twoLetters.replace(/ /g, "")

    return(
        <>
        <CardContent style={{ width:'90%', display:'flex', flexDirection:'column',gap:'10px' }}>
        <Link href={`/users/${OnePost.creator}`} >
            <a>
          <div style={{ display: "flex", flexDirecction: "row",alignItems:'center', }}>
            
            <Avatar
             className={classes.purple2}
             alt={OnePost?.creador}
             >
              {two}

            </Avatar>
            <Typography
              style={{ marginLeft: "5px", fontSize:'18px' }}
              className={classes.typography}
            >
              {nombreCreador}
            </Typography> 
            
          </div>
          </a>
            </Link>
          <div style={{ display: "flex", flexDirection: "row", alignItems:'center',  }}>
            {/* <Image
            src={'/images/repuestosIcon.png'}
            width={'30px'}
            height={'30px'}
            /> */}
            <Build/>
            <Typography
              style={{ marginLeft: "5px" }}
              className={classes.typography1}
            >
              {OnePost?.repuesto}
            </Typography>
          </div>
          {OnePost?.selectedFile ? (
            <Button
              className={classes.button}
              color={imagen ? "secondary" : "primary"}
              variant="contained"
              onClick={() => (imagen ? setImagen(false) : setImagen(true))}
            >
              {imagen ? "X" : "Revisa la foto"}
            </Button>
          ) : null}
          {imagen ? (
            <>
              <CardMedia className={classes.media} image={OnePost?.selectedFile} />
            </>
          ) : null}
          
        </CardContent>
        </>
    )
}