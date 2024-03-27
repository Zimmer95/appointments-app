import { AppDataSource } from "../../config/data-source";
import { Credentials } from "../../entities";

export default async (user: string) => {
  const foundUser: Credentials | null = await AppDataSource.getRepository(Credentials).findOne({
     where: { username: user }
  });

  if (!foundUser) {
    throw Error("usuario no encontrado");
  }
  
  return foundUser;
};
