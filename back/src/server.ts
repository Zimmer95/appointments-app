import express from "express";
import cors from "cors";
import userPatientRouter from "./routes/userPatientRouter";
import userDoctorRouter from "./routes/userDoctorRouter";
import appointmentsRouter from "./routes/appointmentsRouter";
import specialitysRouter from "./routes/specialitysRouter";
import adminRouter from "./routes/adminRouter";
import validateRouter from "./routes/validateRouter"

const app = express();

app.use(express.json());

app.use(cors());

app.use("/validate", validateRouter);

app.use("/admin", adminRouter);

app.use("/doctor", userDoctorRouter);

app.use("/patient", userPatientRouter);

app.use("/appointment", appointmentsRouter);

app.use("/speciality", specialitysRouter);

export default app;
