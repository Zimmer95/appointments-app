import { NextFunction, Request, Response } from "express";

const auth = (req: Request , res: Response, next: NextFunction) => {
    
    const { token } = req.headers;
    console.log(token)
    if(token === "Token-Valido") {
        next();
    } else {
        res.status(401).json({ message: "No autorizado"});
    }
};

export default auth;