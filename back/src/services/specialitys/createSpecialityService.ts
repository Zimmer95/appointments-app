import { AppDataSource } from "../../config/data-source";
import { Location, Speciality } from "../../entities";
import { createLocation } from "../locations/createLocations"


export default async (specialityData: Speciality): Promise<Speciality> => {
  const { name, location } = specialityData;
  const newLocation: Location = await createLocation(location);
  const speciality: Speciality = AppDataSource.getRepository(Speciality).create({ name: name, location: newLocation });
  const results: Speciality = await AppDataSource.getRepository(Speciality).save(speciality);
  return results;
};
