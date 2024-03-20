import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity({ name: "credentials" })
@Unique(["username"])
export default class Credentials {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 100,
  })
  username: string;

  @Column({
    length: 100,
  })
  password: string;
}
