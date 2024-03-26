import { Request, Response } from "express";
import { deleteAdminService } from "../../services/userAdmin";

export default async (req: Request, res: Response) => {
  try {
    await deleteAdminService(req, res);
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar usuario");
    res
      .status(500)
      .json({ message: "Error interno del servidor al eliminar usuario" });
  }
};
