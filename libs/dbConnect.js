import mongoose from 'mongoose'

const URL = `mongodb+srv://${process.env.NEXT_PUBLIC_USER}:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.exgvi.mongodb.net/${process.env.NEXT_PUBLIC_DBNAME}?retryWrites=true&w=majority&ssl=true`
const DB = URL

async function DBConnect(){
    try {
        await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database conectado');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
export default DBConnect