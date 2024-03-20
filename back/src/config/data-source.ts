import "reflect-metadata"
import { DataSource } from "typeorm"
import { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME} from "./env"
import { Appointments, Credentials, Speciality, UserDoctor, UserPatient } from "../entities"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    synchronize: true,
    logging: true,
    entities: [UserPatient, UserDoctor, Credentials, Appointments, Speciality],
    subscribers: [],
    migrations: [],
})