import { Button, Paper, Typography } from "@material-ui/core";
import { Error } from "@material-ui/icons";
import useStyles from "./styles";
import { useRouter } from "next/router";
import Posts from "../Posts/Posts";
import { useEffect, useState } from "react";
import ModalCargando from "../../utils/modalCargando.js";
export default function HomeVendedor({ posts, user }) {
  const classes = useStyles();
  const router = useRouter();
  const [visibleModal, setVisibleModal] = useState(true);

 

  return (
    <>
      {visibleModal && (
        <ModalCargando
        visibleModal={visibleModal}
          setVisibleModal={setVisibleModal}
          texto={
            `Hola ${user?.result.name}, te tenemos nuevos clientes, cotiza y comienza a vender!`
          }
        />
      )}

      <div className={classes.div4}>
        <Posts user={user} posts={posts} />
      </div>
    </>
  );
}
