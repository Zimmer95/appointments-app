import { Request, Response } from "express";
import { getAdminService } from "../../services/userAdmin";
import { UserAdmin } from "../../entities";

export default async (req: Request, res: Response) => {
  const userAdmin: UserAdmin[] = await getAdminService();
  res.status(200).json({ userAdmin });
};
