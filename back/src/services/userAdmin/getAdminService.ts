import { AppDataSource } from "../../config/data-source";
import UserAdmin from "../../entities/userAdmin";

export default async (): Promise<UserAdmin[]> => {
  const userAdmin = AppDataSource.getRepository(UserAdmin).find();
  return userAdmin;
};
