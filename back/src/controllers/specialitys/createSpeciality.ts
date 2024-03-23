import { Request, Response } from "express";
import { createSpecialityService } from "../../services/specialitys";
import Speciality from "../../entities/speciality";


export default async (req: Request, res: Response) => {
    const newSpeciality: Speciality = await createSpecialityService( req.body );
    res.status(200).json({ newSpeciality })
};