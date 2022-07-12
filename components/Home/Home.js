import { Typography, Paper, Button } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../utils/handleLogout";
import HomeCliente from "./HomeCliente";

export default function HomeComponent({ posts }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState();

  if (user?.result.role.length > 1) {
    router.push("/home/vendedor");
  }

  if (user === null) {
    router.replace("/auth");
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <>
      {user?.result.role.length === 1 && (
        <>
          {user?.result.status !== "VERIFIED" ? (
            <Paper className={classes.paper} elevation={3}>
              <div className={classes.div3}>
                <Error style={{ paddingRight: "10px", color: "#f50057" }} />
                <Typography
                 className={classes.typo}
                >
                  Ingresa a tu correo y valida la cuenta, para que puedas
                  cotizar
                </Typography>
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => handleLogout(setUser, router, dispatch)}
              >
                Ya la valide
              </Button>
            </Paper>
          ) : null}
        </>
      )}
      <div className={classes.contenedor}>
        <HomeCliente user={user} posts={posts} />
      </div>
    </>
  );
}
