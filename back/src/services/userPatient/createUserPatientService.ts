import { AppDataSource } from "../../config/data-source";
import { Credentials, UserPatient } from "../../entities";
import { createCredentialsService } from "../credentials";

interface IUserDto{
        firstName: string,
        lastName: string,
        email: string;
        birthdate: Date;
        dni: string;
        gender: 'male' | 'female' | 'other';
        phoneNumber: string;
        password: string
}

export default async (userData: IUserDto) : Promise<UserPatient> => { 
    const { firstName, lastName, email, birthdate, dni, gender, phoneNumber, password } = userData;
    const username = email;

    try {
        
        const patient = AppDataSource.getRepository(UserPatient).create({ firstName, lastName, email, birthdate, dni, gender, phoneNumber });
        const credentials : Credentials | null = await createCredentialsService({ username, password });

        AppDataSource.manager.transaction( async (transactionalEntityManager)=>{
            console.log("empezo transaccion");
            
            await transactionalEntityManager.save(patient);
            patient.credentials = credentials
            await transactionalEntityManager.save(patient);

            console.log("termino transaccion");
        })
        
        return patient
    } catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error;
    }
};
