import mongoose from 'mongoose'

const URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.exgvi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
const DB = URL

async function DBConnect(){
    try {
        await mongoose.connect(DB, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Database conectado ');
        
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}
export default DBConnect