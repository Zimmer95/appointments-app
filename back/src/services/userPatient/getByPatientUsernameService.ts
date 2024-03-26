import { AppDataSource } from "../../config/data-source";
import { UserPatient } from "../../entities";

export default async (user: string) => {
  const foundUser: UserPatient | null = await AppDataSource.getRepository(UserPatient).findOne({
    where: { email: user },
    relations: ["credentials", "appointment"],
  });

  if (!foundUser) {
    throw Error("usuario no encontrado");
  }
  
  return foundUser;
};
