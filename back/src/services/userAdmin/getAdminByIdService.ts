import { AppDataSource } from "../../config/data-source"
import { UserAdmin } from "../../entities"



export default async (userId: string) => {
    const  id = userId
    const foundUser : UserAdmin | null = await AppDataSource.getRepository(UserAdmin).findOne({where: { id: id }})

    if(!foundUser){
        throw Error("usuario no encontrado")
    };
    
    return foundUser;
}