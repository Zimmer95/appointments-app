import { Request, Response } from "express";
import { createAppointmentsService } from "../../services/appointments";
import Appointment from "../../entities/appointments";


export default async (req: Request, res: Response) => {
    const patient  = req.body.userId
    const doctor  = req.body.doctorName
    
    const newAppointment: Appointment = await createAppointmentsService(req.body, patient, doctor);
    res.status(200).json({ newAppointment })
};