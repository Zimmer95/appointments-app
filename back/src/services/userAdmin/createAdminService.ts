import { AppDataSource } from "../../config/data-source";
import { Credentials, UserAdmin} from "../../entities";
import { createCredential } from "../credentials/credentialsService";


 interface IAdminDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default async (userData: IAdminDto): Promise<UserAdmin> => {
  const { firstName, lastName, email, password } = userData
  const username = email
  
  try {
    const admin = AppDataSource.getRepository(UserAdmin).create({  firstName, lastName,  email});
    const credentials: Credentials | null = await createCredential({ username, password });

    AppDataSource.manager.transaction(async (transactionalEntityManager) => {
      await transactionalEntityManager.save(admin);
      admin.credentials = credentials;
      await transactionalEntityManager.save(admin);
    });
    return admin;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};
