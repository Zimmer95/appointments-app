import { Request, Response } from "express";
import { getByPatientUsernameService } from "../../services/userPatient";

export default async (req: Request, res: Response) => {
  const user = req.body.username;
  const pass = req.body.password;

  try {
    const foundUser = await getByPatientUsernameService(user);
    const password = foundUser.credentials.password;

    if (pass === password) {
      res.status(200).json({ message: "Contraseña validada", foundUser });
    } else {
      res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.error("Error buscar usuario");
    res
      .status(500)
      .json({ message: "Error interno del servidor al buscar usuario por ID 2" });
  }
};
