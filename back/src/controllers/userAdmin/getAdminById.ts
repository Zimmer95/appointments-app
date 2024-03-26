import { Request, Response } from "express";
import { getAdminByIdService } from "../../services/userAdmin";

export default async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const foundUser = await getAdminByIdService(id);
    res.status(200).json({ foundUser });
  } catch (error) {
    console.error("Error al buscar usuario");
    res
      .status(500)
      .json({ message: "Error interno del servidor al buscar usuario por ID" });
  }
};
