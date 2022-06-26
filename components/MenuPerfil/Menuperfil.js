import {
    Avatar,
    Menu,
    IconButton,
    MenuItem,
    Divider
  } from "@material-ui/core";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import useStyles from './styles'
import {useEffect} from 'react'
import { useRouter } from "next/router";

export default function MenuPerfil({user, logout}){
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles()
    const dispatch = useDispatch()
    const router = useRouter()    

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return(
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
                <Avatar  className={classes.purple} alt={user?.result.name}>{user?.result?.name?.charAt(0)}</Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href={`/users/${user?.result?._id}`}>
                <a>
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                </a>
                </Link>
                <Link href={`/users/micuenta/${user?.result?._id}`}>
                <a>
                <MenuItem onClick={handleClose}>Mis Preguntas</MenuItem>

                </a>
                </Link>
                <Divider></Divider>
                <MenuItem onClick={()=>logout()}>Cerrar Sesion</MenuItem>
              </Menu>
        </>
    )
}