import { Request, Response } from "express";
import IAppointment from "../../interfaces/IAppointment"
import { getAppointmentsService } from "../../services/appointments";
import { Appointments } from "../../entities";


export default async (req: Request, res: Response) => {
    const appointments: Appointments[] = await getAppointmentsService();
    res.status(200).json({ appointments })
};
