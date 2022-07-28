import mongoose from 'mongoose'


const gasolinaSchema = new mongoose.Schema({
    tipoGasolina:{type:String},
    promedio:{type:String},
    kilometraje:{type:String},
    dineroGastado:{type:String},
    fecha:{type:Date, default:Date.now},
    fuelInicio:{type:Number},
    fuelFinal:{type:Number},
    owner:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    vehiculo:[{type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo'}]

}, {versionKey:'false'})

export default mongoose.models.Gasolina || mongoose.model('Gasolina', gasolinaSchema)
