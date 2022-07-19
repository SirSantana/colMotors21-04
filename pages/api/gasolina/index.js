import DBConnect from "../../../libs/dbConnect"


DBConnect()
export async function handler(req, res){
    switch (req.method) {
        case 'GET':
            await getGasolina(req,res)
        case 'POST':
            await createGasolina(req, res)
    
    }
}

async function getGasolina(req, res){
    try {
        
    } catch (error) {
        
    }

}
async function createGasolina(req, res){
    try {
        
    } catch (error) {
        
    }
}