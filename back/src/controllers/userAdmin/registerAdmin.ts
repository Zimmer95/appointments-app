import { Request, Response } from "express";
import { createAdminService } from "../../services/userAdmin";
import { UserAdmin } from "../../entities";

export default async (req: Request, res: Response) => {
  const userData = req.body;
  const {firstName, lastName, email, password} = req.body;
  
  if (!firstName || !lastName ||!email  ||!password ){
    return res.status(200).json({ message: "Todos los campos son requeridos" });
  }
  try {
    const admin: UserAdmin | null = await createAdminService(userData);
    res.status(200).json({ admin });
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
