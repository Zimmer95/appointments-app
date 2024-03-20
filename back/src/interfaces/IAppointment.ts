interface IAppointment {
    date: Date;
    time: string;
    userId:string;
    status: "active" | "canceled";
    patientName: string;
    doctorName: string;
    durationMinutes: number;
    location: string;
    notes?: string;
  }

export default IAppointment;