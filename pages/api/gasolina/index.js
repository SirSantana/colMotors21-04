import DBConnect from "../../../libs/dbConnect"
import gasolinaModel from "../../../models/gasolinaModel"


DBConnect()
export default async (req, res)=>{
    switch (req.method) {
        case 'GET':
            await getGasolina(req, res)
    
    }
}


export const getGasolina= async(req, res)=>{
    const {body, query} = req;
    console.log(body, query);

}