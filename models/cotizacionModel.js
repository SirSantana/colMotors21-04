import mongoose from 'mongoose'

const CotizacionSchema = new mongoose.Schema({
    precio: {type: Number, required: true},
    creator: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    nombreVendedor: {type: [String], default:[]},
    comentarios: {type: [String], default:[]},
    date: {type: Date, default: Date.now},

},{versionKey: false})

export default mongoose.models.Cotizacion || mongoose.model('Cotizacion', CotizacionSchema)