import { Request, Response } from "express";
import { createUserDoctorService } from "../../services/userDoctor";
import { UserDoctor } from "../../entities";

export default async (req: Request, res: Response) => {
  const {
    name,
    email,
    birthdate,
    dni,
    gender,
    phoneNumber,
    password,
    speciality,
  } = req.body;

  if (
    !name ||
    !email ||
    !birthdate ||
    !dni ||
    !gender ||
    !phoneNumber ||
    !password ||
    !speciality
  ) {
    return res.status(200).json({ message: "Todos los campos son requeridos" });
  }
  const userData = req.body;
  try {
    const newUser: UserDoctor | null = await createUserDoctorService(userData);
    res.status(200).json({ newUser });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
