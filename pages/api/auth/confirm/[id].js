import bcrypt from "bcrypt";
import userModel from "../../../../models/userModel";
import jwt from "jsonwebtoken";
import DBConnect from "../../../../libs/dbConnect";
import { createAccessToken, getToken } from '../../../../libs/createToken'

DBConnect();

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "GET":
        await confirm(req, res)
    }
  }


async function confirm (req, res){
    const {id} = req.query
    
    try {
  
      const data = await getToken(id)
      if(data === null){
        return res.json({success:false, error:'Error al obtener data'})
      }
  
      const {email, code} = await data.data.result
      const user = await userModel.findOne({email})
      if(user === null){
        return res.json({success:false, error:'User no exist'})
      }
      if(code !== user.code){
        return res.redirect("/home")
      }
      user.status = 'VERIFIED'
  
      await user.save()
      return res.redirect('/cotizaciones');

    } catch (error) {
      res.json({success:false, error:error})
    }
  }