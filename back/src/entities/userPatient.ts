import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  Unique,
} from "typeorm";
import Credentials from "./credentials";
import Appointment from "./appointments";

@Entity({ name: "user_patient" })
@Unique(["firstName", "lastName", "email", "dni"])
export default class UserPatient {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  firstName: string;
  
  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100 })
  email: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column({
    length: 100,
  })
  dni: string;

  @Column({ type: "enum", enum: ["male", "female", "other"] })
  gender: "male" | "female" | "other";

  @Column({ length: 100 })
  phoneNumber: string;

  @Column({ default: "patient" })
  rol: string;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials: Credentials;

  @OneToMany(() => Appointment, (appointment) => appointment.userPatient)
  appointment: Appointment[];
}