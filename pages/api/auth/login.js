import userModel from "../../../models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import DBConnect from "../../../libs/dbConnect";

DBConnect()
export default async (req, res) => {

    switch(req.method){
        case "POST":
            await login(req, res)
            break;
    }
}

export const login=async(req, res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    const {email, password} = req.body
    try {
        const userExist = await userModel.findOne({email})

        if(!userExist) return res.status(403).json('No existe una cuenta con ese id')
        
        const pass = await bcrypt.compare(password, userExist.password)

        if(!pass) return res.status(403).json('Credenciales mal')

        const token = jwt.sign({
            id:userExist._id
        }, 'test')

        res.status(200).json({result: userExist, token})

    } catch (error) {
        console.log(error);
    }
}