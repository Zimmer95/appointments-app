import { Request, Response } from "express";
import { AppDataSource } from "../../config/data-source";
import { UserAdmin } from "../../entities";

export default async (req: Request, res: Response) => {
  const userId = req.params.id;
  const foundUser: UserAdmin | null = await AppDataSource.getRepository(UserAdmin).findOne({where: { id: userId } });

  if (!foundUser) {
    throw Error("Usuario no encontrado");
  }

  await AppDataSource.getRepository(UserAdmin).remove(foundUser);
  
  return;
};
