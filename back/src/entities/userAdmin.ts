import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  Unique,
  OneToOne,
} from "typeorm";
import Credentials from "./credentials";

@Entity({ name: "user_admin" })
@Unique(["firstName", "lastName", "email"])
export default class UserAdmin {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 100 })
  firstName: string;
  
  @Column({ length: 100 })
  lastName: string;

  @Column({ length: 100 })
  email: string;

  @Column({ default: "admin" })
  rol: string;

  @OneToOne(() => Credentials)
  @JoinColumn()
  credentials: Credentials;
}
