import mongoose from 'mongoose'

const UserModel = new mongoose.Schema({
    name:{type:String, required:true},
    email: {type: String, required: true, unique:true},
    password: {type:String, required:true},
    informacion:{
        pais:String,
        telefono: Number,
        direccion: String,
        ciudad: String,
        avatar:String
    },
    pais:{type:String},
    marca:{type:String, required:true},
    vehiculos:[{type:Object}],
    id: {type: String},
    posts:[{
      type: mongoose.Schema.Types.ObjectId,
      ref:'postModel'
  }],
  cotizaciones: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cotizacion'}],
  calificacion: String,
  role: [String],


},{versionKey:false})


export default mongoose.models.User || mongoose.model('User', UserModel)
