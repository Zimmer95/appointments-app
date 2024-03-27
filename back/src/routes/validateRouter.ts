import Router from "express";
import { validate } from "../middlewares/validate";

const validateRouter = Router();

try {
  validateRouter.post("/", validate);
} catch {}

export default validateRouter;
