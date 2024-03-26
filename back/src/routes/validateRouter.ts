import Router from "express";
import { validateUserPatient } from "../controllers/userPatient";
import { validateUserDoctor } from "../controllers/userDoctor";
import { validateAdmin } from "../controllers/userAdmin";

const validateRouter = Router();

validateRouter.post("/", validateAdmin, validateUserDoctor, validateUserPatient);
/* userPatientRouter.post("/validate", validateUserDoctor);
userPatientRouter.post("/validate", validateUserPatient); */

export default validateRouter;
