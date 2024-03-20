import { Request, Response } from "express";
import { cancelAppointmentsService } from "../../services/appointments";
import getAppointments from "./getAppointments";


export default async (req: Request, res: Response) => {

    
    try {
        await cancelAppointmentsService(req, res);
        console.log("paso el try");
    } catch (error) {
        console.error("Error al cancelar turno");
        res.status(500).json({ message: "Error interno del servidor al intentar cancelar turno" });
    }
};