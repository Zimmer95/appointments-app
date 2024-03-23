import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import UserPatient from "./userPatient";
import UserDoctor from "./userDoctor";

@Entity({ name: "appointments" })
export default class Appointment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ length: 100 })
  time: string;

  @Column({ type: "enum", enum: ["active", "canceled"] })
  status: "active" | "canceled";

  @Column({ length: 100 })
  patientName: string;

  @Column({ length: 100 })
  doctorName: string;

  @Column({ length: 100 })
  location: string;

  @Column()
  notes?: string;

  @ManyToOne(() => UserPatient, (userPatient) => userPatient.appointment)
  userPatient: UserPatient;

  @ManyToOne(() => UserDoctor, (userDoctor) => userDoctor.appointment)
  userDoctor: UserDoctor;
}
