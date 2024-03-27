import { Request, Response } from "express";
import { getCredentialsByUsername } from "../services/credentials";

export const validate = async (req: Request, res: Response) => {
  const user = req.body.username;
  const pass = req.body.password;

  try {
    const foundCredential = await getCredentialsByUsername(user);
    const password = foundCredential.password

    if (pass === password) {
      res.status(200).json({ message: "Contraseña validada", user });
    } else {
      res.status(401).json({ message: "Contraseña incorrecta" });
    }
  } catch (error) {
    console.error("Error buscar usuario");
    res
      .status(500)
      .json({ message: "Error interno del servidor al buscar usuario por ID " });
  }
};
