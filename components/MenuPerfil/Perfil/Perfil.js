import useStyles from "./styles";
import PerfilCliente from "./PerfilCliente";
import PerfilVendedor from "./PerfilVendedor";

export default function Perfil({ user }) {
  const classes = useStyles();



  return (
    <>
        {user.role.length > 1 
        ?<PerfilVendedor user={user}/>
      : <PerfilCliente user={user}/>
      }
    </>
  );
}
