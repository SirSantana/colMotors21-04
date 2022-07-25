import { Button, CardContent, CardMedia, Typography } from "@material-ui/core";
import { PersonSharp,   Photo } from "@material-ui/icons";
import Link from 'next/link'
import Image from 'next/image'

import { useState } from "react";
import useStyles from '../stylesCard.js'
import { theme } from "../theme.js";


export default function PostsContent({Post, setCompleteImage}) {
  const classes = useStyles();
  const [imagen, setImagen] = useState(Post.selectedFile ? true: false);
  
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
              style={theme.divs.divBasic}
            >
              <PersonSharp
                fontSize="large"
                style={{ color: "gray", marginLeft: "3px" }}
              />
              <div>
              <h3 style={theme.font.title} >Cliente:</h3>
              <h4
                style={theme.font.subtitle}
              >
                {nombreCreador}
              </h4>
              </div>
              
            </div>
          </a>
        </Link>
        <div
          style={{ display:'flex', flexDirection:'row', alignItems:'center',wordWrap:'break-word', margin:'10px 0'}}
        >
          <Image
            src={"/images/iconoPiston.png"}
            alt={"/images/iconoPiston.png"}
            width={40}
            height={40}
          />
          <div style={{width:'80%'}}>
            <h3 style={theme.font.title}>Repuestos:</h3>
          <h4
            style={theme.font.subtitle}
          >
            {Post?.repuesto}
          </h4>
          </div>
        </div>
        {Post?.selectedFile ? (
          <>
          <div style={theme.divs.divBasic}>
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
            
            <img onClick={()=> setCompleteImage(true)} src={Post?.selectedFile} alt='Imagen repuesto' className={classes.img}/>
          </>
        ) : null}
      </CardContent>
    </>
  );
}
