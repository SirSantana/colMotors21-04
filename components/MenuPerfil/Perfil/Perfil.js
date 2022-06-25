import useStyles from "./styles";
import PerfilCliente from "./PerfilCliente";

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
