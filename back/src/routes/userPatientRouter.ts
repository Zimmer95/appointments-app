import Router from "express";
import {
  getUserPatientById,
  getUserPatient,
  registerUserPatient,
  deleteUserPatient,
  validateUserPatient,
} from "../controllers/userPatient";

const userPatientRouter = Router();

userPatientRouter.get("/", getUserPatient);
userPatientRouter.get("/:id", getUserPatientById);
userPatientRouter.post("/register", registerUserPatient);
/* userPatientRouter.post("/validate", validateUserPatient); */
userPatientRouter.delete("/delete/:id", deleteUserPatient);

export default userPatientRouter;
