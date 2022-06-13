

import jwt from 'jsonwebtoken'

export const createAccessToken = (payload) => {
    return jwt.sign({data:payload} , process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
}

// export const createRefreshToken = (payload) => {
//     return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '7d'})
// }
export const getToken = (token)=>{
    let data = null;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, decoded)=>{
        if(err){
            return console.log('Error al obtener token')
        }else{
            data = decoded;
        }
    })
    return data;
}