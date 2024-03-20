import IUser from "../../interfaces/IUserPatient";
import { AppDataSource } from "../../config/data-source";
import { Credentials, UserPatient } from "../../entities";
import { createCredential } from "../credentials/credentialsService";

interface IUserDto{
        name: string;
        email: string;
        birthdate: Date;
        dni: string;
        gender: 'male' | 'female' | 'other';
        phoneNumber: string;
        password: string
}

export default async (userData: IUserDto) : Promise<UserPatient> => { 
    const { name, email, birthdate, dni, gender, phoneNumber, password } = userData;
    const username = email;

    try {
        
        const newUser = AppDataSource.getRepository(UserPatient).create({ name, email, birthdate, dni, gender, phoneNumber });
        const credentials : Credentials | null = await createCredential({ username, password });

        AppDataSource.manager.transaction( async (transactionalEntityManager)=>{
            console.log("empezo transaccion");
            
            await transactionalEntityManager.save(newUser);
            newUser.credentials = credentials
            await transactionalEntityManager.save(newUser);

            console.log("termino transaccion");
        })
        
        return newUser
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error;
    }
};
