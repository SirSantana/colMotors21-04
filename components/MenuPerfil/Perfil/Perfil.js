import { Avatar, Card, CardContent, CardHeader, Divider, Typography,} from "@material-ui/core";
import useStyles from "./styles";
import { useRouter } from "next/router";
import { BarChart, Person, RateReview, Stars } from "@material-ui/icons";
import Image from 'next/image'
import PerfilVendedor from "./PerfilVendedor";
import PerfilCliente from "./PerfilCliente";

export default function Perfil({ user }) {
  const classes = useStyles();

// console.log(user?.result?.role.find(el=> el=== 'Vendedor'));


  return (
    <>
        {user.role.length > 1 
        ?<PerfilVendedor user={user}/>
      : <PerfilCliente user={user}/>
      }
    </>
  );
}
