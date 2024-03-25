import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, OneToOne, Unique } from "typeorm";
import UserDoctor from "./userDoctor";
import Location from "./locations";

@Entity({ name: "speciality" })
@Unique(["name", "location"])
export default class Speciality {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  name: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @OneToMany(() => UserDoctor, (userDoctor) => userDoctor.speciality)
  userDoctor: UserDoctor[];
}
