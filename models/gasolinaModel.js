import mongoose from 'mongoose'


const gasolinaSchema = new mongoose.Schema({
    tipoGasolina:{type:String, default:'Corriente'},
    promedio:{type:String},
    kilometraje:{type:String},
    dineroGastado:{type:String},
    fecha:{type:Date, default:Date.now},
    gasolinaInicial:{type:String},
    precioGalon:{type:String, default:'9.400'},
    owner:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    vehiculo:[{type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo'}]

}, {versionKey:false})

export default mongoose.models.Gasolina || mongoose.model('Gasolina', gasolinaSchema)
