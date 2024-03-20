import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import UserDoctor from "../../entities/userDoctor";

export default async (req: Request, res: Response) => {
  const userId = req.params.id;
  const foundUser: UserDoctor | null = await AppDataSource.getRepository(
    UserDoctor
  ).findOne({
    where: { id: userId },
    relations: ["speciality", "appointment"],
  });

  if (!foundUser) {
    throw Error("Usuario no encontrado");
  }

  await AppDataSource.getRepository(UserDoctor).remove(foundUser);
  return;
};
