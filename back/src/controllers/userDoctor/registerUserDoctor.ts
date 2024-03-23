import { Request, Response } from "express";
import { createUserDoctorService } from "../../services/userDoctor";
import { UserDoctor } from "../../entities";

export default async (req: Request, res: Response) => {
  const userData = req.body;
  const {name, email, birthdate, tuition, gender, phoneNumber, password} = req.body;
  
  if (
    !name ||!email ||!birthdate ||!tuition ||!gender ||!phoneNumber ||!password){
      return res.status(200).json({ message: "Todos los campos son requeridos" });
    }
    
  try {
    const doctor: UserDoctor | null = await createUserDoctorService(userData);
    res.status(200).json({ doctor });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
