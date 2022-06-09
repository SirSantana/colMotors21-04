import Link from "next/link";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuPerfil from "../MenuPerfil/Menuperfil";
import { LOGOUT } from "../../reducers/type";
import { useDispatch } from "react-redux";
import Buscador from "./Buscador";
import { handleLogout } from "../../utils/handleLogout";
// import decode from "jwt-decode";


export default function Navbar() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  
  

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
      <AppBar position="static" className={classes.appBar}>
        <div style={{display:'flex', flexDirection:'row'}}>
        <Link href={"/"} className={classes.brandContainer}>
          <a className={classes.a}>
            <Image
              className={classes.img}
              src={"/images/logo_colmotors.jpg"}
              alt="icon"
              height={"40"}
              width={"60"}
            />
            <Typography
              className={classes.heading}
              align="center"
              outlined="none"
            >
              colMotors
            </Typography>
          </a>
        </Link>
        {user?.result && (
              <div style={{display:'flex', flexDirection:'row', justifyContent:'center',}}>
                <MenuPerfil user={user} logout={()=>handleLogout(setUser, router, dispatch)} />
              </div>
        )}
        </div>

              <div style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', marginLeft:'0px', marginRight:0}}>
              <Buscador/>
              </div>

        
        
      </AppBar>
    </>
  );
}
