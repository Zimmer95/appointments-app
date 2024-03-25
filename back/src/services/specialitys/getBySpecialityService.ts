import { AppDataSource } from "../../config/data-source";
import { Speciality } from "../../entities";

export default async (speciality: string) => {
  const foundSpeciality: Speciality | null = await AppDataSource.getRepository(Speciality).findOne({
     where: { name: speciality }, relations: [ "location" ]
    });
  if (!foundSpeciality) {
    throw Error("Especialidad no encontrada");
  }
  return foundSpeciality;
};
