import { Request, Response } from "express";
import { deleteSpecialityService } from "../../services/specialitys";

export default async (req: Request, res: Response) => {
  try {
    await deleteSpecialityService(req, res);
    res.status(200).json({ message: "Especialidad eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la especialidad");
    res
      .status(500)
      .json({ message: "Error interno del servidor al eliminar especialidad" });
  }
};
