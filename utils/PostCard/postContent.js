import { Button, CardContent, CardMedia, Typography } from "@material-ui/core";
import { PersonSharp,   Photo } from "@material-ui/icons";
import Link from 'next/link'
import Image from 'next/image'

import { useState } from "react";
import useStyles from '../stylesCard.js'


export default function PostsContent({Post}) {
  const classes = useStyles();
  const [imagen, setImagen] = useState(false);
  
  console.log(Post.selectedFile);
  const nombreCreador = Post?.nombreCreador?.toString();

  let name = Post?.nombreCreador?.toString();
  let indice;
  for (let letter in name) {
    if (name[letter] === " ") {
      indice = letter + name[letter];
    }
  }
  let secondLetter = name?.slice(indice, parseInt(indice) + 2);
  let twoLetters = name[0] + secondLetter;
  let two = twoLetters.replace(/ /g, "");
  return (
    <>
      <CardContent
        style={{
          width: "90%",
          display: "flex",
          paddingLeft: "10px",
          flexDirection: "column",
        }}
      >
        <Link href={`/users/${Post.creator}`}>
          <a>
            <div
              style={{
                display: "flex",
                flexDirecction: "row",
                alignItems: "center",
              }}
            >
              <PersonSharp
                fontSize="large"
                style={{ color: "gray", marginLeft: "3px" }}
              />
              <div>
              <h3 style={{margin:0, fontWeight:'500', lineHeight:'16px'}}>Cliente:</h3>
              <Typography
                style={{color: "gray", fontWeight:'400', fontSize:'18px' }}
                className={classes.typography}
              >
                {nombreCreador}
              </Typography>
              </div>
              
            </div>
          </a>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin:'10px 0px'
          }}
        >
          <Image
            src={"/images/iconoPiston.png"}
            alt={"/images/iconoPiston.png"}
            width={40}
            height={40}
          />
          <div>
            <h3 style={{margin:0, fontWeight:'500', lineHeight:'16px'}}>Repuestos:</h3>
          <Typography
            style={{ fontSize: "18px", color:'gray' }}
            className={classes.typography1}
          >
            {Post?.repuesto}
          </Typography>
          </div>
        </div>
        {Post?.selectedFile ? (
          <>
          <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          <Photo fontSize='large' style={{ color: "gray", marginLeft: "3px" }}/>
          <Button
            style={{width:'200px',fontSize:'16px', height:'30px', padding:'10px'}}
            color='secondary'
            variant={imagen ? 'outlined'  : "contained"}
            onClick={() => (imagen ? setImagen(false) : setImagen(true))}
          >
            {imagen ? "Cerrar Foto" : "Ver Foto"}
          </Button>
          </div>
          </>
          
        ) : null}
        {imagen ? (
          <>
            <img src={Post?.selectedFile} alt='Imagen repuesto' className={classes.img} style={{borderRadius:'10px'}}/>
          </>
        ) : null}
      </CardContent>
    </>
  );
}
