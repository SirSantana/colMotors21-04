import mongoose from 'mongoose'


const gasolinaSchema = new mongoose.Schema({
    tipoGasolina:{type:String},
    promedio:{type:String},
    kilometraje:{type:String},
    gasto:{type:String},
    owner:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],

}, {versionKey:'false', timestamps:'true'})

export default mongoose.models.Gasolina || mongoose.model('Gasolina', gasolinaSchema)
