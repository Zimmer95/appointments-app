import { AppDataSource } from "../../config/data-source";
import IAppointments from "../../interfaces/IAppointment";
import Appointment from "../../entities/appointments";
import { getUserPatientByIdService } from "../../services/userPatient";
import { getByDoctorUsernameService } from "../userDoctor";


export default async (appointmentData: IAppointments): Promise<Appointment> => { 
    const { date, time, userId, status, patientName, doctorName, location, notes } = appointmentData;

    try {
        // Obtener doctor asociado a la cita
        const doctor = getByDoctorUsernameService(doctorName)


        // pensar si sacar patientName y doctorName de la entidad appointments 
        // y guardar unicamente el id de paciente y doctor evitaria redundancia de datos,
        // a la hora de mostrar los datos en pantalla se traen los datos
        
        // Crear nueva cita
        const newAppointment = AppDataSource.getRepository(Appointment).create({ date, time, status, patientName, doctorName, location, notes });
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

