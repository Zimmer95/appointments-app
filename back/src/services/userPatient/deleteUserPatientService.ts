import { Request, Response } from "express"
import { AppDataSource } from "../../config/data-source"
import User from "../../entities/userPatient"


export default async (req: Request, res: Response) => {

    const userId = req.params.id;
    const foundUser: User | null = await AppDataSource.getRepository(User).findOne({
        where: { id: userId },
        relations: ["appointment"]
    });

    if (!foundUser) {
        throw Error("Usuario no encontrado");
    }

    await AppDataSource.getRepository(User).remove(foundUser);
    return
}