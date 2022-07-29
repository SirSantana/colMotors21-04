import mongoose from 'mongoose'


const vehiculoSchema = new mongoose.Schema({
    tipo:{type:String},
    referencia:{type:String},
    modelo:{type:Number},
    cilindraje:{type:Number},
    marca:{type:String},
    kilometraje:{type:String},
    owner:[{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    gasolina:[{type: mongoose.Schema.Types.ObjectId, ref: 'Gasolina'}],
    imagen:{type:String},
    nameOwner:{type:String},
    tanqueGasolina:{type:String}

}, {versionKey:false})

export default mongoose.models.Vehiculo || mongoose.model('Vehiculo', vehiculoSchema)
