import { AppDataSource } from "../../config/data-source";
import { Credentials, Speciality, UserDoctor } from "../../entities";
import { createSpecialityService } from "../specialitys/";
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
  const { name, email, birthdate, tuition, gender, phoneNumber, password } = userData
  const username = email
  
  try {
    const doctor = AppDataSource.getRepository(UserDoctor).create({ name, email, birthdate, tuition, gender, phoneNumber });
    const credentials: Credentials | null = await createCredential({
      username,
      password,
    });

    AppDataSource.manager.transaction(async (transactionalEntityManager) => {
      console.log("empezo transaccion");

      await transactionalEntityManager.save(doctor);
      doctor.credentials = credentials;
      await transactionalEntityManager.save(doctor);

      console.log("termino transaccion");
    });

    return doctor;
    
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};
