import DBConnect from '../../../libs/dbConnect';
import userModel from '../../../models/userModel'
import bcrypt from "bcrypt";

DBConnect()
export default async (req, res)=>{
    switch (req.method) {
        case 'PATCH':
            await updatePassword(req, res)

    }
}

export const updatePassword=async (req, res)=>{
    const {form:{password, confirmPassword}, email:{email}} = req.body
    try {
        if(password !== confirmPassword){
             return res.status(403).json("Datos invalidos");
        }
        const user = await userModel.findOne({email})
        console.log('user',user);
        const pass = await bcrypt.hash(password, 10)
        user.password = pass
        await user.save()
            //ECRYPT 
        res.status(200).json({success:true, user})

    } catch (error) {
        console.log(error);
    }
}