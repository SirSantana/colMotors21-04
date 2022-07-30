import Link from "next/link";
import { AppBar, Divider,MenuItem,Toolbar, Typography, Menu } from "@material-ui/core";
import { MenuOpen } from "@material-ui/icons";
import Image from "next/image";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuPerfil from "../MenuPerfil/Menuperfil";
import { LOGOUT } from "../../reducers/type";
import { useDispatch } from "react-redux";
import Buscador from "./Buscador";
import { handleLogout } from "../../utils/handleLogout";
import ButtonLink from "../Button";
// import decode from "jwt-decode";


export default function Navbar() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

 let width;
  if (typeof window !== "undefined") {
     width = window.innerWidth
    console.log(width);
  }
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // const token = user?.token;

    // if (token) {
    //   const decodedToken = decode(token);

    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [router]);

  return (
    <>
        <div className={classes.navBar} style={{height:"60px"}}>
        <Link href={"/"} className={classes.brandContainer}>
          <a className={classes.a}>
            <img
              className={classes.img}
              src={"/images/LogoQuarks1PNG.png"}
              alt="icon"
            />
            <h2
              className={classes.heading}
              align="center"
              outlined="none"
            >
              Quarks
            </h2>
          </a>
        </Link>
        {user?.result  ?
              <div style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
                <MenuPerfil user={user} logout={()=>handleLogout(setUser, router, dispatch)} />
              </div>
              :
              width > 600 ?
                <div className={classes.divButton}>
                <ButtonLink text={'Iniciar Sesion'} to={user ? '/home':"/auth"} color={'secondary'} variant='outlined'/>
                <ButtonLink text={'Registrarse'} to={"/auth"} color={'secondary'} variant='contained' />
                
              </div>:
              <div style={{color:'#1b333d',display:'flex', justifyContent:'center', alignItems:'center'}}>
                <a onClick={handleClick}><MenuOpen  fontSize="large" /></a>
                <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> router.push("/auth")}>Iniciar Sesion</MenuItem>
        <MenuItem onClick={()=> router.push("/auth")}>Registrarse</MenuItem>
        <MenuItem onClick={handleClose}>¿Quieres ser vendedor?</MenuItem>
        <MenuItem onClick={handleClose}>¿Quienes somos?</MenuItem>

      </Menu>
                </div> 
             
              
        }
        </div>

              {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:'0px', marginRight:0}}>
              <Buscador/>
              </div> */}

        
        
    </>
  );
}
