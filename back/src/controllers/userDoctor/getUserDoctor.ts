import { Request, Response } from "express";
import IUserDoctor from "../../interfaces/IUserDoctor";
import { getUserDoctorService } from "../../services/userDoctor";
import { UserDoctor } from "../../entities";

export default async (req: Request, res: Response) => {
  const userDoc: UserDoctor[] = await getUserDoctorService();
  res.status(200).json({ userDoc });
};
