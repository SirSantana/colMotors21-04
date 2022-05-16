import mongoose from 'mongoose'

const CotizacionSchema = new mongoose.Schema({
    precio: {type: String, required: true},
    creator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    nombreVendedor: {type: [String], default:[]},
    comentarios: {type: [String], default:[]},
    date: {type: Date, default: Date.now},
    repuestos: {type: String, required: true},
    // post:[{type: mongoose.Schema.Types.ObjectId, ref: 'postModel'}],
    idPost:{type: String, required: true}
},{versionKey: false})

export default mongoose.models.Cotizacion || mongoose.model('Cotizacion', CotizacionSchema)