import ICredential from "../../interfaces/ICredential"
import { AppDataSource } from "../../config/data-source"
import { Credentials } from "../../entities"


export default async ( credentialData : ICredential ): Promise<Credentials> => { 
    const { username, password } =  credentialData
    const credentials : Credentials = AppDataSource.getRepository(Credentials).create({username: username, password: password})
    const results: Credentials = await AppDataSource.getRepository(Credentials).save(credentials)
    return results
}

/* export const validateCredential =  async ( credentialData : ICredential ): Promise<Credentials> => { 
    const { username, password } = credentialData
    const foundCredentials : Credentials | null = AppDataSource.getRepository(Credentials).findOneBy(username)
    if(!foundCredentials) throw Error("Password incorrecto");
    return foundCredentials;
} */