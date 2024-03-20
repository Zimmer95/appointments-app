import { Request, Response } from "express";
import { createUserPatientService } from "../../services/userPatient";
import { UserPatient } from "../../entities";

export default async (req: Request, res: Response) => {
  const {
    name,
    email,
    birthdate,
    dni,
    gender,
    phoneNumber,
    password,
  } = req.body;

  if (
    !name ||
    !email ||
    !birthdate ||
    !dni ||
    !gender ||
    !phoneNumber ||
    !password
  ) {
    return res.status(200).json({ message: "Todos los campos son requeridos" });
  }
  const userData = req.body;
  try {
    const newUser: UserPatient | null = await createUserPatientService(
      userData
    );
    res.status(200).json({ newUser });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
