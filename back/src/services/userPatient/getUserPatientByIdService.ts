import { AppDataSource } from "../../config/data-source"
import { UserPatient } from "../../entities"



export default async (userId: string) => {
    const  id = userId
    const foundUser : UserPatient | null = await AppDataSource.getRepository(UserPatient).findOne({
        where: { id: id },
        relations: ["credentials", "appointment"]
      })
    if(!foundUser){
        throw Error("usuario no encontrado")
    };
    return foundUser;
}