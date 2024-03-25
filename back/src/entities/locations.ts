import { Entity, PrimaryGeneratedColumn, Column, Unique } from "typeorm";

@Entity({ name: "location" })
@Unique(["level", "room"])
export default class Location {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    length: 100,
  })
  level: string;

  @Column({
    length: 100,
  })
  room: string;
}
