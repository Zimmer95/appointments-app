
import { AppDataSource } from "../../config/data-source"
import UserDoctor from "../../entities/userDoctor"


export default async (): Promise<UserDoctor[]> => {
    const users = await AppDataSource.getRepository(UserDoctor).find({
        relations: { appointment: true, credentials: true, speciality: true}
    })
    return users
}