import DBConnect from "../../../libs/dbConnect";



export default async function handler(req, res){
    DBConnect()
    switch (req.method) {
        case 'POST':
            await createComment(req, res)

    }
}

export const createComment=async (req, res)=>{
    try {
        
    } catch (error) {
        
    }
}