import Link from "next/link";
import { AppBar, Divider,Toolbar, Typography } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
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
        <div className={classes.navBar}>
        <Link href={"/"} className={classes.brandContainer}>
          <a className={classes.a}>
            <img
              className={classes.img}
              src={"/images/LogoQuarks1PNG.png"}
              alt="icon"
            />
            <Typography
              className={classes.heading}
              align="center"
              outlined="none"
            >
              Quarks
            </Typography>
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
                <Menu  fontSize="large" />
                </div> 
             
              
        }
        </div>
        <Divider style={{width:'90%', marginLeft:'auto', marginRight:'auto', height:'2px', color:'#1b333d'}}/>

              {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:'0px', marginRight:0}}>
              <Buscador/>
              </div> */}

        
        
    </>
  );
}
