import Router from "express";
import auth from "../middlewares/auth";
import { schedule, getAppointments, cancel } from "../controllers/appointments";

const appointmentsRouter = Router();

appointmentsRouter.get("/", getAppointments);
appointmentsRouter.post("/schedule", schedule);
appointmentsRouter.put("/cancel/:id", cancel);

export default appointmentsRouter;