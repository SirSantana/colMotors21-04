import { Button, CardContent, CardMedia, Typography } from "@material-ui/core";
import { PersonSharp } from "@material-ui/icons";
import Link from 'next/link'
import Image from 'next/image'

import { useState } from "react";
import useStyles from '../stylesCard.js'


export default function PostsContent({Post}) {
  const classes = useStyles();
  const [imagen, setImagen] = useState(false);

  const nombreCreador = Post?.nombreCreador?.toString();

  let name = Post?.nombreCreador?.toString();
  let indice;
  for (let letter in name) {
    if (name[letter] === " ") {
      indice = letter + name[letter];
    }
  }
  let secondLetter = name.slice(indice, parseInt(indice) + 2);
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
          gap: "10px",
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

              <Typography
                style={{ marginLeft: "5px", color: "black" }}
                className={classes.typography}
              >
                {nombreCreador}
              </Typography>
            </div>
          </a>
        </Link>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* <Image
            src={'/images/repuestosIcon.png'}
            width={'30px'}
            height={'30px'}
            /> */}
          {/* <Build/> */}
          <Image
            src={"/images/iconoPiston.png"}
            alt={"/images/iconoPiston.png"}
            width={40}
            height={40}
          />
          <Typography
            style={{ marginLeft: "5px", fontSize: "20px" }}
            className={classes.typography1}
          >
            {Post?.repuesto}
          </Typography>
        </div>
        {Post?.selectedFile ? (
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
            <CardMedia
              className={classes.media}
              image={Post?.selectedFile}
            />
          </>
        ) : null}
      </CardContent>
    </>
  );
}
