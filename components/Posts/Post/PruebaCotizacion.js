

export default function PruebaCotizacion({el}){
    console.log("el",el);
    return(
        <>
        {el &&
        <>
         {el.precio}
        {el.repuestos}
        {el.nombreVendedor[0]}
        </>
        }
        </>
    )
}