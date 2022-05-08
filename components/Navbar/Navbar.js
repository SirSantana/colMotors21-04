import Link from "next/link";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import Image from "next/image";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuPerfil from "../MenuPerfil/Menuperfil";
import { LOGOUT } from "../../reducers/type";
import { useDispatch } from "react-redux";
// import decode from "jwt-decode";

export default function Navbar() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: LOGOUT });
    router.push("/");
    setUser(null);
  };

  useEffect(() => {
    // const token = user?.token;

    // if (token) {
    //   const decodedToken = decode(token);

    //   if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    // }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <>
      <AppBar position="sticky" className={classes.appBar}>
        <Link href={"/"} className={classes.brandContainer}>
          <a className={classes.a}>
            <Image
              className={classes.img}
              src={"/images/logo_colmotors.jpg"}
              alt="icon"
              height={"60"}
              width={"70"}
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
          <Toolbar className={classes.toolbar}>
            <div className={classes.profile}>
              <div>
                <MenuPerfil user={user} logout={logout} />
              </div>
            </div>
          </Toolbar>
        )}
      </AppBar>
    </>
  );
}
