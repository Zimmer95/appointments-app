import dotenv from "dotenv";
import app from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source" 
import { PORT } from "./config/env";


AppDataSource.initialize()
    .then(res=>{
        console.log("conexion establecida con la base de datos")
        dotenv.config();
        const port = PORT || 3000;
        app.listen(port, ()=>{console.log(`server listening on port ${port}`)})
    })
