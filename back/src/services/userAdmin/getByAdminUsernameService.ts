import { AppDataSource } from "../../config/data-source";
import { UserAdmin } from "../../entities";

export default async (userAdmin: string) => {
  const foundUser: UserAdmin | null = await AppDataSource.getRepository(
    UserAdmin
  ).findOne({
    where: { firstName: userAdmin }
  });
  if (!foundUser) {
    throw Error("usuario no encontrado");
  }
  return foundUser;
};
