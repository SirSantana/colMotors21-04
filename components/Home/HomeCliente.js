import { Button } from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function HomeCliente({ user, posts }) {
  const classes = useStyles();
  const router = useRouter();
  const { id } = router.query;
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      router.push(`/search?query=${search}`);
    }
  };

  return (
    <>
      <div
        className={classes.div1}
      >
        <img
        className={classes.img1}
          src={"/images/LogoQuarks1PNG.png"}
          alt="icon"
        />
        <input
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Busca tus Repuestos"
          className={classes.Buscador}
          onKeyDown={handleKeyPress}
        />
        <div
          className={classes.div2}
        >
          <Button
            onClick={() => router.push("/form")}
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Cotiza Manualmente
          </Button>
          <Button
            className={classes.button}
            style={{ margin: 0 }}
            variant="outlined"
            color="secondary"
          >
            ¿Cómo Funciona?
          </Button>
        </div>
      </div>

    </>
  );
}
