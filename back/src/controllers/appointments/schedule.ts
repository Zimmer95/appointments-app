import { Request, Response } from "express";
import { createAppointmentsService } from "../../services/appointments";
import Appointment from "../../entities/appointments";


export default async (req: Request, res: Response) => {
    const{ date, time, userId, status, patientName, doctorName, durationMinutes, location, notes } = req.body;
    const newAppointment: Appointment = await createAppointmentsService( { date, time, userId, status, patientName, doctorName, durationMinutes, location, notes }  );
    res.status(200).json({ newAppointment })
};