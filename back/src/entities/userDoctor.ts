import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Unique,
  OneToOne,
  OneToMany,
} from "typeorm";
import Speciality from "./speciality";
import Credentials from "./credentials";
import Appointment from "./appointments";

@Entity({ name: "user_doctor" })
@Unique(["firstName", "lastName", "email", "tuition", "speciality"])
export default class UserDoctor {
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
  tuition: string;

  @Column({ type: "enum", enum: ["male", "female", "other"] })
  gender: String;

  @Column({ length: 100 })
  phoneNumber: string;
 
  @Column({ default: "doctor" })
  rol: string;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials: Credentials;

  @ManyToOne(() => Speciality, (speciality) => speciality.userDoctor)
  speciality: Speciality;

  @OneToMany(() => Appointment, (appointment) => appointment.userDoctor)
  appointment: Appointment[];
}
