import { Button, Paper, Typography } from "@material-ui/core";
import {Error } from "@material-ui/icons";
import useStyles from "./styles";
import { useRouter } from "next/router";
import Posts from "../Posts/Posts";
import { useEffect, useState } from "react";


export default function HomeVendedor({posts}){
  const classes = useStyles();
  const router = useRouter();
  const [user, setUser] = useState(null);



  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

    return(
        <>
        <Paper style={{display:'flex', width:'300px',flexDirection:'column', height:'fit-content', justifyContent:'center', alignItems:'center', padding:'10px', marginBottom:'10px'}} elevation={3}>
          <div style={{display:'flex', width:'300px',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
          <Error style={{ paddingRight: "10px", color:'#f50057' }} />
          <Typography
            className={classes.typo}
            style={{ fontSize: "16px", color: "black", marginRight: "8px" }}
          >
            Bienvenido {user?.result?.name}, te tenemos nuevos clientes, cotiza y comienza a vender!
          </Typography>

          </div>
        </Paper>
        <div style={{display:'flex', width:'84vw',flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Posts posts={posts} user={user}/>

        </div>

        </>
    )
}