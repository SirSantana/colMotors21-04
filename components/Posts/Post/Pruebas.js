

export default function Prueba({el}){
    return(
        <>
        {el &&
        <>
         <h2>{el?.repuestos}</h2>
        <h3>{el?.precio}</h3></>
        }
        </>
    )
}