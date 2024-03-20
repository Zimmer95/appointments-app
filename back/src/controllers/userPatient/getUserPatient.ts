import { Request, Response } from "express";
import IUser from "../../interfaces/IUserPatient";
import { getUserPatientService } from "../../services/userPatient";

export default async (req: Request, res: Response) => {
  const users: IUser[] = await getUserPatientService();
  res.status(200).json({ users });
};
