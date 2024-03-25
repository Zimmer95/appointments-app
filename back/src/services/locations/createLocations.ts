import { AppDataSource } from "../../config/data-source";
import { Location } from "../../entities";

export const createLocation = async (locationData: Location): Promise<Location> => {
  const { level, room } = locationData;
  const location: Location = AppDataSource.getRepository(Location).create({ level: level, room: room });
  const newlocation: Location = await AppDataSource.getRepository(Location).save(location);
  return newlocation;
};

