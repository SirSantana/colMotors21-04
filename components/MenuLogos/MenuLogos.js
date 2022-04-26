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

export default function MenuLogos({marca, setMarca}) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [marcaAuto, setMarcaAuto] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    console.log("Hola");
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
            src={`/images/${marcaAuto}.png` || "/images/LOGO_CHEVROLET.png"}
            className={classes.purple}
            alt={"Hola"}
          >C</Avatar>
          <Typography variant="body1" style={{ lineHeight: "18px" }}>
            Elige la marca de auto
          </Typography>
          <ArrowDropDown style={{ margin: 0, padding: 0 }} />
        </div>
      </IconButton>
      <Menu
        id="menu-appbar"
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
        <ButtonBase onClick={() => {setMarca("LOGO_CHEVROLET"), setMarcaAuto("LOGO_CHEVROLET")}}>
          <MenuItem
            style={{ alignItems: "center", justifyContent: "center" }}
            onClick={handleClose}
          >
            <Image
              style={{ margin: 0, padding: 0 }}
              src={"/images/LOGO_CHEVROLET.png"}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase onClick={() =>{setMarca("KIA-Logo"), setMarcaAuto("KIA-Logo")}}>
          <MenuItem
            style={{ alignItems: "center", justifyContent: "center",  margin: 0, padding: 0  }}
            onClick={handleClose}
          >
            <Image src={"/images/KIA-Logo.png"} width="32px" height="32px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase  onClick={() =>{setMarca("logo nissan"), setMarcaAuto("logo nissan")}}>
        <MenuItem
          style={{ alignItems: "center", justifyContent: "center", paddingLeft:'18px' }}
          onClick={handleClose}
        >
          <Image
            style={{ margin: "5px", paddingRight: "2px", }}
            src={"/images/logo nissan.png"}
            width="34px"
            height="32px"
          />
        </MenuItem>
        </ButtonBase>
        
        <ButtonBase  onClick={() =>{setMarca("logo-Renault"), setMarcaAuto("logo-Renault")}}>
        <MenuItem
          style={{ alignItems: "center", justifyContent: "center", padding:0, paddingLeft:'3px'}}
          onClick={handleClose}
        >
          <Image src={"/images/logo-Renault.png"}
            style={{ margin: "5px", paddingRight: "2px" }}
            width="40px" height="30px" />
        </MenuItem>
        </ButtonBase>
        
        <ButtonBase  onClick={() =>{setMarca("LogoFord"), setMarcaAuto("LogoFord")}}>
        <MenuItem
          style={{ alignItems: "center", justifyContent: "center" }}
          onClick={handleClose}
        >
          <Image
            style={{ margin: "5px", paddingRight: "2px" }}
            src={"/images/LogoFord.png"}
            width="35px"
            height="30px"
          />
        </MenuItem>
        </ButtonBase>
        
        <ButtonBase  onClick={() => {setMarca("logoVolkswagen"),    setMarcaAuto("logoVolkswagen")}}>
        <MenuItem
          style={{ alignItems: "center", justifyContent: "center" }}
          onClick={handleClose}
        >
          <Image
            style={{ margin: "5px", paddingLeft: "0" }}
            src={"/images/logoVolkswagen.png"}
            width="30px"
            height="27px"
          />
        </MenuItem>
        </ButtonBase>
        
        <ButtonBase  onClick={() => {setMarca("logotoyata"), setMarcaAuto("logotoyata")}}>
        <MenuItem
          style={{ alignItems: "center", justifyContent: "center" }}
          onClick={handleClose}
        >
          <Image
            style={{ margin: 0, padding: 0 }}
            src={"/images/logotoyata.png"}
            width="40px"
            height="30px"
          />
        </MenuItem>
        </ButtonBase>
        
        <Divider></Divider>
        <MenuItem>Cerrar Sesion</MenuItem>
      </Menu>
    </>
  );
}
