import { Request, Response } from "express";
import IUserDoctor from "../../interfaces/IUserPatient";
import { getUserDoctorService } from "../../services/userDoctor";

export default async (req: Request, res: Response) => {
  const users: IUserDoctor[] = await getUserDoctorService();
  res.status(200).json({ users });
};
