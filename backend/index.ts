import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config()

const app:any = express()
const port:string = process.env.PORT || '3030' 

app.use(express.json())

app.get("/", (req:Request, res:Response) => {
    res.send("Running");
});

app.listen(port, () => console.log(`Running on port ${port}`));