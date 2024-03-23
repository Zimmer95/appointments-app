import Router from "express";
import {
  getUserDoctorById,
  getUserDoctor,
  registerUserDoctor,
  validateUserDoctor,
  deleteUserDoctor,
} from "../controllers/userDoctor";

const userDoctorRouter = Router();

userDoctorRouter.get("/", getUserDoctor);
userDoctorRouter.get("/:id", getUserDoctorById);
userDoctorRouter.post("/register", registerUserDoctor);
userDoctorRouter.post("/validate", validateUserDoctor);
userDoctorRouter.delete("/delete/:id", deleteUserDoctor);

export default userDoctorRouter;
