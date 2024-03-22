import Router from "express";
import { createSpeciality, getSpeciality, deleteSpeciality, getSpecialityById, modifySpeciality } from "../controllers/specialitys";

const specialitysRouter = Router();

specialitysRouter.get("/", getSpeciality);
specialitysRouter.get("/:id", getSpecialityById);
specialitysRouter.post("/create", createSpeciality);
specialitysRouter.put("/modify", modifySpeciality);
specialitysRouter.delete("/delete/:id", deleteSpeciality);

export default specialitysRouter;