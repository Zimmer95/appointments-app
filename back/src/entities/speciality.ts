import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne } from "typeorm";
import UserDoctor from "./userDoctor";
import Location from "./locations";

@Entity({ name: "speciality" })
export default class Speciality {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location[];

  @OneToMany(() => UserDoctor, (userDoctor) => userDoctor.speciality)
  userDoctor: UserDoctor[];
}
