import {
  Avatar,
  Menu,
  IconButton,
  MenuItem,
  Divider,
  Typography,
  ButtonBase,
} from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useStyles from "./styles";

export default function Menus({ marca, setMarca, tipo }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [marcaAuto, setMarcaAuto] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let marcasCarros = [
    "Chevrolet","Mazda", "Renault", "Kia", "Nissan", "Ford", "Volkswagen", "Toyota"
  ]
  let marcasMotos=[
    "tvs","Susuki", "Yamaha", "Honda", "Bajaj", "Akt"
  ]
  console.log(tipo);
  return (
    <>
      <IconButton
        size="medium"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        className={classes.menu}
      >
        <div
          style={{
            padding: 0,
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid gray",
            padding: "5px",
          }}
        >
          <Avatar
            src={ marcaAuto ?`/images/${marcaAuto}.png` : '/images/Chevrolet.png'}
            className={classes.purple}
            alt={"Hola"}
          >
            C
          </Avatar>
          <Typography variant="body1" style={{ lineHeight: "18px" }}>
            {marca ? 'Cambia la marca ': 'Elige la marca '} 
          </Typography>
          <ArrowDropDown style={{ margin: 0, padding: 0 }} />
        </div>
      </IconButton>
      <Menu
        name="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menuChoose}
      >

        {tipo === 'Carro'? 
        marcasCarros.map(el=>(
          <ButtonBase
          onClick={() => {
            setMarca(el), setMarcaAuto(el);
          }}
        >
          <MenuItem
              id='prueba-test'

            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image
              style={{ margin: 0, padding: 0 }}
              src={`/images/${el}.png`}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>
        ))
      :
      marcasMotos.map(el=>(
        <ButtonBase
        onClick={() => {
          setMarca(el), setMarcaAuto(el);
        }}
      >
        <MenuItem
            id='prueba-test'

          style={{
            alignItems: "center",
            justifyContent: "center",
            padding: "6px 8px",
          }}
          onClick={handleClose}
        >
          <Image
            style={{ margin: 0, padding: 0 }}
            src={`/images/${el}.png`}
            width="40px"
            height="40px"
          />
        </MenuItem>
      </ButtonBase>
      ))}
        
        <Divider></Divider>
        <MenuItem>Elige Tu Marca</MenuItem>
      </Menu>
    </>
  );
}
