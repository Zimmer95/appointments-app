import { AppDataSource } from "../../config/data-source";
import { Speciality } from "../../entities";

export const createSpeciality = async (credentialData: Speciality): Promise<Speciality> => {
  const { name, location } = credentialData;
  const speciality: Speciality = AppDataSource.getRepository(Speciality).create({ name: name, location: location });
  const results: Speciality = await AppDataSource.getRepository(Speciality).save(speciality);
  return results;
};
