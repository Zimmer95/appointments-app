import Router from "express";
import {
  getAdmin,
  getAdminById,
  registerAdmin,
  validateAdmin,
  deleteAdmin,
} from "../controllers/userAdmin";

const adminRouter = Router();

adminRouter.get("/", getAdmin);
adminRouter.get("/:id", getAdminById);
adminRouter.post("/register", registerAdmin);
/* adminRouter.post("/validate", validateAdmin); */
adminRouter.delete("/delete/:id", deleteAdmin);

export default adminRouter;
