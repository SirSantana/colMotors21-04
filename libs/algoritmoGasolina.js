
export default function AlgoritmoGasolina({gasolinas, tanque}){
    let tanqueadas =[]
    let daysMeses = [31,28,31,30,31,30,31,31,30,31,30,31]
    console.log(gasolinas);
    // let month =??? asignar mes actual o un mes que busquen numero
    let gasolina = gasolinas.sort((a, b) =>{
      return new Date(a.fecha) - new Date(b.fecha)
    })
    for(let i = 0; i<gasolina.length; i++){
     
      if(gasolina[i+1]!== undefined){
        
      let month = new Date(gasolina[i].fecha).getMonth()
      let nextMonth = new Date(gasolina[i+1]?.fecha).getMonth()
    let tanqueada ={}
    let tanqueadaCompartida ={}
        let porcentaje1 = tanque/100
        let galones = parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") /gasolina[i].precioGalon.replace(/\./g, "")).toFixed(2))
        
      if(month !== nextMonth){
        let firstDay = new Date(gasolina[i].fecha).getDate()
        let lastDay = new Date(gasolina[i+1].fecha).getDate()
        let diasMonthActual = daysMeses[month] - firstDay
        let dias = diasMonthActual + lastDay
        let kilometrosRec1 = parseFloat(((gasolina[i+1]?.kilometraje.replace(/\./g, "") -gasolina[i]?.kilometraje.replace(/\./g, "") )/(dias) * diasMonthActual).toFixed(2))
        let kilometrosRec2 = parseFloat(((gasolina[i+1]?.kilometraje.replace(/\./g, "") -gasolina[i]?.kilometraje.replace(/\./g, "") )/(dias) * lastDay).toFixed(2))
        let fuelInicialLitros = parseFloat((porcentaje1 *gasolina[i].gasolinaInicial).toFixed(2))
        let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
        let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
        let fuelPercentajeUsado = parseFloat(((fuelFinalPercentaje - gasolina[i+1].gasolinaInicial)/(diasMonthActual+lastDay)).toFixed(2))
        let fuelPerUsado1 = Math.trunc(fuelPercentajeUsado * diasMonthActual)
        let fuelPerUsado2 = Math.trunc(fuelPercentajeUsado * lastDay)
        let fuelComprado = parseFloat((fuelFinalPercentaje - gasolina[i].gasolinaInicial).toFixed(2))
        let precioPer =   parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") / fuelComprado).toFixed(2))
        let dineroUsado1 = Math.trunc(((fuelFinalPercentaje -gasolina[i+1].gasolinaInicial) * precioPer)/dias)*diasMonthActual
        let dineroUsado2 = Math.trunc(((fuelFinalPercentaje -gasolina[i+1].gasolinaInicial) * precioPer)/dias)*lastDay
        let galonesUsados1 =  parseFloat((dineroUsado1 / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let galonesUsados2 =  parseFloat((dineroUsado2 / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let precioKm = dineroUsado1 / kilometrosRec1;
       let galonKm = dineroUsado1 /  gasolina[i].precioGalon.replace(/\./g, "") ;
        let galonRecorrido = parseFloat((kilometrosRec1 / galonKm).toFixed(2));
        let kilometraje1 = Number(gasolina[i].kilometraje)
        let kilometraje2 = Number(gasolina[i].kilometraje) +Number(Math.trunc(kilometrosRec1))
        tanqueada.dineroGastado = Math.trunc((gasolina[i]?.dineroGastado.replace(/\./g, "") / dias) * diasMonthActual)
        tanqueada.kilometrosRecorridos = kilometrosRec1
        tanqueada.fecha = gasolina[i]?.fecha
        tanqueada.precioGalon = gasolina[i]?.precioGalon
        tanqueada.mes = month
        tanqueada.compartida = true
        tanqueada.fuelInicialLitros = fuelInicialLitros
        tanqueada.fuelFinalLitros = fuelFinalLitros
        tanqueada.fuelInicialPercentaje = gasolina[i]?.gasolinaInicial
        tanqueada.fuelFinalPercentaje = fuelFinalPercentaje
        tanqueada.fuelPercentajeUsado =fuelPerUsado1
        tanqueada.dias = dias
        tanqueada.dineroUsado = dineroUsado1
        tanqueada.fuelComprado = fuelComprado
        tanqueada.galones = galones
        tanqueada.galonesUsados = galonesUsados1
        tanqueada.precioKm = precioKm
        tanqueada.galonRecorrido = galonRecorrido
        tanqueada.kilometraje =kilometraje1
        tanqueada.tipoGasolina = gasolina[i].tipoGasolina
        tanqueada._id = gasolina[i]._id
        tanqueada.estado ="finalizado"
        
        tanqueadaCompartida.dineroGastado = Math.trunc(gasolina[i]?.dineroGastado.replace(/\./g, "") / dias) * lastDay
        tanqueadaCompartida.kilometrosRecorridos = kilometrosRec2
        tanqueadaCompartida.fecha = gasolina[i]?.fecha
        tanqueadaCompartida.precioGalon = gasolina[i]?.precioGalon
        tanqueadaCompartida.mes =nextMonth
        tanqueadaCompartida.compartida = true
        tanqueadaCompartida.fuelInicialLitros = fuelInicialLitros
        tanqueadaCompartida.fuelFinalLitros = fuelFinalLitros
        tanqueadaCompartida.fuelInicialPercentaje = gasolina[i]?.gasolinaInicial
        tanqueadaCompartida.fuelFinalPercentaje = fuelFinalPercentaje
        tanqueadaCompartida.fuelPercentajeUsado =fuelPerUsado2
        tanqueadaCompartida.dias = dias
        tanqueadaCompartida.dineroUsado = dineroUsado2
        tanqueadaCompartida.fuelComprado = fuelComprado
        tanqueadaCompartida.galones = galones
        tanqueadaCompartida.galonesUsados = galonesUsados2
        tanqueadaCompartida.precioKm = precioKm
        tanqueadaCompartida.galonRecorrido = galonRecorrido
        tanqueadaCompartida.kilometraje = kilometraje2
        tanqueadaCompartida.tipoGasolina = gasolina[i].tipoGasolina
        tanqueadaCompartida._id = gasolina[i]._id
        tanqueadaCompartida.estado ="finalizado"
        
        tanqueadas.push(tanqueada)
        tanqueadas.push(tanqueadaCompartida)
        
      }else{
        let kilometrosRec = gasolina[i+1]?.kilometraje.replace(/\./g, "") -gasolina[i]?.kilometraje.replace(/\./g, "")
        let fuelInicialLitros = parseFloat((porcentaje1 *gasolina[i].gasolinaInicial).toFixed(2))
        let fuelFinalLitros = parseFloat(((galones * 3.7)+fuelInicialLitros).toFixed(2))
        
        let fuelFinalPercentaje = parseFloat((fuelFinalLitros / porcentaje1).toFixed(2))
   
        
        let dias = new Date(gasolina[i+1].fecha).getDate() -new Date(gasolina[i].fecha).getDate()
        let fuelComprado = parseFloat((fuelFinalPercentaje - gasolina[i].gasolinaInicial).toFixed(2))
        
        let fuelPercentajeUsado = parseFloat((fuelFinalPercentaje - gasolina[i+1].gasolinaInicial).toFixed(2))
        
        let precioPer =   parseFloat((gasolina[i].dineroGastado.replace(/\./g, "") / fuelComprado).toFixed(2))
        let dineroUsado = Math.trunc(fuelPercentajeUsado * precioPer)
       
        let galonesUsados =  parseFloat((dineroUsado / gasolina[i].precioGalon.replace(/\./g, "")).toFixed(3))
        let precioKm = dineroUsado / kilometrosRec;
    let galonKm = dineroUsado /  gasolina[i].precioGalon.replace(/\./g, "") ;
        let galonRecorrido = parseFloat((kilometrosRec / galonKm).toFixed(2));
        let kilometraje = Number(gasolina[i].kilometraje)

        tanqueada.dineroGastado = gasolina[i]?.dineroGastado
        tanqueada.kilometrosRecorridos = kilometrosRec
        tanqueada.fecha = gasolina[i]?.fecha
        tanqueada.precioGalon = gasolina[i]?.precioGalon
        tanqueada.mes = month
        tanqueada.compartida = false
        tanqueada.fuelInicialLitros = fuelInicialLitros
        tanqueada.fuelFinalLitros = fuelFinalLitros
        tanqueada.fuelInicialPercentaje = gasolina[i]?.gasolinaInicial
        tanqueada.fuelFinalPercentaje = fuelFinalPercentaje
        tanqueada.fuelPercentajeUsado = fuelPercentajeUsado
        tanqueada.dias = dias
        tanqueada.dineroUsado = dineroUsado
        tanqueada.fuelComprado = fuelComprado
        tanqueada.galones = galones
        tanqueada.galonesUsados = galonesUsados
        tanqueada.precioKm = precioKm
        tanqueada.galonRecorrido = galonRecorrido
        tanqueada.kilometraje = kilometraje
        tanqueada.tipoGasolina = gasolina[i].tipoGasolina
        tanqueada._id = gasolina[i]._id
        tanqueada.estado ="finalizado"
        
        tanqueadas.push(tanqueada)
      }
      }else{
        let mes = new Date(gasolina[i].fecha).getMonth()
      tanqueadas.push({...gasolina[i],estado:'progreso', mes})
        
      }
      
    }
    return{tanqueadas}
}