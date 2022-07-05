import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    informacion: {
      pais: String,
      telefono: Number,
      direccion: String,
      ciudad: String,
      avatar: String,
    },
    pais: { type: String },
    ciudad:{type:String},
    marca: { type: String },
    vehiculos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vehiculo" }],

    id: { type: String },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "postModel",
      },
    ],
    marcasComercializadas: [String],
    cotizaciones: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cotizacion" }],
    calificacion: [String],
    numeroCotizaciones: {
      type: Number,
      default: 0,
    },
    role: [String],
    status: { type: String },
    code: { type: String, required: true },
    amigos: [String],
  },
  { versionKey: false }
);

export default mongoose.models.User || mongoose.model("User", UserModel);
