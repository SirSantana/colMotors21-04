

export default function PruebaCotizacion({el}){
    console.log(el);
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