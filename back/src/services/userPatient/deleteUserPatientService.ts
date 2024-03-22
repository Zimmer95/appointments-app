import { Request, Response } from "express"
import { AppDataSource } from "../../config/data-source"
import UserPatient from "../../entities/userPatient";


export default async (req: Request, res: Response) => {

    const userId = req.params.id;
    const foundUser: UserPatient | null = await AppDataSource.getRepository(UserPatient).findOne({
        where: { id: userId },
        relations: ["appointment"]
    });

    if (!foundUser) {
        throw Error("Usuario no encontrado");
    }

    await AppDataSource.getRepository(UserPatient).remove(foundUser);
    return
}