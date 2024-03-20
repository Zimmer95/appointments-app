import express from "express";
import cors from "cors";
import userPatientRouter from "./routes/userPatientRouter";
import userDoctorRouter from "./routes/userDoctorRouter";
import appointmentsRouter from "./routes/appointmentsRouter";
const app = express();

app.use(express.json());

app.use(cors());

app.use("/doctor", userDoctorRouter);

app.use("/patient", userPatientRouter);

app.use("/appointment", appointmentsRouter);

export default app;
