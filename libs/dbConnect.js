import mongoose from 'mongoose'

const URL = `mongodb+srv://santaNaN:v4y1qou2NEAzXBax@cluster0.exgvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
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