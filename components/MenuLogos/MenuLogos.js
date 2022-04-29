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

export default function MenuLogos({ marca, setMarca }) {
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
            src={ marcaAuto ?`/images/${marcaAuto}.png` : '/images/logoChevrolet.png'}
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
        <ButtonBase
          onClick={() => {
            setMarca("logoChevrolet"), setMarcaAuto("logoChevrolet");
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
              style={{ margin: 0, padding: 0 }}
              src={"/images/logoChevrolet.png"}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("mazdaLogo"), setMarcaAuto("mazdaLogo");
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
            <Image src={"/images/mazdaLogo.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("logoRenault"), setMarcaAuto("logoRenault");
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
              src={"/images/logoRenault.png"}
              style={{ margin: "1px" }}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("logoKia"), setMarcaAuto("logoKia");
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
            <Image src={"/images/logoKia.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("logoNissan"), setMarcaAuto("logoNissan");
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
            <Image src={"/images/logoNissan.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("logoFord1"), setMarcaAuto("logoFord1");
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
            <Image src={"/images/logoFord1.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("logoVolkswagen1"), setMarcaAuto("logoVolkswagen1");
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
              src={"/images/logoVolkswagen1.png"}
              width="40px"
              height="40px"
            />
          </MenuItem>
        </ButtonBase>

        <ButtonBase
          onClick={() => {
            setMarca("logoToyota1"), setMarcaAuto("logoToyota1");
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
            <Image src={"/images/logoToyota1.png"} width="40px" height="40px" />
          </MenuItem>
        </ButtonBase>

        <Divider></Divider>
        <MenuItem>Elige Tu Marca</MenuItem>
      </Menu>
    </>
  );
}
