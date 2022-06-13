import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

export default function Confirm({confirm}){
    const router = useRouter()

    const {id} = router.query
    return(
        <>
         <h2>colMotors</h2>
        <Button onClick={()=>confirm(id)} variant="contained" color='secondary'>Confirmar Cuenta</Button>
        </>
    )
}