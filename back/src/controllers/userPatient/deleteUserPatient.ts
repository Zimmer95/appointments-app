import { Request, Response } from "express";
import { deleteUserPatientService } from "../../services/userPatient";

export default async (req: Request, res: Response) => {
  try {
    await deleteUserPatientService(req, res);
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario");
    res
      .status(500)
      .json({ message: "Error interno del servidor al eliminar usuario" });
  }
};
