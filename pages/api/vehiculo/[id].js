import DBConnect from "../../../libs/dbConnect";
import userModel from "../../../models/userModel";
import vehiculoModel from "../../../models/vehiculoModel";

DBConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await updateVehiculo(req, res);
  }
};

export const updateVehiculo = async (req, res) => {
  const { body, query } = req;

  try {
    const vehicule = await vehiculoModel.findById(query.id);

    console.log(body);
    let claves = Object.keys(body);
    
    for (let i = 0; i < claves.length; i++) {
      let clave = claves[i];
      if (body[clave] !== "" && body[clave] !== null) {
        vehicule[clave] = body[clave];
      }
    }
    await vehicule.save();
    res.status(200).json({ success: true });
  } catch (error) {
    console.log(error);
  }
};
