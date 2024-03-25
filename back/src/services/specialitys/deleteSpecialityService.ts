import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { Speciality } from "../../entities";

export default async (req: Request, res: Response) => {
  const specialityId = req.params.id;
  const foundSpeciality: Speciality | null = await AppDataSource.getRepository(Speciality).findOne({
    where: { id: specialityId }
  });

  if (!foundSpeciality) {
    throw Error("Usuario no encontrado");
  }

  await AppDataSource.getRepository(Speciality).remove(foundSpeciality);
  return;
};
