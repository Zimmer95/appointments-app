
import { AppDataSource } from "../../config/data-source"
import UserPatient from "../../entities/userPatient"


export default async (): Promise<UserPatient[]> => {
    const users = await AppDataSource.getRepository(UserPatient).find({
        relations: { appointment: true, credentials: true}
    })
    return users
}