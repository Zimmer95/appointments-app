import { AppDataSource } from "../../config/data-source";
import IAppointments from "../../interfaces/IAppointment";
import Appointment from "../../entities/appointments";
import { getUserPatientByIdService } from "../../services/userPatient";


export default async (appointmentData: IAppointments): Promise<Appointment> => { 
    const { date, time, userId, status, patientName, doctorName, durationMinutes, location, notes } = appointmentData;

    try {
        // Crear nueva cita
        const newAppointment = AppDataSource.getRepository(Appointment).create({ date, time, status, patientName, doctorName, durationMinutes, location, notes });

        // Obtener usuario asociado a la cita
        const foundUser = await getUserPatientByIdService(userId);

        // Agregar nueva cita al usuario
        if (foundUser) {
            newAppointment.userPatient = foundUser
        } else {
            throw new Error('Usuario no encontrado');
        }

        // Guardar la nueva cita
        await AppDataSource.getRepository(Appointment).save(newAppointment);

        return newAppointment;
    } catch (error) {
        console.error("Error al crear la cita:", error);
        throw error;
    }
};

