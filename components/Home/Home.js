import {Typography,Paper,Button,} from "@material-ui/core";
import { Error } from "@material-ui/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../utils/handleLogout";
import HomeVendedor from "./HomeVendedor";
import HomeCliente from "./HomeCliente";

export default function HomeComponent({posts}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const [user, setUser] = useState();

  if(user?.result.role.length >1){
    router.push("/home/vendedor")
  }

  if(user=== null){
    router.replace('/auth')
  }
  const createPosts = async (postData) => {
    try {
      await fetch("/api/posts/", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(postData),
      }).then((response)=> await response.json())
        .then((data)=> router.push(`/posts/${data?.newPost?._id}`))
        .catch(err=> console.log(err))
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  
  return (
    <>
      {user?.result.role.length === 1 &&
      <>
      {user?.result.status !== 'VERIFIED' ?
     <Paper style={{display:'flex', width:'300px',flexDirection:'column', height:'fit-content', justifyContent:'center', alignItems:'center', padding:'10px', marginBottom:'10px'}} elevation={3}>
     <div style={{display:'flex', width:'300px',flexDirection:'row',justifyContent:'center', alignItems:'center'}}>
     <Error style={{ paddingRight: "10px", color:'#f50057' }} />
     <Typography
       className={classes.typo}
       style={{ fontSize: "16px", color: "black", marginRight: "8px", marginBottom:'10px' }}
     >
       Ingresa a tu correo y valida la cuenta, para que puedas cotizar
     </Typography>

     </div>
     <Button variant="contained" color='secondary' onClick={()=> handleLogout(setUser, router,dispatch)}>
       Ya la valide
     </Button>
   </Paper>  
    : null}
    

        
      </>}
      <div className={classes.contenedor}>
    <HomeCliente user={user} posts={posts} createPosts={createPosts}/>

    </div>
    </>
  );
}
