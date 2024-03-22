import { AppDataSource } from "../../config/data-source"
import { UserDoctor } from "../../entities"



export default async (userId: string) => {
    const  id = userId
    const foundUser : UserDoctor | null = await AppDataSource.getRepository(UserDoctor).findOne({
        where: { id: id },
        relations: ["credentials", "speciality", "appointment"]
      })
    if(!foundUser){
        throw Error("usuario no encontrado")
    };
    return foundUser;
}