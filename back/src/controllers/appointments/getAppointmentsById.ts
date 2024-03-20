/* import { Request, Response } from "express";
import IAppointment from "../../interfaces/IAppointment"


export default async (req: Request, res: Response) => {
    const { id } = req.body;
    const appointment = await getAppointmentsByIdService(id);
    res.status(200).json({ appointment })
}; */