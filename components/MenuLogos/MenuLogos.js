import {
    Avatar,
    Menu,
    IconButton,
    MenuItem,
    Divider
  } from "@material-ui/core";
import Link from "next/link";
import Image from 'next/image'
  import {useState} from 'react'
  import useStyles from './styles'

export default function MenuLogos(){
    const classes = useStyles()

    const [anchorEl, setAnchorEl] = useState(null);

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
                <Avatar src={'/images/LOGO_CHEVROLET.png'} className={classes.purple} alt={"Hola"}>
              "mada"
            </Avatar>
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
                <Link href={"#"}>
                <a>
                <MenuItem style={{padding:0}} onClick={handleClose}><Image style={{margin:0, padding:0}} src={'/images/LOGO_CHEVROLET.png'} width='40px' height='40px'/>Chevrolet</MenuItem>
                
                </a>
                </Link>
                <Link href={"#"}>
                <a>
                <MenuItem style={{padding:0}} onClick={handleClose}><Image style={{margin:0, padding:0}} src={'/images/LOGO_CHEVROLET.png'} width='40px' height='40px'/>Chevrolet</MenuItem>


                </a>
                </Link>
                <Divider></Divider>
                <MenuItem >Cerrar Sesion</MenuItem>
              </Menu>
        </>
    )
}