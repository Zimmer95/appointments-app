import { AppDataSource } from "../../config/data-source";
import { Credentials, Speciality, UserDoctor } from "../../entities";
import { createSpeciality } from "../specialitys/specialityService";
import { createCredential } from "../credentials/credentialsService";

interface IUserDoctorDto {
  name: string;
  email: string;
  birthdate: Date;
  tuition: string;
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
    tuition,
    gender,
    phoneNumber,
    speciality,
    password,
  } = userData;
  const username = email;

  try {
    const newUser = AppDataSource.getRepository(UserDoctor).create({ name, email, birthdate, tuition, gender, phoneNumber });
    const credentials: Credentials | null = await createCredential({
      username,
      password,
    });
    const speciality: Speciality | null = await createSpeciality ({

    })

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
