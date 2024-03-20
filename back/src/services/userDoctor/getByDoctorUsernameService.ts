import { AppDataSource } from "../../config/data-source";
import { UserDoctor } from "../../entities";

export default async (user: string) => {
  const foundUser: UserDoctor | null = await AppDataSource.getRepository(
    UserDoctor
  ).findOne({
    where: { email: user },
    relations: ["credentials", "speciality", "appointment"],
  });
  if (!foundUser) {
    throw Error("usuario no encontrado");
  }
  return foundUser;
};
