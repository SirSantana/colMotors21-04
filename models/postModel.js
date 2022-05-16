import mongoose from 'mongoose'


const postModel = new mongoose.Schema({
    creator: 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ,
    nombreCreador: {type:[String], default:[]},
    repuesto: {type: String, required: true},
    marca: {type: String},
    referencia: {type: String, required: true},
    selectedFile:String,
    title:String,
    lugar:String,
    cotizaciones: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Cotizacion'
        }
    ],
    likes:{
        type:[String],
        default:[]
    },
    favorites:{
        type:[String], default:[]
    },
    shares:{
        type:[String], default:[]
    },
    date: {
        type:Date,
        default: Date.now()
    },
    comentarios:{type: [String], default:[]}
}, {versionKey: false})

postModel.pre('remove', function(next) {
    // 'this' is the client being removed. Provide callbacks here if you want
    // to be notified of the calls' result.
    creator.remove({ _id: { $in: this.creator }}).exec();
    next();
  });
  

export default mongoose.models.postModel || mongoose.model('postModel', postModel)
