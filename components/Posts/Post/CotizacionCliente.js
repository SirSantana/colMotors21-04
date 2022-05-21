


export default function CotizacionCliente({user, OnePost, cotizaciones}){
    return(
        <>
        <h2>{cotizaciones?.repuestos}</h2>
        <h2>{cotizaciones?.precio}</h2>
        </>
    )
}