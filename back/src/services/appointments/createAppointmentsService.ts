import { AppDataSource } from "../../config/data-source";
import Appointment from "../../entities/appointments";
import { getUserPatientByIdService } from "../../services/userPatient";
import { getByDoctorUsernameService } from "../userDoctor";


export default async (appointmentData: Appointment, patientId : string , doctorName : string): Promise<Appointment> => { 
    const { date, time, status, location, notes } = appointmentData;

    try {
        // Obtener doctor asociado a la cita  
        const doctor = await getByDoctorUsernameService(doctorName)
        // Obtener usuario asociado a la cita
        const patient = await getUserPatientByIdService(patientId)
        // Crear nueva cita
        const newAppointment = AppDataSource.getRepository(Appointment).create({ date, time, status, location, notes });
        // Agregar nueva cita al usuario
        if (patient && doctor) {
            newAppointment.userPatient = patient
            newAppointment.userDoctor = doctor
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

