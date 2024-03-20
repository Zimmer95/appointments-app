import { Request, Response } from "express"
import Appointment from "../../entities/appointments";
import { AppDataSource } from "../../config/data-source";



export default async (req: Request , res:Response) => { 
    const appointmentId = req.params.id;
    const foundAppointment: Appointment | null = await AppDataSource.getRepository(Appointment).findOne({
        where: { id: appointmentId }
    });

    if (!foundAppointment) {
        throw Error("No se encontro el turno solicitado");
    }

    foundAppointment.status = "canceled"

    await AppDataSource.getRepository(Appointment).save(foundAppointment);

    res.status(200).json({ foundAppointment})
}