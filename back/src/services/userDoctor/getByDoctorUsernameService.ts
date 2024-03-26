import { AppDataSource } from "../../config/data-source";
import { UserDoctor } from "../../entities";

export default async (userDoctor: string) => {
  const foundUser: UserDoctor | null = await AppDataSource.getRepository(UserDoctor).findOne({
    where: { email: userDoctor }
  });

  if (!foundUser) {
    throw Error("usuario no encontrado");
  }
  
  return foundUser;
};
