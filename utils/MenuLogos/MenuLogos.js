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

export default function Menus({ marca, setMarca }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [marcaAuto, setMarcaAuto] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            {marca ? 'Cambia la marca de auto': 'Elige la marca de auto'} 
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
        <ButtonBase
          onClick={() => {
            setMarca("Chevrolet"), setMarcaAuto("Chevrolet");
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
              src={"/images/Chevrolet.png"}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Mazda"), setMarcaAuto("Mazda");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image src={"/images/Mazda.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Renault"), setMarcaAuto("Renault");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image
              src={"/images/Renault.png"}
              style={{ margin: "1px" }}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Kia"), setMarcaAuto("Kia");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image src={"/images/Kia.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Nissan"), setMarcaAuto("Nissan");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image src={"/images/Nissan.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Ford"), setMarcaAuto("Ford");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image src={"/images/Ford.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Volkswagen"), setMarcaAuto("Volkswagen");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image
              src={"/images/Volkswagen.png"}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("Toyota"), setMarcaAuto("Toyota");
          }}
        >
          <MenuItem
            style={{
              alignItems: "center",
              justifyContent: "center",
              padding: "6px 8px",
            }}
            onClick={handleClose}
          >
            <Image src={"/images/Toyota.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <Divider></Divider>
        <MenuItem>Elige Tu Marca</MenuItem>
      </Menu>
    </>
  );
}
