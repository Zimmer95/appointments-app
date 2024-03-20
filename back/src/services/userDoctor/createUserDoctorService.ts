import { AppDataSource } from "../../config/data-source";
import { Credentials, UserDoctor } from "../../entities";
import { createCredential } from "../credentials/credentialsService";

interface IUserDoctorDto {
  name: string;
  email: string;
  birthdate: Date;
  matricula: string;
  gender: "male" | "female" | "other";
  phoneNumber: string;
  speciality: string;
  password: string;
}

export default async (userData: IUserDoctorDto): Promise<UserDoctor> => {
  const {
    name,
    email,
    birthdate,
    matricula,
    gender,
    phoneNumber,
    speciality,
    password,
  } = userData;
  const username = email;

  try {
    const newUser = AppDataSource.getRepository(UserDoctor).create({
      name,
      email,
      birthdate,
      matricula,
      gender,
      speciality,
      phoneNumber,
    });
    const credentials: Credentials | null = await createCredential({
      username,
      password,
    });

    AppDataSource.manager.transaction(async (transactionalEntityManager) => {
      console.log("empezo transaccion");

      await transactionalEntityManager.save(newUser);
      newUser.credentials = credentials;
      await transactionalEntityManager.save(newUser);

      console.log("termino transaccion");
    });

    return newUser;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};
