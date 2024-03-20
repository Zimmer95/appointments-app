import { AppDataSource } from "../../config/data-source"
import Appointment from "../../entities/appointments"



export default async (): Promise<Appointment[]> => { 
    const appointments = await AppDataSource.getRepository(Appointment).find({ relations: { userPatient: true }})
    return appointments
}