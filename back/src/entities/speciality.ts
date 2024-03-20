import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import UserDoctor from "./userDoctor";

@Entity({ name: "speciality" })
export default class Speciality {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  location: string;

  @OneToMany(() => UserDoctor, (userDoctor) => userDoctor.speciality)
  userDoctor: UserDoctor[];
}
