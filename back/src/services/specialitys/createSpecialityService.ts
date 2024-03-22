import { AppDataSource } from "../../config/data-source";
import { Speciality } from "../../entities";

export const createSpecialityService = async (specialityData: Speciality): Promise<Speciality> => {
  const { name, location } = specialityData;
  const speciality: Speciality = AppDataSource.getRepository(Speciality).create({ name: name, location: location });
  const results: Speciality = await AppDataSource.getRepository(Speciality).save(speciality);
  return results;
};
